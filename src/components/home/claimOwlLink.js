import { useState } from 'react';
// import { Spinner } from "react-bootstrap";
import { authenticate } from '../../../services/auth';
import styles from '../../styles/ClaimOwlLink.module.css';
import { Button } from 'antd';

export default function ClaimOwlLink() {
  // DNS querying
  const [isQueryingFlag, setIsQueryingFlag] = useState(false);

  // Is name changed during querying
  const [isNameProcessed, setIsNameProcessed] = useState(true);

  // DNS available flag
  const [dnsBTCFoundFlag, setDnsBTCFoundFlag] = useState(true);

  // Dns name value
  const [name, setName] = useState();
  const handleChangeOwlLinkName = e => {
    const { value } = e.target;
    setName(value);

    // If value is empty
    if (value) {
      // Name value is changed
      setIsNameProcessed(false);
    } else {
      // Name value is not changed
      setIsNameProcessed(true);

      // Set DNS available flag as false
      setDnsBTCFoundFlag(true);
    }
  };

  const checkDNSAvailability = async () => {
    try {
      // Start querying
      setIsQueryingFlag(true);

      // Name value is processed
      setIsNameProcessed(true);

      // Check the name which is typed/entered
      let queryableName = name.endsWith('.btc') ? name : name + '.btc';

      // Fetch data from external API
      const response = await fetch(
        'https://stacks-node-api.mainnet.stacks.co/v1/names/' + queryableName
      );
      const responseObj = await response.json();

      // DNS name is not found on blockchain
      if (!responseObj || responseObj.error) {
        // Set .btc DNS not found
        setDnsBTCFoundFlag(false);
      } else {
        // Set .btc DNS found
        setDnsBTCFoundFlag(true);
      }

      // Stop querying
      setIsQueryingFlag(false);
    } catch (error) {
      // Failed on querying

      // Set DNS available flag as true
      setDnsBTCFoundFlag(true);

      // Stop querying
      setIsQueryingFlag(false);
    }
  };

  return (
    <>
      <div>
        <div className={styles.claim_outer_layer}>
          {/* Prefix */}
          <div className={styles.claim_prefix}>owl.link/</div>

          {/* Suffix */}
          <div className={styles.claim_suffix}>
            <input
              className={'form-control ' + styles.claim_input_field}
              type="text"
              placeholder="yourname"
              aria-label="Name"
              autoComplete="off"
              name="name"
              onChange={handleChangeOwlLinkName}
              disabled={isQueryingFlag}
            ></input>
          </div>

          {/* Button */}
          {isQueryingFlag ? (
            // Show loading
            <Button loading className={styles.claim_filled_button}>
              Loading
            </Button>
          ) : !isNameProcessed ? (
            // Click to query
            <button
              className={styles.claim_filled_button}
              onClick={checkDNSAvailability}
            >
              Check
            </button>
          ) : // Result button
          dnsBTCFoundFlag ? (
            <button
              className={styles.claim_filled_button}
              onClick={() => authenticate()}
            >
              Get Owl Link
            </button>
          ) : (
            <a
              style={{ textDecoration: 'none' }}
              href="https://btc.us"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.claim_filled_button}>
                Register .btc
              </button>
            </a>
          )}
        </div>

        {/* Already have a account */}
        <div className={styles.already_have_account_layout}>
          {/* <div>
            <a
              style={{
                cursor: "pointer",
                color: "#ff793f",
                marginRight: "5px",
              }}
              href="https://buy.stripe.com/00g039eWq0NTcJq146"
              target={"_blank"}
              rel="noreferrer"
            >
              Don&apos;t have Stacks? Pay with Stripe
            </a>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5044 0.743397C3.5044 0.33283 3.83723 -6.71395e-08 4.2478 0L11.2566 6.60206e-07C11.6672 6.60206e-07 12 0.33283 12 0.743397L12 7.7522C12 8.16277 11.6672 8.4956 11.2566 8.4956C10.846 8.4956 10.5132 8.16277 10.5132 7.7522V2.53811L1.26906 11.7823C0.978742 12.0726 0.50805 12.0726 0.217736 11.7823C-0.0725787 11.4919 -0.0725784 11.0213 0.217736 10.7309L9.46189 1.48679L4.2478 1.48679C3.83723 1.48679 3.5044 1.15396 3.5044 0.743397Z"
                fill="#ff793f"
              />
            </svg>
          </div> */}

          <div style={{ marginTop: '10px' }}>
            {'Already own a .btc domain? '}
            <a
              className={styles.already_have_account_signin}
              onClick={() => authenticate()}
            >
              Sign in
            </a>
          </div>

          {/* Note */}
          <div
            style={{
              fontSize: '14px',
              marginTop: '5px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            Have a question? contact us through chat.
          </div>
        </div>
      </div>
    </>
  );
}
