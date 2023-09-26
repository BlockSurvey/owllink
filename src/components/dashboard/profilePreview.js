import { useState } from "react";
import { Constants } from "../../common/constants";
import {
  formStacksExplorerUrl,
  parseIframeUrl,
  replaceOwlLinkIPFSPrefix,
} from "../../services/utils";
import styles from "../../styles/ProfilePreview.module.css";
import QRCodePopup from "./QRCodePopup";

export default function ProfilePreview(props) {
  // Get owl link profile
  const { owlLinkProfile } = props;

  // Show QR code popup
  const [showQRCodePopupFlag, setShowQRCodePopupFlag] = useState(false);

  // NFT's gallery accordion
  const [selectedNft, setSelectedNft] = useState(null);
  const toggle = (index) =>
    selectedNft == index ? setSelectedNft(null) : setSelectedNft(index);

  /**
   * Iframe component
   *
   * @param {*} props
   * @returns
   */
  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe style="height: 370px;" src="${props.url}" data-src=""${props.url}"" width="100%" title="Embed" allowfullscreen="" frameborder="0"></iframe>`,
        }}
      />
    );
  }

  if (!owlLinkProfile) {
    return (
      <>
        <div className={styles.preview_box}>
          {/* Profile Image */}
          <div
            style={{ backgroundColor: "#EEEEEF" }}
            className={styles.profile_image}
          />

          {/* Name */}
          <div
            style={{
              marginTop: "20px",
              width: "150px",
              height: "40px",
              backgroundColor: "#EEEEEF",
              borderRadius: "6px",
            }}
          />

          {/* Description */}
          <div
            style={{
              marginTop: "10px",
              width: "250px",
              height: "40px",
              backgroundColor: "#EEEEEF",
              borderRadius: "6px",
            }}
          />
        </div>
        <QRCodePopup
          showQRCodePopupFlag={showQRCodePopupFlag}
          setShowQRCodePopupFlag={setShowQRCodePopupFlag}
          dns={props.dns}
        />
      </>
    );
  }

  const { image, name, description, socialLinks, links, settings } =
    owlLinkProfile;

  return (
    <>
      <div className={styles.preview_box}>
        {/* Profile Image */}
        {image && (
          <div
            className={styles.profile_image}
            style={{
              backgroundColor: owlLinkProfile.imageColor
                ? owlLinkProfile.imageColor
                : "",
            }}
          >
            <img
              className={styles.profile_image}
              src={image || "/images/public/user.svg"}
            />
          </div>
        )}

        {/* Profile user name box */}
        <div className={styles.profile_username_box}>
          {/* Profile Name */}
          <h1 className={styles.profile_name}>{name || `@${props.dns}`}</h1>
          {/* Verified user icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7508 10.4167C18.7508 9.1 18.0217 7.95833 16.9608 7.41667C17.0892 7.05417 17.1592 6.6625 17.1592 6.25C17.1592 4.40833 15.7342 2.91833 13.9775 2.91833C13.5858 2.91833 13.2108 2.98833 12.8642 3.12667C12.3492 2.0125 11.2592 1.25 10.0008 1.25C8.7425 1.25 7.65417 2.01417 7.13667 3.125C6.79083 2.9875 6.415 2.91667 6.02333 2.91667C4.265 2.91667 2.84167 4.40833 2.84167 6.25C2.84167 6.66167 2.91083 7.05333 3.03917 7.41667C1.97917 7.95833 1.25 9.09833 1.25 10.4167C1.25 11.6625 1.90167 12.7483 2.86833 13.3217C2.85167 13.4633 2.84167 13.605 2.84167 13.75C2.84167 15.5917 4.265 17.0833 6.02333 17.0833C6.415 17.0833 6.79 17.0117 7.13583 16.875C7.6525 17.9867 8.74083 18.75 10 18.75C11.26 18.75 12.3483 17.9867 12.8642 16.875C13.21 17.0108 13.585 17.0817 13.9775 17.0817C15.7358 17.0817 17.1592 15.59 17.1592 13.7483C17.1592 13.6033 17.1492 13.4617 17.1317 13.3208C18.0967 12.7483 18.7508 11.6625 18.7508 10.4175V10.4167ZM13.2375 7.63833L9.62583 13.055C9.505 13.2358 9.3075 13.3333 9.105 13.3333C8.98583 13.3333 8.865 13.3 8.75833 13.2283L8.6625 13.15L6.65 11.1375C6.40583 10.8933 6.40583 10.4975 6.65 10.2542C6.89417 10.0108 7.29 10.0092 7.53333 10.2542L9.00833 11.7267L12.1958 6.94333C12.3875 6.65583 12.7758 6.58 13.0625 6.77083C13.3508 6.9625 13.4292 7.35083 13.2375 7.6375V7.63833Z"
              fill="#FF793F"
            />
          </svg>
        </div>

        {/* Description */}
        <p className={styles.profile_bio}>{description || ""}</p>

        {/* Social icons list */}
        {socialLinks && (
          <ul className={styles.preview_social_icons_list_box}>
            {Constants.SOCIAL_ICONS.map(
              (social, i) =>
                socialLinks[social.type] && (
                  <li style={{ listStyle: "none" }} key={i}>
                    <a
                      className={styles.preview_social_icon_box}
                      href={
                        (social.type == "email" ? "mailto:" : "") +
                        socialLinks[social.type]
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={
                          "images/social-icons-large/owl-link-social-icon-" +
                          social.type +
                          ".svg"
                        }
                      ></img>
                    </a>
                  </li>
                )
            )}
          </ul>
        )}

        {/* Other type of links list */}
        <ul className={styles.profile_link_list_box}>
          {links?.map((link, index) => (
            <li key={index} className={styles.profile_link_list}>
              {
                // Nft links
                link.type == "nft" ? (
                  <div
                    className={styles.profile_link_list_flex_box}
                    style={{
                      alignItems: "flex-start",
                      flexDirection: "column",
                      padding: "0px",
                    }}
                  >
                    <div
                      onClick={() => toggle(index)}
                      style={{
                        width: "100%",
                        textAlign: "center",
                        padding: "12px 10px",
                      }}
                    >
                      {/* Dropdown arrow */}
                      <span style={{ position: "absolute", right: "15px" }}>
                        <svg
                          style={
                            selectedNft == index
                              ? {
                                  transform: "rotate(180deg)",
                                  transition: "0.5s transform ease",
                                }
                              : {
                                  transform: "rotate(0deg)",
                                  transition: "0.5s transform ease",
                                }
                          }
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6 5.29289L10.6464 0.646447C10.8417 0.451184 11.1583 0.451184 11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L6.35355 6.35355C6.15829 6.54882 5.84171 6.54882 5.64645 6.35355L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                            fill="#1E272E"
                          />
                        </svg>
                      </span>
                      {/* Title */}
                      <div style={{ paddingRight: "24px" }}>{link.title}</div>
                    </div>

                    {/* Body */}
                    <div
                      className={
                        selectedNft == index
                          ? styles.profile_nft_gallery_show
                          : styles.profile_nft_gallery
                      }
                    >
                      <div className={styles.profile_nft_gallery_image_box}>
                        {/* Data found */}
                        {link.nfts && Object.keys(link.nfts).length > 0 && (
                          <div className={styles.nft_layout}>
                            {/* Each nft */}
                            {Object.values(link.nfts).map(
                              (eachNft, nftIndex) => (
                                <a
                                  key={`${index}-${nftIndex}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  href={formStacksExplorerUrl(eachNft.nftTxId)}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <div className={styles.nft_box}>
                                    {/* Image */}
                                    <div className={styles.nft_image_box}>
                                      {/* Image */}
                                      {eachNft.image && (
                                        <img
                                          className={styles.nft_image}
                                          src={replaceOwlLinkIPFSPrefix(
                                            eachNft.image
                                          )}
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

                                      {/* External link */}
                                      <div style={{ marginLeft: "5px" }}>
                                        {/* External link icon */}
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
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              )
                            )}
                          </div>
                        )}

                        {/* No data found */}
                        {!link.nfts ||
                          (Object.keys(link.nfts).length == 0 && (
                            <div
                              style={{
                                textAlign: "center",
                                padding: "20px 0",
                                fontSize: "14px",
                              }}
                            >
                              You currently have no NFT.
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ) : // Normal link with embed
                link.embed ? (
                  <div
                    className={styles.profile_link_list_flex_box}
                    style={{
                      alignItems: "flex-start",
                      flexDirection: "column",
                      padding: "0px",
                    }}
                  >
                    <div
                      onClick={() => toggle(index)}
                      style={{
                        width: "100%",
                        textAlign: "center",
                        padding: "12px 10px",
                      }}
                    >
                      {/* Dropdown arrow */}
                      <span style={{ position: "absolute", right: "15px" }}>
                        <svg
                          style={
                            selectedNft == index
                              ? {
                                  transform: "rotate(180deg)",
                                  transition: "0.5s transform ease",
                                }
                              : {
                                  transform: "rotate(0deg)",
                                  transition: "0.5s transform ease",
                                }
                          }
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6 5.29289L10.6464 0.646447C10.8417 0.451184 11.1583 0.451184 11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L6.35355 6.35355C6.15829 6.54882 5.84171 6.54882 5.64645 6.35355L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                            fill="#1E272E"
                          />
                        </svg>
                      </span>
                      {/* Title */}
                      <div style={{ paddingRight: "24px" }}>{link.title}</div>
                    </div>

                    <div
                      className={
                        selectedNft == index
                          ? styles.profile_nft_gallery_show
                          : styles.profile_nft_gallery
                      }
                    >
                      <div className={styles.profile_nft_gallery_image_box}>
                        {/* Embed */}
                        {link.url && <Iframe url={parseIframeUrl(link.url)} />}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Normal link without embed
                  <a
                    className={styles.profile_link_list_flex_box}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* Image */}
                    {/* <img className={styles.profile_user_link_image}></img> */}
                    {/* Title */}
                    <div className={styles.profile_user_link_title}>
                      {link.title}
                    </div>
                  </a>
                )
              }
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className={styles.profile_owl_link_logo_box}>
          {/* QR code icon */}
          {settings?.showQRCode && (
            <a
              onClick={() => {
                setShowQRCodePopupFlag(true);
              }}
              title="Owl Link QR code"
            >
              <svg
                className={styles.profile_owl_link_logo_icon}
                style={{ width: "32px" }}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.625 0C0.28 0 0 0.28 0 0.625V8.125C0 8.47 0.28 8.75 0.625 8.75H8.125C8.47 8.75 8.75 8.47 8.75 8.125V0.625C8.75 0.28 8.47 0 8.125 0H0.625ZM11.875 0C11.53 0 11.25 0.28 11.25 0.625V8.125C11.25 8.47 11.53 8.75 11.875 8.75H19.375C19.72 8.75 20 8.47 20 8.125V0.625C20 0.28 19.72 0 19.375 0H11.875ZM1.25 1.25H7.5V7.5H1.25V1.25ZM12.5 1.25H18.75V7.5H12.5V1.25ZM2.5 2.5V6.25H6.25V2.5H2.5ZM13.75 2.5V6.25H17.5V2.5H13.75ZM0.625 11.25C0.28 11.25 0 11.53 0 11.875V19.375C0 19.72 0.28 20 0.625 20H8.125C8.47 20 8.75 19.72 8.75 19.375V11.875C8.75 11.53 8.47 11.25 8.125 11.25H0.625ZM11.875 11.25C11.53 11.25 11.25 11.53 11.25 11.875V15H12.5V12.5H15V11.25H11.875ZM16.875 11.25C16.53 11.25 16.25 11.53 16.25 11.875V15H17.5V12.5H20V11.25H16.875ZM1.25 12.5H7.5V18.75H1.25V12.5ZM2.5 13.75V17.5H6.25V13.75H2.5ZM13.75 15V16.25H13.125C12.78 16.25 12.5 16.53 12.5 16.875V20H13.75V17.5H15V20H16.25V16.875C16.25 16.53 15.97 16.25 15.625 16.25H15V15H13.75ZM18.75 15V20H20V15H18.75Z" />
              </svg>
            </a>
          )}

          {/* Owl link logo */}
          {(!settings || settings.showOwlLinkLogo !== false) && (
            <a
              href={"https://owl.link/?ref=" + props.dns}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={styles.profile_owl_link_logo_icon}
                viewBox="0 0 34 47"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.4399 46.0283H25.5764C11.4508 46.0283 0 34.5775 0 20.4519V14.8314C0 6.64035 6.64035 0 14.8313 0H19.1682C27.3592 0 33.9996 6.64035 33.9996 14.8314V21.0058C33.9996 21.3919 33.8523 21.7627 33.5884 22.045L33.5355 22.1016C33.3616 22.2877 33.1975 22.4635 33.1598 22.4802C32.3007 22.8258 31.9838 23.0366 31.3124 23.4832C31.2484 23.5258 31.1812 23.5705 31.11 23.6177C27.126 26.2668 24.6661 30.7316 24.6661 35.6668C24.6661 38.3467 25.4127 40.9192 26.7476 43.1388C27.28 44.023 27.9065 44.85 28.6173 45.6044C28.7692 45.7655 28.6608 46.0283 28.4399 46.0283ZM9.52275 7.91687C6.59739 8.12144 4.17835 10.5763 4.01981 13.5068C3.84592 16.7748 6.35702 19.5825 9.61992 19.7615C9.67106 19.7666 9.72221 19.7717 9.76823 19.782H13.2664C14.3404 19.782 15.3479 20.2013 16.1099 20.9582L16.9998 21.8481L17.8897 20.9582C18.6517 20.2013 19.6592 19.782 20.7332 19.782H24.5996C24.6814 19.7513 24.7632 19.7308 24.8502 19.7206C27.9545 19.3012 30.2048 16.5139 29.9696 13.3789C29.7496 10.4689 27.3869 8.12144 24.4768 7.91687C21.2855 7.69185 18.4983 10.0035 18.1505 13.1794C18.084 13.7676 17.5879 14.2074 16.9998 14.2074C16.4117 14.2074 15.9156 13.7676 15.8491 13.1794C15.5013 10.0086 12.7192 7.70208 9.52275 7.91687ZM31.112 27.2969C31.8914 26.5512 32.7797 25.9073 33.7637 25.3938C33.8701 25.3381 34 25.4179 34 25.5375V46.0289H33.8098C33.7213 45.9434 33.6251 45.8642 33.5126 45.8018C32.2652 45.1078 31.1836 44.199 30.2917 43.1413C28.5543 41.0808 27.5519 38.4459 27.5519 35.6668C27.5519 32.4259 28.8755 29.4367 31.112 27.2969ZM10.0633 16.2915C11.4163 16.2915 12.5131 15.1947 12.5131 13.8417C12.5131 12.4888 11.4163 11.392 10.0633 11.392C8.71038 11.392 7.6136 12.4888 7.6136 13.8417C7.6136 15.1947 8.71038 16.2915 10.0633 16.2915ZM26.3853 13.8417C26.3853 15.1947 25.2886 16.2915 23.9356 16.2915C22.5827 16.2915 21.4859 15.1947 21.4859 13.8417C21.4859 12.4888 22.5827 11.392 23.9356 11.392C25.2886 11.392 26.3853 12.4888 26.3853 13.8417Z"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* QR code popup */}
      <QRCodePopup
        showQRCodePopupFlag={showQRCodePopupFlag}
        setShowQRCodePopupFlag={setShowQRCodePopupFlag}
        dns={props.dns}
      />
    </>
  );
}
