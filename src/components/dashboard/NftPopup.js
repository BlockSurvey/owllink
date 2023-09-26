// import { Modal, Spinner } from 'react-bootstrap';
import styles from '../../../styles/NftPopup.module.css'
import NftPopupPagination from './NftPopupPagination';

export default function NftPopup(props) {
  // Receive parent properties
  const { link, showNftLinkPopup, nftsArray, nftsTotal } = props;
  const pages = nftsTotal > 0 ? Math.ceil(nftsTotal / 50) : 0;

  // Variables
  // Handle close popup
  const handleCloseLinkPopup = () => {
    props.setShowNftLinkPopupFlag(false);
  };

  // Functions
  // New link
  const handleChangeLink = e => {
    const { name, value } = e.target;

    // If value is empty, then delete key from previous state
    if (!value && link) {
      // Delete key from JSON
      delete link[name];
    } else {
      // Update the value
      link[name] = value;
    }
    props.setLink({ ...link });
  };

  /**
   * On selection of nft
   *
   * @param {*} selectedNftObj
   */
  const handleSelectionOfNft = selectedNftObj => {
    // Create empty object
    if (!link.nfts) {
      link.nfts = {};
    }

    // Based on txId - Old code support
    if (link.nfts[selectedNftObj.nftTxId]) {
      // Unselect
      if (link.nfts[selectedNftObj.nftTxId]) {
        delete link.nfts[selectedNftObj.nftTxId];
      } else {
        // Select
        link.nfts[selectedNftObj.nftTxId] = selectedNftObj;
      }
    } else {
      // Based on nft unique id

      // Unselect
      if (link.nfts[selectedNftObj.nftUniqueId]) {
        delete link.nfts[selectedNftObj.nftUniqueId];
      } else {
        // Select
        link.nfts[selectedNftObj.nftUniqueId] = selectedNftObj;
      }
    }

    // Update state
    props.setLink({ ...link });
  };

  /**
   * Add nft new link
   */
  const addNftLink = () => {
    props.addLink();

    // Close new NFT link popup
    handleCloseLinkPopup();
  };

  /**
   * Save nft link
   */
  const saveNftLink = () => {
    props.saveLink();

    // Close new NFT link popup
    handleCloseLinkPopup();
  };

  /**
   * Delete nft link
   */
  const deleteNftLink = () => {
    props.deleteLink();

    // Close new NFT link popup
    handleCloseLinkPopup();
  };

  /**
   * Get pagination component
   *
   * @returns
   */
  function getPaginationComponent() {
    return (
      nftsArray &&
      pages > 1 && (
        <div>
          <NftPopupPagination
            pages={pages}
            getNftsImageObjFromGaia={props.getNftsImageObjFromGaia}
            nftsPaginationActivePage={props.nftsPaginationActivePage}
            setNftsPaginationActivePage={props.setNftsPaginationActivePage}
          ></NftPopupPagination>
        </div>
      )
    );
  }

  return (
    <>
      {/* Models */}
      <Modal
        show={showNftLinkPopup}
        onHide={handleCloseLinkPopup}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
        scrollable="true"
      >
        {/* Header */}
        <Modal.Header>
          <div className={styles.dashboard_modal_header_box}>
            <div>{link?.id ? 'Edit' : 'Add'} NFT Link</div>
            <button
              className={styles.dashboard_modal_close_icon_btn_box}
              onClick={handleCloseLinkPopup}
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
        </Modal.Header>

        {/* Body */}
        <Modal.Body>
          <div className={styles.dashboard_modal_body_box}>
            {/* Title */}
            <input
              className="form-control owl_link_input_field"
              type="text"
              placeholder="Title"
              aria-label="NFT Link Title"
              autoComplete="off"
              name="title"
              value={link?.title || ''}
              onChange={handleChangeLink}
            ></input>

            {/* Gallery */}
            <div>
              {/* Title */}
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  margin: '30px 0px 15px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>My NFTs</div>
                <div>{getPaginationComponent()}</div>
              </div>

              {/* Loading */}
              {!nftsArray && (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <Spinner animation="border" variant="secondary" />
                </div>
              )}

              {/* No data found */}
              {nftsArray?.length == 0 && (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '20px 0',
                    fontSize: '14px'
                  }}
                >
                  You currently have no NFT.
                </div>
              )}

              {/* Data found */}
              {nftsArray?.length > 0 && (
                <div>
                  <div className={styles.nft_layout}>
                    {/* Each nft */}
                    {nftsArray.map((eachNft, index) => (
                      <div
                        key={index}
                        className={styles.nft_box}
                        onClick={() => handleSelectionOfNft(eachNft)}
                      >
                        {/* Image */}
                        <div className={styles.nft_image_box}>
                          {/* Image */}
                          {eachNft.image && (
                            <img
                              className={styles.nft_image}
                              src={eachNft.image}
                              onError={() => {
                                delete eachNft.image;
                              }}
                            />
                          )}
                        </div>

                        {/* Name */}
                        <div className={styles.nft_footer}>
                          {/* Nft name */}
                          <div className={styles.nft_name}>
                            {`${eachNft.nftName}-${eachNft.nftTokenIdValue}`}
                          </div>

                          {/* Checkbox */}
                          <div className={styles.nft_checkbox_box}>
                            {/* Tick icon */}
                            {link.nfts &&
                              (link.nfts[eachNft.nftTxId] ||
                                link.nfts[eachNft.nftUniqueId]) && (
                                <svg
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z"
                                    fill="#ff793f"
                                  />
                                </svg>
                              )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      paddingTop: '30px'
                    }}
                  >
                    {getPaginationComponent()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>

        {/* Footer */}
        <Modal.Footer>
          <div className={styles.dashboard_modal_footer_box}>
            {/* Left align */}
            <div>
              {/* Delete link */}
              {link?.id && (
                <div>
                  <button
                    className="btn owl_link_dashboard_outline_button"
                    style={{ fontSize: '16px' }}
                    onClick={deleteNftLink}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>

            {/* Right align */}
            <div>
              {/* Add new link */}
              {link && !link.id && (
                <div style={{ display: 'flex', columnGap: '10px' }}>
                  <button
                    className="btn owl_link_dashboard_outline_button"
                    style={{ fontSize: '16px' }}
                    onClick={handleCloseLinkPopup}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn owl_link_dashboard_filled_button"
                    style={{ fontSize: '16px' }}
                    onClick={addNftLink}
                    disabled={!link || !link.title || !nftsArray}
                  >
                    Add
                  </button>
                </div>
              )}

              {/* Edit link */}
              {link?.id && (
                <div style={{ display: 'flex', columnGap: '10px' }}>
                  <button
                    className="btn owl_link_dashboard_outline_button"
                    style={{ fontSize: '16px' }}
                    onClick={handleCloseLinkPopup}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn owl_link_dashboard_filled_button"
                    style={{ fontSize: '16px' }}
                    onClick={saveNftLink}
                    disabled={!link.title || !nftsArray}
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
