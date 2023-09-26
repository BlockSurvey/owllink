import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import { Constants } from "../../common/constants";
import {
  getContractName,
  getContractOwner,
  getFileFromGaia,
  signOut,
} from "../../services/auth";
import { formStacksExplorerUrl } from "../../services/utils";
import styles from "../../styles/Dashboard.module.css";
import QRCodePopup from "./QRCodePopup";

export default function UserAccountDropdown(props) {
  // Get owl link profile from parent
  const { owlLinkProfile, dns } = props;

  // List of transactions
  const [transactions, setTransactions] = useState();

  // Loading
  const [isLoading, setIsLoading] = useState(false);

  // Add transaction confirmation popup
  const [showMyTransactionsPopup, setShowMyTransactionsPopup] = useState(false);
  const handleCloseMyTransactionsPopup = () =>
    setShowMyTransactionsPopup(false);
  const handleShowMyTransactionsPopup = () => setShowMyTransactionsPopup(true);

  // Road map popup
  const [showRoadMapPopup, setShowRoadMapPopup] = useState(false);
  const handleCloseRoadMapPopup = () => setShowRoadMapPopup(false);
  const handleShowRoadMapPopup = () => setShowRoadMapPopup(true);

  // Show QR code popup
  const [showQRCodePopupFlag, setShowQRCodePopupFlag] = useState(false);

  // Feedback hidden button
  const feedbackButton = useRef(null);

  // Smart contract url
  const [smartContractUrl, setSmartContractUrl] = useState();

  /**
   * After view render
   */
  useEffect(() => {
    // Form smart contract url
    formSmartContractUrl();
  }, []);

  // Show my transactions
  const showMyTransactions = () => {
    // Show transaction popup
    handleShowMyTransactionsPopup();

    // Start loading
    setIsLoading(true);

    // Store transaction to Gaia
    getFileFromGaia("transactions.json").then(
      (response) => {
        if (response) {
          const transactionsObj = JSON.parse(response);

          if (
            transactionsObj &&
            transactionsObj.transactions &&
            transactionsObj.transactions.length > 0
          ) {
            setTransactions(transactionsObj.transactions.reverse());
          } else {
            // Show empty list
            setTransactions([]);
          }
        } else {
          // Show empty list
          setTransactions([]);
        }

        // Stop loading
        setIsLoading(false);
      },
      (error) => {
        // File does not exit in gaia
        if (error && error.code == "does_not_exist") {
          // Show empty list
          setTransactions([]);
        }

        // Stop loading
        setIsLoading(false);
      }
    );
  };

  /**
   * Convert date to readable format
   *
   * @param {*} date
   * @returns
   */
  const convertDateFormat = (date) => {
    let convertedDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return convertedDate;
  };

  /**
   * Load BlockSurvey widget script
   */
  const loadBlockSurveyWidgetScript = () => {
    // If script is not loaded, load first
    if (!window.blocksurvey) {
      let body = document.body;
      let script = document.createElement("script");
      script.innerHTML = "";
      script.src = "https://blocksurvey.io/assets/js/blocksurvey-widget.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.blocksurvey = {
          loaded: true,
        };

        feedbackButton.current.click();
      };
      body.appendChild(script);
    } else {
      feedbackButton.current.click();
    }
  };

  /**
   * Get smart contract url
   */
  const formSmartContractUrl = () => {
    // "https://explorer.stacks.co/txid/0xec75fbfbd9dcce5f280daee9bd07037d4bed16f1355f69db6919242d2bd96352?chain=mainnet"
    const smartContractUrl =
      "https://explorer.stacks.co/txid/" +
      getContractOwner() +
      "." +
      getContractName() +
      "?chain=" +
      (Constants.STACKS_MAINNET_FLAG ? "mainnet" : "testnet");
    setSmartContractUrl(smartContractUrl);
  };

  return (
    <>
      {/* Adding BlockSurvey script */}
      <blocksurvey-widget
        origin="blocksurvey.io"
        uid="t"
        sid="3930b153-975e-475e-8e3d-3d7cd0a37089"
        mode="popupcard"
        alignpopup="center"
        popupsize="large"
        background="rgb(255,121,63)"
        color="rgb(255, 255, 255)"
        params=""
      ></blocksurvey-widget>
      <button
        style={{ display: "none" }}
        className="blocksurvey-share"
        ref={feedbackButton}
      >
        Launch me
      </button>

      <Dropdown className={styles.dashboard_user_account_dropdown}>
        <Dropdown.Toggle
          id="user-account-dropdown"
          className={styles.dashboard_user_account_dropdown_box}
          style={{
            backgroundColor:
              owlLinkProfile && owlLinkProfile.img && owlLinkProfile.imageColor
                ? owlLinkProfile.imageColor
                : "#ff793f",
          }}
        >
          {owlLinkProfile && owlLinkProfile.image ? (
            <img style={{ maxWidth: "100%" }} src={owlLinkProfile.image} />
          ) : (
            <div
              style={{
                backgroundColor: "#ff793f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0876 11.2596C11.0524 11.2596 11.0172 11.2596 10.9864 11.2596C9.60924 11.2244 8.19244 10.5688 7.19364 9.49961C6.33564 8.58001 5.89564 7.45361 5.94404 6.32281C5.99684 5.13041 6.58644 3.88081 7.55444 2.90401C8.53564 1.91401 9.78524 1.32441 10.982 1.29361C12.2096 1.25841 13.4856 1.83481 14.48 2.86881C15.426 3.85441 16.0024 5.11281 16.0552 6.32281C16.108 7.53721 15.624 8.73401 14.6912 9.68881C13.7232 10.6744 12.3812 11.2596 11.0876 11.2596ZM11.0876 2.60921C11.0656 2.60921 11.0392 2.60921 11.0172 2.60921C9.20884 2.66201 7.34764 4.52761 7.25964 6.38001C7.22444 7.15001 7.54124 7.93761 8.15284 8.59321C8.90084 9.39841 9.99644 9.90881 11.0128 9.93521C11.9808 9.95721 13.0016 9.51721 13.7452 8.76041C14.4184 8.06961 14.7704 7.22481 14.7352 6.38001C14.6604 4.65961 12.9708 2.60921 11.0876 2.60921Z"
                  fill="white"
                />
                <path
                  d="M11.0001 20.6668C8.6769 20.6668 6.3537 20.5348 4.0437 20.2752C3.7401 20.24 3.5025 20.0068 3.4629 19.7032C3.4057 19.2676 3.3793 19.0432 3.3309 18.612C3.1461 17.0104 3.6389 15.5012 4.7565 14.2516C6.0765 12.7732 8.1621 11.858 10.1993 11.858C10.2037 11.858 10.2081 11.858 10.2125 11.858C10.8373 11.858 11.1497 11.858 11.7745 11.858C11.7789 11.858 11.7833 11.858 11.7877 11.858C13.8293 11.858 15.9105 12.7732 17.2305 14.2516C18.3481 15.5012 18.8409 17.0104 18.6561 18.612C18.6077 19.0432 18.5813 19.2676 18.5241 19.7032C18.4845 20.0068 18.2469 20.24 17.9433 20.2752C15.6465 20.5392 13.3233 20.6668 11.0001 20.6668ZM4.7081 19.0212C8.8881 19.4568 13.1121 19.4568 17.2921 19.0212C17.3141 18.854 17.3317 18.6912 17.3581 18.4668C17.5341 16.9268 16.8565 15.8048 16.2581 15.1316C15.1801 13.926 13.4729 13.178 11.7965 13.178C11.7921 13.178 11.7877 13.178 11.7833 13.178C11.1541 13.178 10.8417 13.178 10.2125 13.178C10.2081 13.178 10.2037 13.178 10.1993 13.178C8.5229 13.178 6.8157 13.926 5.7377 15.1316C5.1393 15.8004 4.4617 16.9224 4.6377 18.4624C4.6685 18.6912 4.6905 18.854 4.7081 19.0212Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              showMyTransactions();
            }}
          >
            My transactions
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setShowQRCodePopupFlag(true);
            }}
          >
            My QR code
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item href="nft" target="_blank" rel="noreferrer">
            {"Buy Owl Link NFT "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5044 0.743397C3.5044 0.33283 3.83723 -6.71395e-08 4.2478 0L11.2566 6.60206e-07C11.6672 6.60206e-07 12 0.33283 12 0.743397L12 7.7522C12 8.16277 11.6672 8.4956 11.2566 8.4956C10.846 8.4956 10.5132 8.16277 10.5132 7.7522V2.53811L1.26906 11.7823C0.978742 12.0726 0.50805 12.0726 0.217736 11.7823C-0.0725787 11.4919 -0.0725784 11.0213 0.217736 10.7309L9.46189 1.48679L4.2478 1.48679C3.83723 1.48679 3.5044 1.15396 3.5044 0.743397Z"
                fill="black"
              ></path>
            </svg>
          </Dropdown.Item>
          <Dropdown.Item
            href="https://files.owl.link/owl-link-light-paper-v0.2.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {"Read Light Paper "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5044 0.743397C3.5044 0.33283 3.83723 -6.71395e-08 4.2478 0L11.2566 6.60206e-07C11.6672 6.60206e-07 12 0.33283 12 0.743397L12 7.7522C12 8.16277 11.6672 8.4956 11.2566 8.4956C10.846 8.4956 10.5132 8.16277 10.5132 7.7522V2.53811L1.26906 11.7823C0.978742 12.0726 0.50805 12.0726 0.217736 11.7823C-0.0725787 11.4919 -0.0725784 11.0213 0.217736 10.7309L9.46189 1.48679L4.2478 1.48679C3.83723 1.48679 3.5044 1.15396 3.5044 0.743397Z"
                fill="black"
              ></path>
            </svg>
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item
            href="https://blocksurvey.io/about-us"
            target="_blank"
            rel="noreferrer"
          >
            {"About us "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5044 0.743397C3.5044 0.33283 3.83723 -6.71395e-08 4.2478 0L11.2566 6.60206e-07C11.6672 6.60206e-07 12 0.33283 12 0.743397L12 7.7522C12 8.16277 11.6672 8.4956 11.2566 8.4956C10.846 8.4956 10.5132 8.16277 10.5132 7.7522V2.53811L1.26906 11.7823C0.978742 12.0726 0.50805 12.0726 0.217736 11.7823C-0.0725787 11.4919 -0.0725784 11.0213 0.217736 10.7309L9.46189 1.48679L4.2478 1.48679C3.83723 1.48679 3.5044 1.15396 3.5044 0.743397Z"
                fill="black"
              ></path>
            </svg>
          </Dropdown.Item>
          <Dropdown.Item
            href="https://blocksurvey.io/discord"
            target="_blank"
            rel="noreferrer"
          >
            {"Join community "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5044 0.743397C3.5044 0.33283 3.83723 -6.71395e-08 4.2478 0L11.2566 6.60206e-07C11.6672 6.60206e-07 12 0.33283 12 0.743397L12 7.7522C12 8.16277 11.6672 8.4956 11.2566 8.4956C10.846 8.4956 10.5132 8.16277 10.5132 7.7522V2.53811L1.26906 11.7823C0.978742 12.0726 0.50805 12.0726 0.217736 11.7823C-0.0725787 11.4919 -0.0725784 11.0213 0.217736 10.7309L9.46189 1.48679L4.2478 1.48679C3.83723 1.48679 3.5044 1.15396 3.5044 0.743397Z"
                fill="black"
              ></path>
            </svg>
          </Dropdown.Item>
          <Dropdown.Item
            href={smartContractUrl}
            target="_blank"
            rel="noreferrer"
          >
            {"Smart contract "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5044 0.743397C3.5044 0.33283 3.83723 -6.71395e-08 4.2478 0L11.2566 6.60206e-07C11.6672 6.60206e-07 12 0.33283 12 0.743397L12 7.7522C12 8.16277 11.6672 8.4956 11.2566 8.4956C10.846 8.4956 10.5132 8.16277 10.5132 7.7522V2.53811L1.26906 11.7823C0.978742 12.0726 0.50805 12.0726 0.217736 11.7823C-0.0725787 11.4919 -0.0725784 11.0213 0.217736 10.7309L9.46189 1.48679L4.2478 1.48679C3.83723 1.48679 3.5044 1.15396 3.5044 0.743397Z"
                fill="black"
              ></path>
            </svg>
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item
            onClick={() => {
              loadBlockSurveyWidgetScript();
            }}
          >
            Share feedback
          </Dropdown.Item>
          {/* <Dropdown.Item onClick={() => { handleShowRoadMapPopup() }}>Roadmap</Dropdown.Item> */}
          <Dropdown.Item>
            <Link href="/#faq">
              <div style={{ width: "100%", textDecoration: "none" }}>FAQ</div>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* My transactions popup */}
      <Modal
        show={showMyTransactionsPopup}
        onHide={handleCloseMyTransactionsPopup}
        keyboard={false}
        centered
        size="md"
      >
        {/* Header */}
        <div className={styles.dashboard_modal_header_box}>
          <div>My transactions</div>
          <button
            className={styles.dashboard_modal_close_icon_btn_box}
            onClick={handleCloseMyTransactionsPopup}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.898377 0.898804C1.2108 0.586385 1.71733 0.586385 2.02975 0.898804L4.9996 3.86865L7.96945 0.898804C8.28186 0.586385 8.7884 0.586385 9.10082 0.898804C9.41324 1.21122 9.41324 1.71776 9.10082 2.03018L6.13097 5.00002L9.10082 7.96987C9.41324 8.28229 9.41324 8.78882 9.10082 9.10124C8.7884 9.41366 8.28186 9.41366 7.96945 9.10124L4.9996 6.13139L2.02975 9.10124C1.71733 9.41366 1.2108 9.41366 0.898377 9.10124C0.585958 8.78882 0.585958 8.28229 0.898377 7.96987L3.86823 5.00002L0.898377 2.03018C0.585958 1.71776 0.585958 1.21122 0.898377 0.898804Z"
                fill="#FF793F"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div
          className={
            styles.dashboard_modal_body_box +
            " " +
            styles.dashboard_transactions_modal_body_box
          }
          style={{ padding: "0px", marginBottom: "20px" }}
        >
          {
            // Loading
            isLoading ? (
              <div style={{ textAlign: "center", padding: "10px" }}>
                <Spinner animation="border" variant="secondary" size="md" />
              </div>
            ) : // Once data found
            transactions && transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <a
                  className={styles.dashboard_my_transactions_box}
                  key={index}
                  href={formStacksExplorerUrl(transaction.txId)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* Rounded arrow box */}
                  <div className={styles.dashboard_my_transactions_round_box}>
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.85752 0.483592C6.10233 0.238786 6.49924 0.238786 6.74404 0.483592L12.1172 5.85673C12.362 6.10153 12.362 6.49844 12.1172 6.74325C11.8724 6.98805 11.4755 6.98805 11.2307 6.74325L6.92765 2.44024V15.2552C6.92765 15.6014 6.64699 15.8821 6.30078 15.8821C5.95457 15.8821 5.67392 15.6014 5.67392 15.2552V2.44024L1.37091 6.74325C1.1261 6.98805 0.729192 6.98805 0.484386 6.74325C0.23958 6.49844 0.23958 6.10153 0.484386 5.85673L5.85752 0.483592Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  {/* Transactions id and date */}
                  <div style={{ display: "grid" }}>
                    {/* Tx id */}
                    <div className={styles.dashboard_transactions_id}>
                      {transaction.txId}
                    </div>

                    {/* Date */}
                    <div className={styles.dashboard_transactions_date}>
                      {convertDateFormat(transaction.date)}
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div style={{ padding: "0px 20px 10px", fontSize: "14px" }}>
                No transactions has been done yet.
              </div>
            )
          }
        </div>
      </Modal>

      {/* Road map */}
      <Modal
        show={showRoadMapPopup}
        onHide={handleCloseRoadMapPopup}
        keyboard={false}
        centered
        size="md"
      >
        {/* Header */}
        <div className={styles.dashboard_modal_header_box}>
          <div>Roadmap</div>
          <button
            className={styles.dashboard_modal_close_icon_btn_box}
            onClick={handleCloseRoadMapPopup}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.898377 0.898804C1.2108 0.586385 1.71733 0.586385 2.02975 0.898804L4.9996 3.86865L7.96945 0.898804C8.28186 0.586385 8.7884 0.586385 9.10082 0.898804C9.41324 1.21122 9.41324 1.71776 9.10082 2.03018L6.13097 5.00002L9.10082 7.96987C9.41324 8.28229 9.41324 8.78882 9.10082 9.10124C8.7884 9.41366 8.28186 9.41366 7.96945 9.10124L4.9996 6.13139L2.02975 9.10124C1.71733 9.41366 1.2108 9.41366 0.898377 9.10124C0.585958 8.78882 0.585958 8.28229 0.898377 7.96987L3.86823 5.00002L0.898377 2.03018C0.585958 1.71776 0.585958 1.21122 0.898377 0.898804Z"
                fill="#FF793F"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div
          className={
            styles.dashboard_modal_body_box +
            " " +
            styles.dashboard_transactions_modal_body_box
          }
          style={{ padding: "0px", marginBottom: "20px" }}
        >
          {/* List of features */}
          <div style={{ padding: "20px" }}>
            <ul start={{ margin: "0px" }}>
              <li>Embeds</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* QR code popup */}
      <QRCodePopup
        showQRCodePopupFlag={showQRCodePopupFlag}
        setShowQRCodePopupFlag={setShowQRCodePopupFlag}
        dns={dns}
      ></QRCodePopup>
    </>
  );
}
