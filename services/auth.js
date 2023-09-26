import { AppConfig, showConnect, UserSession } from "@stacks/connect";
import { StacksMainnet, StacksTestnet } from "@stacks/network";
import { Storage } from "@stacks/storage";
import { Constants } from "../common/constants";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });
export const storage = new Storage({ userSession });

// Set this to true if you want to use Mainnet
const stacksMainnetFlag = Constants.STACKS_MAINNET_FLAG;

export function getUserData() {
  return userSession.loadUserData();
}

export function alreadyLoggedIn() {
  if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
    userSession.handlePendingSignIn().then((userData) => {
      // Redirect to dashboard
      window.location.assign("/dashboard");
    });
  } else if (userSession && userSession.isUserSignedIn()) {
    // Redirect to dashboard
    window.location.assign("/dashboard");
  }
}

/**
 * Sign in
 */
export function authenticate() {
  // Sign up
  if (!userSession.isUserSignedIn() && !userSession.isSignInPending()) {
    showConnect({
      appDetails: {
        name: "OwlLink",
        icon: window.location.origin + "/images/logo/owllink.png",
      },
      redirectTo: "/",
      onFinish: () => {
        // Redirect to dashboard
        window.location.assign("/dashboard");
      },
      userSession: userSession,
    });
  } else if (userSession && userSession.isUserSignedIn()) {
    // Redirect to dashboard
    window.location.assign("/dashboard");
  }
}

/**
 * Sign out
 */
export function signOut() {
  // Logout
  userSession.signUserOut();

  // Redirect to dashboard
  window.location.assign("/");
}

/**
 * Save file to gaia storage
 *
 * @param {*} fileName
 * @param {*} file
 * @param {*} options
 * @returns
 */
export function putFileToGaia(fileName, file, options) {
  return storage.putFile(fileName, file, options);
}

/**
 * Get file from gaia storage
 *
 * @param {*} fileName
 * @param {*} options
 * @returns
 */
export function getFileFromGaia(fileName, options) {
  return storage.getFile(fileName, options);
}

/**
 * Get stacks network type (Mainnet/Testnet)
 *
 * @returns
 */
export function getNetworkType() {
  if (stacksMainnetFlag) {
    return new StacksMainnet();
  } else {
    return new StacksTestnet();
  }
}

export function getMyStxAddress() {
  if (stacksMainnetFlag) {
    return getUserData().profile.stxAddress.mainnet;
  } else {
    return getUserData().profile.stxAddress.testnet;
  }
}

export function getStacksAPIPrefix() {
  if (stacksMainnetFlag) {
    return "https://stacks-node-api.stacks.co";
  } else {
    return "https://stacks-node-api.testnet.stacks.co";
  }
}

export function getContractOwner() {
  if (stacksMainnetFlag) {
    return Constants.CONTRACT_OWNER_MAINNET;
  } else {
    return Constants.CONTRACT_OWNER_TESTNET;
  }
}

export function getContractName() {
  if (stacksMainnetFlag) {
    return Constants.CONTRACT_NAME_MAINNET;
  } else {
    return Constants.CONTRACT_NAME_TESTNET;
  }
}

export function getContractOwlLinkNFTName() {
  if (stacksMainnetFlag) {
    return Constants.CONTRACT_OWL_LINK_NFT_NAME_MAINNET;
  } else {
    return Constants.CONTRACT_OWL_LINK_NFT_NAME_TESTNET;
  }
}
