import { Modal } from "react-bootstrap";
import styles from "../../styles/Settings.module.css";

// Load the full build.
const _ = require("lodash");

export default function SettingsPopup(props) {
  // Variables
  // Parent parameters
  const {
    showSettingsPopupFlag,
    owlLinkProfile,
    owlLinkSettings,
    previousOwlLinkSettings,
  } = props;

  // Functions
  /**
   * Listen to settings changes
   *
   * @param {*} e
   */
  const handleChangeOwlLinkSettings = (isCheckbox, e) => {
    let fieldName;
    let fieldValue;

    // If input is from checkbox, then go inside
    if (isCheckbox) {
      const { name, checked } = e.target;
      fieldName = name;
      fieldValue = checked;
    } else {
      const { name, value } = e.target;
      fieldName = name;
      fieldValue = value;
    }

    // If value is empty, then delete key from previous state
    if (!fieldValue && fieldValue !== false && owlLinkSettings) {
      // Delete key from JSON
      delete owlLinkSettings[fieldName];
    } else {
      // Update the value
      owlLinkSettings[fieldName] = fieldValue;
    }
    props.setOwlLinkSettings({ ...owlLinkSettings });
  };

  /**
   * Handle close popup
   */
  const handleCloseSettingsPopup = () => {
    props.setShowSettingsPopupFlag(false);
  };

  /**
   * Save settings
   */
  const saveSettings = () => {
    // Update link
    owlLinkProfile.settings = { ...owlLinkSettings };

    // Update the state
    props.handleChangeOwlLinkProfile({
      target: {
        name: "settings",
        value: owlLinkProfile.settings,
      },
    });

    // Save settings
    props.saveOwlLinkProfile();

    // Update previous settings
    props.setPreviousOwlLinkSettings({ ...owlLinkSettings });

    // Close popup
    props.setShowSettingsPopupFlag(false);
  };

  // View
  return (
    <>
      {/* Settings */}
      <Modal
        show={showSettingsPopupFlag}
        onHide={handleCloseSettingsPopup}
        backdrop="static"
        keyboard={false}
        centered
        size="md"
      >
        {/* Header */}
        <div className={styles.dashboard_modal_header_box}>
          <div>Settings</div>
          <button
            className={styles.dashboard_modal_close_icon_btn_box}
            onClick={handleCloseSettingsPopup}
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
        <div className={styles.dashboard_modal_body_box}>
          {/* Show owl link */}
          <div className={styles.category_box} style={{ paddingTop: "0px" }}>
            {/* Title with toggle */}
            <div className={styles.category_title_with_toggle_box}>
              {/* Left */}
              <div>
                {/* Title */}
                <div className={styles.category_title}>Show credit</div>
              </div>

              {/* Right */}
              <div style={{ fontSize: "18px" }}>
                <div className="form-check form-switch">
                  <input
                    className={
                      "form-check-input " + styles.category_toggle_button
                    }
                    type="checkbox"
                    role="switch"
                    aria-label="Show owl link"
                    name="showOwlLinkLogo"
                    value={
                      owlLinkSettings && owlLinkSettings.showOwlLinkLogo
                        ? owlLinkProfile.showOwlLinkLogo
                        : ""
                    }
                    checked={
                      owlLinkSettings && owlLinkSettings.showOwlLinkLogo
                        ? owlLinkSettings.showOwlLinkLogo
                        : false
                    }
                    onChange={(e) => {
                      handleChangeOwlLinkSettings(true, e);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className={styles.category_description}>
              We appreciate you showing our logo credit in the footer because it
              helps us grow. Feel free to hide it.
            </div>
          </div>

          {/* Show QR code */}
          <div
            className={styles.category_box}
            style={{ paddingBottom: "10px" }}
          >
            {/* Title with toggle */}
            <div className={styles.category_title_with_toggle_box}>
              {/* Left */}
              <div>
                {/* Title */}
                <div className={styles.category_title}>
                  Show Owl Link QR code
                </div>
              </div>

              {/* Right */}
              <div style={{ fontSize: "18px" }}>
                <div className="form-check form-switch">
                  <input
                    className={
                      "form-check-input " + styles.category_toggle_button
                    }
                    type="checkbox"
                    role="switch"
                    aria-label="Show owl link QR code"
                    name="showQRCode"
                    value={
                      owlLinkSettings && owlLinkSettings.showQRCode
                        ? owlLinkProfile.showQRCode
                        : ""
                    }
                    checked={
                      owlLinkSettings && owlLinkSettings.showQRCode
                        ? owlLinkSettings.showQRCode
                        : false
                    }
                    onChange={(e) => {
                      handleChangeOwlLinkSettings(true, e);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className={styles.category_description}>
              Owl Link QR code will be shown on footer.
            </div>
          </div>

          {/* Google analytics */}
          <div
            className={styles.category_box}
            style={{ paddingBottom: "10px" }}
          >
            {/* Title */}
            <div className={styles.category_title}>Google analytics</div>

            {/* Text box */}
            <div className={styles.category_description}>
              <input
                style={{ marginBottom: "14px" }}
                className="form-control owl_link_input_field"
                type="text"
                placeholder="G-XXXXXXXXXX"
                aria-label="googleAnalyticsId"
                autoComplete="off"
                name="googleAnalyticsId"
                value={
                  owlLinkSettings && owlLinkSettings.googleAnalyticsId
                    ? owlLinkSettings.googleAnalyticsId
                    : ""
                }
                onChange={(e) => {
                  handleChangeOwlLinkSettings(false, e);
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.dashboard_modal_footer_box}>
          {/* Left align */}
          <div></div>

          {/* Right align */}
          <div>
            {/* Save */}
            <div style={{ display: "flex", columnGap: "10px" }}>
              <button
                className="btn owl_link_dashboard_outline_button"
                style={{ fontSize: "16px" }}
                onClick={handleCloseSettingsPopup}
              >
                Cancel
              </button>
              <button
                className="btn owl_link_dashboard_filled_button"
                style={{ fontSize: "16px" }}
                onClick={saveSettings}
                disabled={_.isEqual(previousOwlLinkSettings, owlLinkSettings)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
