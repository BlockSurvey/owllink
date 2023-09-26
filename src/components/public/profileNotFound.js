import styles from "../../styles/ProfileNotFound.module.css";
import Link from "next/link";

export default function ProfileNotFound(props) {
  const dns = props["dns"];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.profile_outline_box}>
              <div className={styles.profile_box}>
                {/* Page not found image */}
                <Link href={"https://owl.link/?ref=" + dns}>
                  <a className={styles.profile_not_found_image_box}>
                    <img
                      src="/images/public/owl-link-profile-not-found.svg"
                      style={{ width: "640px", maxWidth: "80%" }}
                    ></img>
                  </a>
                </Link>

                {/* Text */}
                <div className={styles.profile_not_found_text}>
                  The page you’re looking for doesn’t exist.
                </div>

                {/* Get owl link button */}
                <Link href={"https://owl.link/?ref=" + dns}>
                  <a className={styles.profile_get_owl_link_btn}>
                    <span>Get Owl Link</span>
                    <div className={styles.profile_not_found_solid_box}>
                      <svg
                        className={styles.profile_get_owl_link_solid_icon}
                        viewBox="0 0 182 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M178.459 9.00931C144.731 4.57044 73.9549 -3.29351 28.9876 3.5555C18.0174 5.22638 12.4513 6.45436 4.39965 8.98005C-34.9408 21.3206 212.188 13.4482 178.459 9.00931Z" />
                      </svg>
                    </div>
                  </a>
                </Link>

                {/* Image */}
                <div className={styles.owl_link_logo}>
                  <Link href={"https://owl.link/?ref=" + dns}>
                    <a>
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
