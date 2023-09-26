import { cvToValue, hexToCV } from "@stacks/transactions";
import { Constants } from "../common/constants";
import { getMyStxAddress, getStacksAPIPrefix } from "./auth";
import { updateDefaultNFTImageURL } from "./utils";

/**
 * Get all owned NFT's meta image
 *
 * @returns
 */
export async function getNTFsMetaImage(
  setNftsArray,
  nftsImageObj,
  setNftsImageObj,
  saveNftsImageObjToGaia,
  setNftsTotal,
  offset
) {
  // List of NFT image urls
  let nftsArray = [];

  let url =
    getStacksAPIPrefix() +
    "/extended/v1/tokens/nft/holdings?principal=" +
    getMyStxAddress() +
    "&offset=" +
    offset;
  let blockchainApiPrefix = getStacksAPIPrefix();

  // Testnet code - Override these values
  if (Constants.STACKS_MAINNET_FLAG == false) {
    url =
      "https://stacks-node-api.mainnet.stacks.co/extended/v1/tokens/nft/holdings?principal=" +
      "SP1CE3NQXDKCJ2KEFFGCVFA5C196S9F0RRX93HY87" +
      "&offset=" +
      offset;
    // url = "https://stacks-node-api.mainnet.stacks.co/extended/v1/tokens/nft/holdings?principal=SP3CK642B6119EVC6CT550PW5EZZ1AJW661ZMQTYD";
    blockchainApiPrefix = "https://stacks-node-api.mainnet.stacks.co";
  }

  // Fetch data from external API
  const res = await fetch(url);
  const resObj = await res.json();

  // Set total number of NFTs
  if (resObj?.total) {
    setNftsTotal(resObj.total);
  }

  // Parse list of NFT's
  if (resObj?.results?.length > 0) {
    // Loop each NFT
    resObj.results.forEach((eachNFT) => {
      // Get NFT details
      const nftTxId = eachNFT.tx_id;
      const nftContractId = eachNFT.asset_identifier.split("::")[0];
      const nftContractOwner = nftContractId.split(".")[0];
      const nftContractName = nftContractId.split(".")[1];
      const nftName = eachNFT.asset_identifier.split("::")[1];
      const nftTokenId = eachNFT.value.repr;
      const nftTokenIdHex = eachNFT.value.hex;

      let eachNFTDetails = {
        nftUniqueId: `${eachNFT.asset_identifier}:${eachNFT.value.repr}`,
        nftTxId,
        nftContractId,
        nftContractOwner,
        nftContractName,
        nftName,
        nftTokenId,
        nftTokenIdHex,
        nftTokenIdValue: convertNftTokenIdToValue(
          cvToValue(hexToCV(eachNFT.value.hex))
        ),
      };

      // 1. Image URL from default list
      updateDefaultNFTImageURL(
        eachNFTDetails,
        eachNFT.asset_identifier,
        nftTokenId
      );

      // 2. Image URL from previously stored list in gaia
      if (
        !eachNFTDetails.image &&
        nftsImageObj &&
        nftsImageObj[eachNFTDetails.nftUniqueId]
      ) {
        eachNFTDetails.image = nftsImageObj[eachNFTDetails.nftUniqueId];
      }

      // Add nft details to object
      nftsArray.push(eachNFTDetails);

      // 3. Image URL from NFT meta data. If NFT token id is unsigned integer, then process further
      if (
        !eachNFTDetails.image &&
        nftTokenId.startsWith("u") &&
        isNaN(nftTokenId.substr(1)) === false
      ) {
        // Call read-only function of blockchain to get NFT-token-URI
        let apiToGetMetaURI =
          blockchainApiPrefix +
          "/v2/contracts/call-read/" +
          nftContractOwner +
          "/" +
          nftContractName +
          "/get-token-uri";
        fetch(apiToGetMetaURI, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: nftContractOwner,
            arguments: [nftTokenIdHex],
          }),
        }).then(async (rawResponse) => {
          let rawResponseObj = await rawResponse.json();

          // If NFT has metadata, then process further
          if (rawResponseObj.okay) {
            // Parse and get metadata url
            let metadataURL = cvToValue(hexToCV(rawResponseObj.result)).value
              .value;

            // Get nft-token-id as number
            const nftTokenIdNumber = nftTokenId.substr(1);

            // Parse metadata url
            metadataURL = parseMetadataUrl(
              metadataURL,
              nftTokenId,
              nftTokenIdNumber
            );

            // If nftTokenIdNumber is available on metadata url, then get image url
            if (metadataURL.indexOf(nftTokenIdNumber) >= 0) {
              try {
                // Fetch metadata
                const metaDataResponse = await fetch(metadataURL);
                const metaDataResponseObj = await metaDataResponse.json();

                // If image key is available, then process further
                if (metaDataResponseObj.image) {
                  let nftImageUrl = formIPFSUrl(
                    metaDataResponseObj.image,
                    Constants.OWL_LINK_IPFS_GATEWAY
                  );

                  // Check for Arweave prefix and form valid Arweave url
                  nftImageUrl = formArweaveUrl(
                    nftImageUrl,
                    Constants.ARWEAVE_GATEWAY
                  );

                  // Update image url to appropriate nft object
                  eachNFTDetails.image = nftImageUrl;

                  // Update nft image
                  nftsImageObj[eachNFTDetails.nftUniqueId] = nftImageUrl;
                  setNftsImageObj({ ...nftsImageObj });

                  // Save nfts images
                  saveNftsImageObjToGaia();

                  // Process done
                  setNftsArray([...nftsArray]);
                } else {
                  // Process done
                  setNftsArray([...nftsArray]);
                }
              } catch (error) {
                // Process done
                setNftsArray([...nftsArray]);
              }
            } else {
              // Process done
              setNftsArray([...nftsArray]);
            }
          } else {
            // Process done
            setNftsArray([...nftsArray]);
          }
        });
      } else {
        // Process done
        setNftsArray([...nftsArray]);
      }
    });

    return nftsArray;
  }

  return nftsArray;
}

/**
 * Parse metadata url
 *
 * @param {*} metadataURL
 * @param {*} nftTokenId
 * @param {*} nftTokenIdNumber
 * @returns
 */
function parseMetadataUrl(metadataURL, nftTokenId, nftTokenIdNumber) {
  metadataURL = metadataURL
    // 1. Replace placeholder
    .replaceAll("{id}", nftTokenIdNumber)
    // 1.1 Replace placeholder
    .replaceAll("$id", nftTokenIdNumber)
    // 1.2 Replace placeholder
    .replaceAll("$TOKEN_ID", nftTokenIdNumber);

  // 2. Check of IPFS prefix and form valid IPFS url
  metadataURL = formIPFSUrl(metadataURL, Constants.OWL_LINK_IPFS_GATEWAY);

  // 3. Check for Arweave prefix and form valid Arweave url
  metadataURL = formArweaveUrl(metadataURL, Constants.ARWEAVE_GATEWAY);

  return metadataURL;
}

/**
 * Append ipfs prefix with url
 *
 * @param {*} metadataURL
 * @param {*} replaceWith
 * @returns
 */
function formIPFSUrl(metadataURL, replaceWith) {
  if (metadataURL.startsWith("ipfs://ipfs/")) {
    metadataURL = metadataURL.replaceAll("ipfs://ipfs/", replaceWith);
  } else if (metadataURL.startsWith("ipfs://")) {
    metadataURL = metadataURL.replaceAll("ipfs://", replaceWith);
  }

  return metadataURL;
}

/**
 * Replace with arweave prefix
 *
 * @param {*} metadataURL
 * @param {*} replaceWith
 * @returns
 */
function formArweaveUrl(metadataURL, replaceWith) {
  if (metadataURL.startsWith("ar://")) {
    metadataURL = metadataURL.replaceAll("ar://", replaceWith);
  }

  return metadataURL;
}

/**
 * Convert tokenId to value
 *
 * @param {*} nftTokenId
 * @returns
 */
function convertNftTokenIdToValue(nftTokenId) {
  if (typeof nftTokenId === "object") {
    let nftTokenIdFromObject;
    // Go through each keys
    Object.keys(nftTokenId).forEach((key) => {
      if (nftTokenId[key].value && nftTokenId[key].type?.startsWith("(buff ")) {
        nftTokenIdFromObject =
          (nftTokenIdFromObject ? `${nftTokenIdFromObject}.` : "") +
          hexToAscii(nftTokenId[key].value);
      } else {
        nftTokenIdFromObject =
          (nftTokenIdFromObject ? `${nftTokenIdFromObject}.` : "") +
          nftTokenId[key].value;
      }
    });

    return nftTokenIdFromObject;
  } else {
    return nftTokenId.toString();
  }
}

/**
 * Convert hex to decimal
 *
 * @param {*} hexValue
 * @returns
 */
function hexToAscii(hexValue) {
  var hex = hexValue.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}
