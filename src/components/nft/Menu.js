import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import styles from "../../styles/Nft.module.css";

function Menu() {
  return (
    <div className="fixed-top">
      <Container fluid className={styles.home_menu_text}>
        <Row className={"justify-content-center " + styles.home_menu_row_bg}>
          <Col xs={12} lg={10}>
            <Navbar expand="lg" className={styles.home_menu_bg}>
              <Navbar.Brand href="/" className={styles.home_menu_brand_name}>
                <svg
                  width="26"
                  height="36"
                  viewBox="0 0 26 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.7481 35.1981H19.5584C8.75651 35.1981 0 26.4416 0 15.6397V11.3416C0 5.07792 5.07792 0 11.3416 0H14.6581C20.9218 0 25.9997 5.07792 25.9997 11.3416V16.0633C25.9997 16.3585 25.8871 16.6421 25.6853 16.858L25.6447 16.9013C25.5118 17.0437 25.3863 17.178 25.3575 17.1908C24.7005 17.455 24.4582 17.6162 23.9448 17.9577L23.79 18.0606C20.7434 20.0864 18.8623 23.5006 18.8623 27.2746C18.8623 29.324 19.4333 31.2911 20.454 32.9885C20.8612 33.6647 21.3402 34.2971 21.8839 34.8739C22 34.9971 21.9171 35.1981 21.7481 35.1981ZM7.2821 6.05408C5.04507 6.21052 3.19521 8.08775 3.07397 10.3287C2.941 12.8278 4.86125 14.9749 7.35641 15.1117C7.39552 15.1156 7.43463 15.1196 7.46983 15.1274H10.1449C10.9662 15.1274 11.7366 15.4481 12.3193 16.0269L12.9998 16.7074L13.6803 16.0269C14.2631 15.4481 15.0335 15.1274 15.8548 15.1274H18.8115C18.874 15.1039 18.9366 15.0883 19.0031 15.0804C21.377 14.7598 23.0978 12.6283 22.9179 10.2309C22.7497 8.00562 20.9429 6.21052 18.7176 6.05408C16.2772 5.882 14.1457 7.64973 13.8798 10.0784C13.829 10.5282 13.4496 10.8645 12.9998 10.8645C12.5501 10.8645 12.1707 10.5282 12.1199 10.0784C11.854 7.65364 9.72642 5.88982 7.2821 6.05408ZM23.7915 20.8741C24.3875 20.3039 25.0669 19.8115 25.8193 19.4188C25.9007 19.3762 26 19.4372 26 19.5287V35.1985H25.8545C25.7869 35.1332 25.7133 35.0726 25.6273 35.0249C24.6734 34.4942 23.8463 33.7992 23.1642 32.9904C21.8357 31.4147 21.0691 29.3998 21.0691 27.2747C21.0691 24.7963 22.0813 22.5104 23.7915 20.8741ZM7.69549 12.4582C8.73009 12.4582 9.56881 11.6195 9.56881 10.5849C9.56881 9.55025 8.73009 8.71154 7.69549 8.71154C6.66088 8.71154 5.82216 9.55025 5.82216 10.5849C5.82216 11.6195 6.66088 12.4582 7.69549 12.4582ZM20.177 10.5849C20.177 11.6195 19.3383 12.4582 18.3037 12.4582C17.2691 12.4582 16.4304 11.6195 16.4304 10.5849C16.4304 9.55025 17.2691 8.71154 18.3037 8.71154C19.3383 8.71154 20.177 9.55025 20.177 10.5849Z"
                    fill="url(#paint0_linear_38_308)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_38_308"
                      x1="18.3037"
                      y1="8.71154"
                      x2="18.3037"
                      y2="12.4582"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF793F" />
                      <stop offset="1" stopColor="#FE6844" />
                    </linearGradient>
                  </defs>
                </svg>
              </Navbar.Brand>

              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                style={{ borderColor: "#1d1a27" }}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={"ms-auto " + styles.home_menu_nav}>
                  <Nav.Link
                    href="https://twitter.com/owllink_btc"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.home_menu_nav_link}
                  >
                    Twitter
                  </Nav.Link>
                  <Nav.Link
                    href="https://files.owl.link/owl-link-light-paper-v0.2.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.home_menu_nav_link}
                  >
                    Read Light Paper
                  </Nav.Link>
                  <Nav.Link
                    href="https://blocksurvey.io/discord"
                    className={styles.home_menu_nav_link}
                  >
                    <Button className="btn owl_link_dashboard_filled_button">
                      Join Discord
                    </Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Menu;
