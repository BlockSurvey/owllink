import { Container } from "react-bootstrap";
import styles from "../../styles/Nft.module.css";

function Footer() {
  return (
    <Container fluid>
      <div
        className="row justify-content-center"
        style={{ backgroundColor: "rgba(149, 154, 156, 0.08)" }}
      >
        <div className={"col-md-12 col-lg-10 text-center " + styles.footer_col}>
          <div className={styles.home_subtitle}>Join Discord</div>
          {/* Description */}
          <div className="d-flex justify-content-center">
            <div
              className={styles.home_sub_description + " text-center"}
              style={{ maxWidth: "530px" }}
            >
              Join our discord community for latest updates and <br />
              news about Owl Link.
            </div>
          </div>
          {/* Button */}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://blocksurvey.io/discord"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn owl_link_dashboard_filled_button">
              Join Discord
            </button>
          </a>

          {/* All rights reserved */}
          <div
            style={{
              color: "#1d1a27",
              paddingTop: "80px",
              fontSize: "14px",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            All right reserved 2022. Owl Link.
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
