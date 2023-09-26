import { openContractCall } from "@stacks/connect";
import {
  bufferCV,
  createAssetInfo,
  FungibleConditionCode,
  makeStandardNonFungiblePostCondition,
  makeStandardSTXPostCondition,
  NonFungibleConditionCode,
  stringAsciiCV,
} from "@stacks/transactions";
import {
  getContractName,
  getContractOwner,
  getMyStxAddress,
  getNetworkType,
  getContractOwlLinkNFTName,
} from "../services/auth";
import { getUserData } from "./auth";

/**
 * Mint owl link profile
 *
 * @param {*} dns
 * @returns
 */
export async function mintOwlLinkProfile(dns, mintCallbackFunction) {
  // Validation on dns
  if (!dns || dns.split(".").length <= 1) {
    return;
  }

  // Send mint event to fathom analytics
  if (window && window.fathom) {
    window.fathom.trackGoal("45RCQ8KN", 0);
  }

  // Parse dns
  let splittedDns = dns.split(".");
  let domain = splittedDns.pop();
  let namespace = splittedDns.join(".");

  // Form gaia url
  let gaiaUrlPrefix = getUserData().gaiaHubConfig.url_prefix;
  let gaiaAddress = getUserData().gaiaHubConfig.address;
  let gaiaUrl = `${gaiaUrlPrefix}${gaiaAddress}/owllink.json`;

  // (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.owllink mint "raja.btc" 0x72616a61 0x627463 "https://gaiaaddress/owlink.json")
  const functionArgs = [
    stringAsciiCV(dns),
    bufferCV(Buffer.from(domain)),
    bufferCV(Buffer.from(namespace)),
    stringAsciiCV(gaiaUrl),
  ];

  // Post conditions
  // 1. STX transfer
  const postConditionAddress = getMyStxAddress();
  const postConditionCode = FungibleConditionCode.Equal;
  const postConditionAmount = 10000000n;
  const standardSTXPostCondition = makeStandardSTXPostCondition(
    postConditionAddress,
    postConditionCode,
    postConditionAmount
  );

  // 2. NFT mint
  const NFTPostConditionCode = NonFungibleConditionCode.DoesNotSend;
  const assetAddress = getContractOwner();
  const assetContractName = getContractName();
  const assetName = getContractOwlLinkNFTName();
  const tokenAssetName = stringAsciiCV(dns);
  const nonFungibleAssetInfo = createAssetInfo(
    assetAddress,
    assetContractName,
    assetName
  );
  const standardNonFungiblePostCondition = makeStandardNonFungiblePostCondition(
    postConditionAddress,
    NFTPostConditionCode,
    nonFungibleAssetInfo,
    tokenAssetName
  );

  // List of conditions for verification
  const postConditions = [
    standardSTXPostCondition,
    standardNonFungiblePostCondition,
  ];

  // Contract function details to be called
  const options = {
    contractAddress: getContractOwner(),
    contractName: getContractName(),
    functionName: "mint",
    functionArgs,
    postConditions,
    network: getNetworkType(),
    appDetails: {
      name: "Owl Link",
      icon: window.location.origin + "/images/logo/owllink.png",
    },
    onFinish: mintCallbackFunction,
  };

  // Call contract function
  await openContractCall(options);
}

/**
 * Republish owl link profile
 *
 * @param {*} dns
 * @param {*} mintCallbackFunction
 */
export async function republishOwlLinkProfile(dns, mintCallbackFunction) {
  // Validation on dns
  if (!dns || dns.split(".").length <= 1) {
    return;
  }

  // Parse dns
  let splittedDns = dns.split(".");
  let domain = splittedDns.pop();
  let namespace = splittedDns.join(".");

  // Form gaia url
  let gaiaUrlPrefix = getUserData().gaiaHubConfig.url_prefix;
  let gaiaAddress = getUserData().gaiaHubConfig.address;
  let gaiaUrl = gaiaUrlPrefix + gaiaAddress + "/owllink.json";

  // (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.owllink update-owl-link-profile-url "raja.btc" 0x72616a61 0x627463 "https://gaiaaddress/owlink.json")
  const functionArgs = [
    stringAsciiCV(dns),
    bufferCV(Buffer.from(domain)),
    bufferCV(Buffer.from(namespace)),
    stringAsciiCV(gaiaUrl),
  ];

  // Post conditions
  // 1. STX transfer
  const postConditionAddress = getMyStxAddress();
  const postConditionCode = FungibleConditionCode.Equal;
  const postConditionAmount = 10000000n;
  const standardSTXPostCondition = makeStandardSTXPostCondition(
    postConditionAddress,
    postConditionCode,
    postConditionAmount
  );

  // List of conditions for verification
  const postConditions = [standardSTXPostCondition];

  // Contract function details to be called
  const options = {
    contractAddress: getContractOwner(),
    contractName: getContractName(),
    functionName: "update-owl-link-profile-url",
    functionArgs,
    postConditions,
    network: getNetworkType(),
    appDetails: {
      name: "Owl Link",
      icon: window.location.origin + "/images/logo/owllink.png",
    },
    onFinish: mintCallbackFunction,
  };

  // Call contract function
  await openContractCall(options);
}

/**
 * Transfer owl link profile
 *
 * @param {*} dns
 * @param {*} recipient
 * @param {*} mintCallbackFunction
 */
export async function transferOwlLinkProfile(
  dns,
  recipient,
  mintCallbackFunction
) {
  // Validation on dns
  if (!dns || dns.split(".").length <= 1 || !recipient) {
    return;
  }

  // Parse dns
  let splittedDns = dns.split(".");
  let domain = splittedDns.pop();
  let namespace = splittedDns.join(".");

  // (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.owllink transfer "raja.btc" 0x72616a61 0x627463 'recipient-address)
  const functionArgs = [
    stringAsciiCV(dns),
    bufferCV(Buffer.from(domain)),
    bufferCV(Buffer.from(namespace)),
    standardPrincipalCV(recipient),
  ];

  // Post conditions
  // 1. NFT transfer
  const postConditionAddress = getMyStxAddress();
  const NFTPostConditionCode = NonFungibleConditionCode.DoesNotOwn;
  const assetAddress = getContractOwner();
  const assetContractName = getContractName();
  const assetName = getContractOwlLinkNFTName();
  const tokenAssetName = stringAsciiCV(dns);
  const nonFungibleAssetInfo = createAssetInfo(
    assetAddress,
    assetContractName,
    assetName
  );
  const standardNonFungiblePostCondition = makeStandardNonFungiblePostCondition(
    postConditionAddress,
    NFTPostConditionCode,
    nonFungibleAssetInfo,
    tokenAssetName
  );

  const postConditions = [standardNonFungiblePostCondition];

  // Contract function details to be called
  const options = {
    contractAddress: getContractOwner(),
    contractName: getContractName(),
    functionName: "transfer",
    functionArgs,
    postConditions,
    network: getNetworkType(),
    appDetails: {
      name: "Owl Link",
      icon: window.location.origin + "/images/logo/owllink.png",
    },
    onFinish: mintCallbackFunction,
  };

  // Call contract function
  await openContractCall(options);
}
