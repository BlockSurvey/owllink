import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "../../styles/Nft.module.css";
import FAQ from "./FAQ";

function NftPage() {
  // Variables
  const roadmap = [
    {
      title: "Q4 2022",
      description:
        "Release light paper, Whitelisting, Public sale of NFTs, Contract Migration",
    },
    {
      title: "Q1 2023",
      description: "Background themes, Visitors analytics",
    },
    {
      title: "Q2 2023",
      description: "Verifiable Credentials for social identities",
    },
    {
      title: "Q3 & Q4 2023",
      description: "Plan for feature requests from community",
    },
  ];

  const team = [
    {
      image: "images/team/photos/wilson.jpg",
      name: "Wilson Bright John",
      link: "owl.link/wilsonbright.btc",
      alt: "Wilson's profile image",
    },
    {
      image: "images/team/photos/raja.jpg",
      name: "Raja Ilayaperumal",
      link: "owl.link/raja.btc",
      alt: "Raja's profile image",
    },
    {
      image: "images/team/photos/sam.jpg",
      name: "Sam Joseph",
      link: "owl.link/samjoe.btc",
      alt: "Sam's profile image",
    },
  ];

  // Functions

  // Design
  return (
    <Container fluid>
      {/* Hero section */}
      <header>
        <div
          className={
            "row justify-content-center " + styles.homepage_hero_parent_row
          }
        >
          <div className="col-md-12 col-lg-10">
            <div
              className="row"
              style={{ paddingTop: "4%", paddingBottom: "4%" }}
            >
              {/* Title and description */}
              <div className={"col-md-5 " + styles.homepage_hero_column}>
                {/* Hero title */}
                <h1 className={styles.homepage_hero_title}>Buy Owl Link NFT</h1>
                {/* Description */}
                <h2 className={styles.homepage_hero_description}>
                  NFT that earns while you sleep
                </h2>

                {/* Toolbar */}
                <div className="d-flex" style={{ gap: "20px" }}>
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

                  <a
                    style={{ color: "white", textDecoration: "none" }}
                    href="https://files.owl.link/owl-link-light-paper-v0.2.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="btn owl_link_dashboard_outline_button"
                      style={{ fontSize: "16px" }}
                    >
                      Read Light Paper
                    </button>
                  </a>
                </div>
              </div>

              {/* Hero Images */}
              <div
                className={"col-md-7 " + styles.homepage_hero_column}
                style={{ paddingTop: "6px" }}
              >
                <div className={styles.homepage_hero_image_box}>
                  <div>
                    <img
                      src="images/nft/1.png"
                      className={styles.homepage_hero_img}
                    ></img>
                  </div>
                  <div>
                    <img
                      src="images/nft/2.png"
                      className={styles.homepage_hero_img}
                    ></img>
                  </div>
                  <div className="d-none d-xl-block">
                    <img
                      src="images/nft/3.png"
                      className={styles.homepage_hero_img}
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            {/* NFT Details */}
            <div className="row">
              {/* Details tiles */}
              <div className="col-md-12">
                <div className={styles.homepage_details_grid_box}>
                  {/* Hand drawing */}
                  <div className={styles.homepage_details_rect_box}>
                    <div className={styles.homepage_details_title}>100%</div>
                    <div className={styles.homepage_details_description}>
                      Original
                    </div>
                    <div className={styles.homepage_hero_details_icon_box}>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3438 22.3438H10.0872L22.5103 9.91656C22.776 9.65632 22.9871 9.34566 23.1312 9.0028C23.2753 8.65993 23.3495 8.29176 23.3495 7.91984C23.3495 7.54793 23.2753 7.17975 23.1312 6.83689C22.9871 6.49403 22.776 6.18337 22.5103 5.92312L19.6666 3.07937C19.4055 2.81517 19.0946 2.60541 18.7518 2.46224C18.4091 2.31908 18.0413 2.24536 17.6699 2.24536C17.2984 2.24536 16.9307 2.31908 16.5879 2.46224C16.2452 2.60541 15.9342 2.81517 15.6731 3.07937L1.86064 16.8919C1.78533 16.9678 1.72576 17.0578 1.68532 17.1568C1.64489 17.2558 1.6244 17.3618 1.62501 17.4688V23.1563C1.62501 23.3717 1.71062 23.5784 1.86299 23.7308C2.01536 23.8832 2.22203 23.9688 2.43751 23.9688H22.3438C22.5592 23.9688 22.7659 23.8832 22.9183 23.7308C23.0707 23.5784 23.1563 23.3717 23.1563 23.1563C23.1563 22.9408 23.0707 22.7341 22.9183 22.5817C22.7659 22.4294 22.5592 22.3438 22.3438 22.3438ZM16.8228 4.22906C17.0501 4.00939 17.3538 3.88661 17.6699 3.88661C17.9859 3.88661 18.2896 4.00939 18.5169 4.22906L21.3606 7.07281C21.4733 7.18325 21.5628 7.31505 21.6238 7.46049C21.6849 7.60593 21.7164 7.7621 21.7164 7.91984C21.7164 8.07759 21.6849 8.23376 21.6238 8.3792C21.5628 8.52464 21.4733 8.65644 21.3606 8.76688L19.3294 10.7981L14.8078 6.24813L16.8228 4.22906ZM6.90626 22.3438H3.25001V17.8059L13.6581 7.39375L18.2 11.9356L7.78782 22.3438H6.90626Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Attributes */}
                  <div className={styles.homepage_details_rect_box}>
                    <div className={styles.homepage_details_title}>6</div>
                    <div className={styles.homepage_details_description}>
                      Attributes
                    </div>
                    <div className={styles.homepage_hero_details_icon_box}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9569 14.645H21.0429C21.2184 14.645 21.3909 14.5988 21.5429 14.511C21.6949 14.4233 21.8211 14.297 21.9089 14.145C21.9967 13.993 22.0429 13.8205 22.0429 13.645C22.0429 13.4695 21.9967 13.297 21.9089 13.145L16.8659 4.41101C16.771 4.26828 16.6422 4.15121 16.4912 4.07024C16.3401 3.98927 16.1713 3.9469 15.9999 3.9469C15.8285 3.9469 15.6597 3.98927 15.5086 4.07024C15.3575 4.15121 15.2288 4.26828 15.1339 4.41101L10.0909 13.145C10.0031 13.297 9.95692 13.4695 9.95692 13.645C9.95692 13.8205 10.0031 13.993 10.0909 14.145C10.1787 14.297 10.3049 14.4233 10.4569 14.511C10.6089 14.5988 10.7814 14.645 10.9569 14.645ZM15.9999 6.91101L19.3109 12.645H12.6889L15.9999 6.91101ZM9.23789 17.777C8.21839 17.7782 7.22212 18.0816 6.37501 18.6489C5.5279 19.2161 4.86798 20.0218 4.47865 20.9641C4.08932 21.9063 3.98807 22.9428 4.1877 23.9426C4.38732 24.9423 4.87885 25.8605 5.60017 26.581C6.32149 27.3015 7.24021 27.7919 8.24021 27.9904C9.24021 28.1888 10.2766 28.0864 11.2184 27.696C12.1602 27.3055 12.9651 26.6447 13.5314 25.7969C14.0976 24.9491 14.3999 23.9525 14.3999 22.933C14.3983 21.565 13.8537 20.2536 12.8859 19.2868C11.918 18.32 10.6059 17.777 9.23789 17.777ZM9.23789 26.089C8.61395 26.0878 8.00436 25.9017 7.48615 25.5542C6.96794 25.2067 6.56436 24.7134 6.32641 24.1366C6.08846 23.5598 6.02682 22.9254 6.14927 22.3136C6.27172 21.7018 6.57277 21.14 7.01438 20.6993C7.456 20.2585 8.01835 19.9585 8.63039 19.8372C9.24243 19.7159 9.87669 19.7788 10.453 20.0178C11.0294 20.2569 11.5219 20.6614 11.8684 21.1803C12.2149 21.6991 12.3999 22.3091 12.3999 22.933C12.3988 23.7708 12.0652 24.5738 11.4722 25.1656C10.8793 25.7574 10.0756 26.0895 9.23789 26.089ZM26.9179 18.254H19.5589C19.2937 18.254 19.0393 18.3594 18.8518 18.5469C18.6642 18.7344 18.5589 18.9888 18.5589 19.254V26.613C18.5589 26.8782 18.6642 27.1326 18.8518 27.3201C19.0393 27.5077 19.2937 27.613 19.5589 27.613H26.9179C27.1831 27.613 27.4375 27.5077 27.625 27.3201C27.8125 27.1326 27.9179 26.8782 27.9179 26.613V19.254C27.9179 18.9888 27.8125 18.7344 27.625 18.5469C27.4375 18.3594 27.1831 18.254 26.9179 18.254ZM25.9179 25.613H20.5589V20.254H25.9179V25.613Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Unique traits */}
                  <div className={styles.homepage_details_rect_box}>
                    <div className={styles.homepage_details_title}>50+</div>
                    <div className={styles.homepage_details_description}>
                      Unique traits
                    </div>
                    <div className={styles.homepage_hero_details_icon_box}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5521 0.81601H11.0641C10.0561 0.81601 9.2161 1.65601 9.2161 2.66401V6.14401C9.1921 6.14401 9.1441 6.14401 9.1201 6.14401C4.4161 6.14401 0.600098 9.96001 0.600098 14.664C0.600098 19.368 4.4161 23.184 9.1201 23.184C13.7041 23.184 17.4481 19.536 17.6401 15H21.5521C22.5601 15 23.4001 14.16 23.4001 13.152V2.66401C23.4001 1.65601 22.5601 0.81601 21.5521 0.81601ZM9.1201 21.144C5.5441 21.144 2.6401 18.24 2.6401 14.664C2.6401 11.088 5.5441 8.18401 9.1201 8.18401C9.1441 8.18401 9.1921 8.18401 9.2161 8.18401V13.152C9.2161 14.16 10.0561 15 11.0641 15H15.6001C15.4081 18.408 12.5761 21.144 9.1201 21.144ZM21.3601 12.96H11.2561V2.85601H21.3601V12.96Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Collections */}
                  <div className={styles.homepage_details_rect_box}>
                    <div className={styles.homepage_details_title}>10,000</div>
                    <div className={styles.homepage_details_description}>
                      Collections
                    </div>
                    <div className={styles.homepage_hero_details_icon_box}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 8C19.1046 8 20 8.89543 20 10V18C20 19.1046 19.1046 20 18 20H2C0.895431 20 0 19.1046 0 18V10C0 8.89543 0.895431 8 2 8H18ZM18 10H2V18H18V10ZM16 4C16.5523 4 17 4.44771 17 5C17 5.51284 16.6139 5.93551 16.1166 5.99327L16 6H4C3.44772 6 3 5.55229 3 5C3 4.48716 3.38605 4.06449 3.88339 4.00673L4 4H16ZM14 0C14.5523 0 15 0.447715 15 1C15 1.51284 14.6139 1.93551 14.1166 1.99327L14 2H6C5.44771 2 5 1.55228 5 1C5 0.487164 5.38605 0.0644941 5.88339 0.00672913L6 0H14Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem, Solution and Vision */}
      <section id="why-owl-link-nft">
        <div className={"row justify-content-center " + styles.home_story_row}>
          <div className="col-md-12 col-lg-10">
            <div className="row">
              <div className="col-md-12">
                {/* Subtitle */}
                <h2 className={styles.home_subtitle + " text-center"}>
                  Why Buy Owl Link NFT
                </h2>
                {/* Description */}
                <div className="d-flex justify-content-center">
                  {/* <p className={styles.home_sub_description + " text-center"} style={{ maxWidth: "800px" }}>
                                        
                                    </p> */}
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              {/* Story 1 */}
              <div className={"col-md-6 " + styles.home_story_col}>
                <div className="text-center">
                  <img
                    className={styles.home_story_img}
                    src="images/nft/1.png"
                  ></img>
                </div>
              </div>
              <div className={"col-md-6 " + styles.home_story_col}>
                {/* <div className={styles.home_story_background_title}>
                                    Background Story
                                </div> */}

                <div className={styles.home_subtitle}>Problem</div>
                <div
                  className={styles.home_sub_text_content}
                  style={{ maxWidth: "540px" }}
                >
                  Firstly, crypto natives don&apos;t have a link in the bio tool
                  for socials to display their digital assets with proof of
                  ownership. Second, like any centralized social network -
                  censorship (Linktree banning sex workers from their platform),
                  lack of data ownership, and lack of incentives are a problem.
                  Finally, there is a risk of the product being sunset and users
                  losing out on everything. This has happened time and time
                  again.
                </div>
              </div>

              {/* Story 1 */}
              <div className={"col-md-6 " + styles.home_story_col}>
                <div className="text-center">
                  <img
                    className={styles.home_story_img}
                    src="images/nft/2.png"
                  ></img>
                </div>
              </div>
              <div className={"col-md-6 " + styles.home_story_col}>
                {/* <div className={styles.home_story_background_title}>
                                    Background Story
                                </div> */}

                <div className={styles.home_subtitle}>Solution</div>
                <div
                  className={styles.home_sub_text_content}
                  style={{ maxWidth: "540px" }}
                >
                  Owl Link, as a bio link tool, is designed to be simple and
                  easy to use so that anyone can create and share their own
                  biography, social profiles, verifiable credentials, and NFTs
                  regardless of their technical skill level It is built on top
                  of decentralized domains like .btc and .eth. These links are
                  stored on the blockchain and stay forever. It also enables
                  users to showcase their digital assets with provable
                  ownership.
                </div>
              </div>

              {/* Story 2 */}
              <div className={"col-md-6 " + styles.home_story_col}>
                <div className="text-center">
                  <img
                    className={styles.home_story_img}
                    src="images/nft/3.png"
                  ></img>
                </div>
              </div>
              <div className={"col-md-6 " + styles.home_story_col}>
                {/* <div className={styles.home_story_background_title}>
                                    Background Story
                                </div> */}

                <div className={styles.home_subtitle}>Vision</div>
                <div
                  className={styles.home_sub_text_content}
                  style={{ maxWidth: "540px" }}
                >
                  Owl Link&apos;s vision is to become the social identity for
                  Web 3. Owl Link is designed to be an open and extensible
                  platform. Any decentralized identity provider can be used with
                  Owl Link, and any application can use Owl Link to verify the
                  identity of an Owl Link user.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section id="rewards">
        <div
          className={"row justify-content-center " + styles.home_royalty_row}
        >
          <div className="col-md-12 col-lg-10">
            <Container style={{ padding: "0px" }}>
              <div className={"row " + styles.home_royalty_sub_row}>
                <div className="col-md-12 text-center">
                  {/* Title */}
                  <h2 className={styles.home_subtitle}>
                    Rewards for NFT Holders
                  </h2>

                  {/* Description */}
                  {/* <div className="d-flex justify-content-center">
                                        <p className={styles.home_sub_description} style={{ maxWidth: "800px" }}>
                                        </p>
                                    </div> */}
                </div>

                <div className={"col-md-12 " + styles.home_royalty_col}>
                  <div className={styles.home_royalty_grid_box}>
                    {/* Royalty allocation 1 */}
                    <div
                      className={
                        styles.home_royalty_allocation_info_box + " text-center"
                      }
                    >
                      {/* Percentage */}
                      <div
                        className={
                          styles.home_royalty_allocation_info_percentage
                        }
                      >
                        90%
                      </div>

                      {/* Title */}
                      <div
                        className={styles.home_royalty_allocation_info_title}
                      >
                        Earn from Revenue
                      </div>

                      <div
                        className={
                          styles.home_royalty_allocation_info_description
                        }
                      >
                        Earn 90% in revenue from owl.link sales.
                      </div>

                      {/* Yellow bg */}
                      <div
                        className={
                          styles.home_royalty_allocation_info_box_yellow_bg
                        }
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className={"row " + styles.home_release_map_row}>
              <div className="col-md-12 text-center">
                {/* Title */}
                <h2 className={styles.home_subtitle}>Release Roadmap</h2>
                {/* Description */}
                {/* <div className="d-flex justify-content-center">
                                    <p className={styles.home_sub_description} style={{ maxWidth: "800px" }}>
                                        
                                    </p>
                                </div> */}
              </div>

              <div className="col-md-12">
                <div className={styles.home_release_roadmap_content_box}>
                  {roadmap.map((item, index) => (
                    <div
                      className={styles.home_release_roadmap_info_box}
                      key={index}
                    >
                      {/* <div className={styles.home_release_roadmap_date}>
                                                20 JAN 2022
                                            </div> */}
                      <div className={styles.home_release_roadmap_info_title}>
                        {item.title}
                      </div>
                      <div
                        className={styles.home_release_roadmap_info_description}
                      >
                        {item.description}
                      </div>
                      <div
                        className={
                          styles.home_release_roadmap_info_box_yellow_bg
                        }
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team">
        <div className={"row justify-content-center " + styles.home_team_row}>
          <div className="col-md-12 col-lg-10 text-center">
            <div className={styles.home_subtitle}>Team</div>

            <div className={styles.home_team_flex_box}>
              {/* Members */}
              {team.map((member, i) => (
                <div key={i}>
                  <Link href={"https://" + member.link}>
                    <a
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* Image */}
                      <img
                        src={member.image}
                        className={styles.home_team_img}
                      ></img>

                      {/* Name */}
                      <div className={styles.home_team_member_name}>
                        {member.name}
                      </div>

                      {/* Link */}
                      <div>
                        <span
                          style={{
                            color: "black",
                            marginTop: 10,
                          }}
                        >
                          {member.link}
                        </span>{" "}
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
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className={"row justify-content-center " + styles.home_faq_row}>
          <div className="col-md-12 col-lg-10">
            <Container style={{ padding: "0px" }}>
              <div className={"row " + styles.home_royalty_sub_row}>
                <div className="col-md-12 text-center">
                  {/* Title */}
                  <h2 className={styles.home_subtitle}>
                    Frequently asked questions
                  </h2>

                  {/* Description */}
                  <div className="d-flex justify-content-center">
                    <p
                      className={styles.home_sub_description}
                      style={{ maxWidth: "800px" }}
                    ></p>
                  </div>
                </div>

                <div className="col-md-12 home_faq_col">
                  <FAQ />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default NftPage;
