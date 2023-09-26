import { Constants } from "../common/constants";
import { getUserData, signOut } from "./auth";

export function formStacksExplorerUrl(txId) {
  return (
    "https://explorer.stacks.co/txid/" +
    txId +
    "?chain=" +
    (Constants.STACKS_MAINNET_FLAG ? "mainnet" : "testnet")
  );
}

/**
 * URL validation
 *
 * @param url
 */
export function isValidURL(url) {
  let regexp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(url)) {
    return true;
  }
  return false;
}

/**
 * Email Validation
 *
 * @param value
 */
export function isEmail(value) {
  // Get email id from email link
  if (value && value.startsWith("mailto:")) {
    value = value.substr(7);
  }

  let regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return regexp.test(value);
}

/**
 * Is stacks auth expired
 */
export function isGaiaTokenExpired() {
  // Validate gaiaAccessToken expire time
  if (getUserData().gaiaAssociationToken) {
    let gaiaAssociationTokenObj = parseJWTtoken(
      getUserData().gaiaAssociationToken
    );

    // If token is expired, then logout from page
    if (
      gaiaAssociationTokenObj &&
      gaiaAssociationTokenObj.exp &&
      Date.now() >= gaiaAssociationTokenObj.exp * 1000
    ) {
      // Force logout
      signOut();
    }
  }
}

/**
 * Parse JWT token
 *
 * @param token
 * @returns
 */
function parseJWTtoken(token) {
  // Validation
  if (!token) {
    return;
  }

  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

// Social media share
/**
 * Get Twitter post content
 */
export function openTwitterUrl(url, title) {
  if (title && url) {
    let link = "https://twitter.com/intent/tweet?text=" + title + "&url=" + url;
    window.open(link, "_blank");
  }
}

/**
 * Get Facebook post content
 */
export function openFacebookUrl(url, title) {
  if (url) {
    let link = "https://www.facebook.com/sharer.php?u=" + url;
    window.open(link, "_blank");
  }
}

/**
 * Get Linkedin post content
 */
export function openLinkedinUrl(url, title) {
  if (url) {
    let link = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;

    // Adding extra text
    if (title) {
      link = link + "&summary=" + title;
    }

    window.open(link, "_blank");
  }
}

/**
 * Get Whatsapp post content
 */
export function openWhatsappUrl(url, title) {
  if (url) {
    let link = "https://web.whatsapp.com/send?text=" + url;
    window.open(link, "_blank");
  }
}

/**
 * Get Telegram post content
 */
export function openTelegramUrl(url, title) {
  if (url) {
    let link = "https://telegram.me/share/url?url=" + url;
    window.open(link, "_blank");
  }
}

/**
 * Get Facebook post content
 */
export function openRedditUrl(url, title) {
  if (url) {
    let link = "https://www.reddit.com/submit?url=" + url;
    window.open(link, "_blank");
  }
}
// Social media share

/**
 * Parse iframe embed url
 *
 * @param {*} iframeUrl
 * @returns
 */
export function parseIframeUrl(iframeUrl) {
  // Youtube url needs to be parsed
  if (iframeUrl.startsWith("https://www.youtube.com/watch?")) {
    // https://www.youtube.com/watch?v=yOjkVkysBcs

    // Youtube embed url prefix
    const youtubeEmbedUrlPrefix = "https://www.youtube.com/embed/";

    const urlObj = new URL(iframeUrl);
    if (urlObj && urlObj.searchParams && urlObj.searchParams.get("v")) {
      return youtubeEmbedUrlPrefix + urlObj.searchParams.get("v");
    } else {
      return iframeUrl;
    }
  } else if (iframeUrl.startsWith("https://youtu.be/")) {
    // https://youtu.be/yOjkVkysBcs

    // Youtube embed url prefix
    const youtubeEmbedUrlPrefix = "https://www.youtube.com/embed";

    const urlObj = new URL(iframeUrl);
    if (urlObj && urlObj.pathname) {
      return youtubeEmbedUrlPrefix + urlObj.pathname;
    } else {
      return iframeUrl;
    }
  } else {
    return iframeUrl;
  }
}

/**
 * Replace with owl.link ipfs pinata gateway prefix
 *
 * @param {*} responseObj
 */
export function replaceOwlLinkIPFSPrefixForAllSavedImages(responseObj) {
  if (responseObj && Object.keys(responseObj).length > 0) {
    for (const NFTUniqueId in responseObj) {
      responseObj[NFTUniqueId] = replaceOwlLinkIPFSPrefix(
        responseObj[NFTUniqueId]
      );
    }
  }
}

/**
 * Replace owl.link pinata cloud prefix on given URL
 *
 * @param {*} imageURL
 * @returns
 */
export function replaceOwlLinkIPFSPrefix(imageURL) {
  if (imageURL && imageURL.replace) {
    if (imageURL.startsWith("ipfs://ipfs/")) {
      imageURL = imageURL.replace(
        "ipfs://ipfs/",
        Constants.OWL_LINK_IPFS_GATEWAY
      );
    } else if (imageURL.startsWith("ipfs://")) {
      imageURL = imageURL.replace("ipfs://", Constants.OWL_LINK_IPFS_GATEWAY);
    } else if (imageURL.startsWith("ar://")) {
      imageURL = imageURL.replace("ar://", Constants.ARWEAVE_GATEWAY);
    } else if (imageURL.startsWith("https://ipfs.io/ipfs/")) {
      imageURL = imageURL.replace(
        "https://ipfs.io/ipfs/",
        Constants.OWL_LINK_IPFS_GATEWAY
      );
    }

    return imageURL;
  }

  return imageURL;
}

/**
 * Form NFT image URL with default list
 *
 * @param {*} eachNFTDetails
 * @param {*} assetIdentifier
 * @param {*} nftTokenId
 */
export function updateDefaultNFTImageURL(
  eachNFTDetails,
  assetIdentifier,
  nftTokenId
) {
  if (eachNFTDetails && assetIdentifier && nftTokenId) {
    // BNS name default image
    if (assetIdentifier == "SP000000000000000000002Q6VF78.bns::names") {
      eachNFTDetails.image =
        "https://ipfs.owl.link/ipfs/QmVbJqPStxPkpUgCcPBQE1V1SRehceTFjVSzofKp9yUC1x?img-width=800&img-height=800&img-fit=cover&img-quality=80&img-onerror=redirect&img-fit=pad&img-format=webp";
    } else if (
      assetIdentifier ==
      "SP3A6FJ92AA0MS2F57DG786TFNG8J785B3F8RSQC9.owl-link::owl-link"
    ) {
      eachNFTDetails.image = "https://owl.link/images/logo/owllink.svg";
    } else if (
      Constants.NFT_IMAGE_URLS[assetIdentifier] &&
      nftTokenId.startsWith("u")
    ) {
      // Get nft-token-id as number
      const nftTokenIdNumber = nftTokenId.substr(1);

      eachNFTDetails.image = Constants.NFT_IMAGE_URLS[
        assetIdentifier
      ].replaceAll("{id}", nftTokenIdNumber);
    }
  }
}

/**
 * Convert older person profile to Person schema as per schema.org
 * @param {*} responseJSON
 */
export function convertToPersonScheme(responseJSON) {
  // Convert bio to description
  if (responseJSON?.bio) {
    responseJSON["description"] = responseJSON.bio;
    delete responseJSON["bio"];
  }

  // Convert img to image
  if (responseJSON?.img) {
    responseJSON["image"] = responseJSON.img;
    delete responseJSON["img"];
  }

  // Convert imgColor to imageColor
  if (responseJSON?.imgColor) {
    responseJSON["imageColor"] = responseJSON.imgColor;
    delete responseJSON["imgColor"];
  }

  // Add email, url and sameAs
  const { socialLinks, links } = responseJSON;
  let email,
    url,
    sameAs = [];

  if (socialLinks) {
    for (let key in socialLinks) {
      if (key === "email") {
        email = socialLinks[key];
      } else if (key === "website") {
        url = socialLinks[key];
      } else {
        // Get all social links
        sameAs.push(socialLinks[key]);
      }
    }
  }

  if (links && links.length > 0) {
    links.forEach((link) => {
      if (link && link?.type !== "nft" && link?.url) {
        // Get all links
        sameAs.push(link.url);
      }
    });
  }

  if (email) {
    responseJSON["email"] = email;
  } else {
    delete responseJSON["email"];
  }

  if (url) {
    responseJSON["url"] = url;
  } else {
    delete responseJSON["url"];
  }

  if (sameAs && sameAs.length > 0) {
    responseJSON["sameAs"] = sameAs;
  } else {
    delete responseJSON["sameAs"];
  }
}
