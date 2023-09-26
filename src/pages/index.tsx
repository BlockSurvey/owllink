// import HeaderComponent from '@/components/home/header.component';
// import Signup from '@/components/home/signup';
// import { MyPage } from '@/types/my-page.type';

// const Home: MyPage = () => {
//   // Variables

//   // States

//   // Store

//   // GraphQL

//   return (
//     <>
//       <div className="h-full">
//         <HeaderComponent />

//         <Signup />
//       </div>
//     </>
//   );
// };

// export default Home;
// Home.isProtected = false;

import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { Constants } from '../../common/constants';
import Accordion from '../components/home/accordion';
import ClaimOwlLink from '../components/home/claimOwlLink';
import { authenticate, userSession } from '../../services/auth';
import styles from '../styles/Home.module.css';
import { useAuthenticated } from '@nhost/nextjs';

const { convert } = require('html-to-text');

export default function Home(props) {
  const authenticated = useAuthenticated();

  //   useEffect(() => {
  //     // Load help scout
  //     !(function (e, t, n) {
  //       function a() {
  //         var e = t.getElementsByTagName('script')[0],
  //           n = t.createElement('script');
  //         (n.type = 'text/javascript'),
  //           (n.async = !0),
  //           (n.src = 'https://beacon-v2.helpscout.net'),
  //           e.parentNode.insertBefore(n, e);
  //       }
  //       if (
  //         ((e.Beacon = n =
  //           function (t, n, a) {
  //             e.Beacon.readyQueue.push({ method: t, options: n, data: a });
  //           }),
  //         (n.readyQueue = []),
  //         'complete' === t.readyState)
  //       )
  //         return a();
  //       e.attachEvent
  //         ? e.attachEvent('onload', a)
  //         : e.addEventListener('load', a, !1);
  //     })(window, document, window.Beacon || function () {});
  //     window.Beacon('init', 'f5a98c28-4e98-481f-b059-e8334d53f0a4');
  //   }, []);

  // Why owl link
  const whyOwlLink = [
    {
      img: 'images/why-owl-link/why-owl-link-bitcoin.svg',
      title:
        'Build Owl Link on ₿itcoin without having to rely on centralized systems.',
      alt: 'Owl Link on Bitcoin'
    },
    {
      img: 'images/why-owl-link/why-owl-link-nfts.svg',
      title:
        'Showcase your collectibles, NFTs, and social profiles. Everything is in one place.',
      alt: 'NFTs'
    },
    {
      img: 'images/why-owl-link/why-owl-link-logo-owl-link.svg',
      title:
        'Build your clout by sharing Owl Link with your friends and family.',
      alt: 'Gain trust and confidence'
    }
  ];

  // How it works
  const howItWorks = [
    {
      title: 'Link your .btc name',
      description: `To create an Owl Link you need a .btc domain to register your link. Please proceed to <a href="https://btc.us" target="_blank" rel="noreferrer">btc.us</a> to get your name if you don't have one.`,
      step: '1'
    },
    {
      title: 'Create your Owl link',
      description:
        'After you register, Owl Link will allow you to create your own link using the .btc domain name. Registering Owl Link will cost you 10 STX.',
      step: '2'
    },
    {
      title: 'Share your Owl link',
      description:
        'Once you have finished creating your Owl Link, feel free to share it with your family and friends.',
      step: '3'
    }
  ];

  const [selectedHowItWorksIndex, setSelectedHowItWorks] = useState(0);
  const selectHowItWorksIndex = i => {
    setSelectedHowItWorks(i);
  };

  // Team members
  const team = [
    {
      image: 'images/team/wilson.png',
      name: 'Wilson Bright John',
      link: 'owl.link/wilsonbright.btc',
      alt: 'dp'
    },
    {
      image: 'images/team/raja.png',
      name: 'Raja Ilayaperumal',
      link: 'owl.link/raja.btc',
      alt: 'dp'
    }
    // {
    //   "image": "",
    //   "name": "Sarath Shyamson",
    //   "link": "owl.link/shyam.btc",
    //   "alt": "dp"
    // },
    // {
    //   "image": "",
    //   "name": "Sam Joseph",
    //   "link": "owl.link/samjoe.btc",
    //   "alt": "dp"
    // },
    // {
    //   "image": "",
    //   "name": "Selvanath",
    //   "link": "owl.link/selva.btc",
    //   "alt": "dp"
    // },
    // {
    //   "image": "",
    //   "name": "Nitin Chandran",
    //   "link": "owl.link/nitin.btc",
    //   "alt": "dp"
    // }
  ];

  // Showcase members
  const showcase = [
    {
      image: 'images/team/owllink.svg',
      name: 'Owl Link',
      link: 'owl.link/owllink.btc',
      alt: 'dp'
    }
    // {
    //   image: "images/team/wilson.png",
    //   name: "Wilson Bright John",
    //   link: "owl.link/wilsonbright.btc",
    //   alt: "dp",
    // },
    // {
    //   image: "images/team/raja.png",
    //   name: "Raja Ilayaperumal",
    //   link: "owl.link/raja.btc",
    //   alt: "dp",
    // },
    // {
    //   image: "images/team/samjoe.svg",
    //   name: "Sam Joseph",
    //   link: "owl.link/samjoe.btc",
    //   alt: "dp",
    // },
    // {
    //   "image": "",
    //   "name": "Sarath Shyamson",
    //   "link": "owl.link/shyam.btc",
    //   "alt": "dp"
    // },
    // {
    //   "image": "",
    //   "name": "Selvanath",
    //   "link": "owl.link/selva.btc",
    //   "alt": "dp"
    // },
    // {
    //   "image": "",
    //   "name": "Nitin Chandran",
    //   "link": "owl.link/nitin.btc",
    //   "alt": "dp"
    // }
  ];

  // FAQ schema
  const { faqSchema } = props;

  // Product hunt embed code
  const productHuntEmbedScript = `<a href="https://www.producthunt.com/posts/owl-link?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-owl&#0045;link" target="_blank">
  <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=333947&theme=dark" alt="Owl&#0032;Link - Decentralized&#0032;bio&#0032;link&#0044;&#0032;built&#0032;on&#0032;Bitcoin | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>`;

  return (
    <>
      {/* Header */}
      <Head>
        <title>Owl Link | The only bio link that stays forever</title>
        <meta
          name="description"
          content="Showcase your collectibles, NFTs, and social profiles. Everything is in one place."
        />
        <meta
          name="keywords"
          content="Owl, Owl link, Link ,BlockSurvey, NFT, Crypto, Blockchain, Privacy link, One link"
        />
        <meta name="robots" content="index,follow" />

        <link rel="icon" href="/favicon.ico" />

        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Owl Link - The only bio link that stays forever"
        />
        <meta
          property="og:description"
          content="Showcase your collectibles, NFTs, and social profiles. Everything is in one place."
        />
        <meta property="og:url" content="https://owl.link/" />
        <meta
          property="og:image"
          content="https://owl.link/images/logo/owllink.png"
        />
        <meta property="og:site_name" content="owllink" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Owl Link - The only bio link that stays forever"
        />
        <meta
          name="twitter:description"
          content="Showcase your collectibles, NFTs, and social profiles. Everything is in one place."
        />
        <meta name="twitter:url" content="https://owl.link/" />
        <meta
          name="twitter:image"
          content="https://owl.link/images/logo/owllink.png"
        />
        <meta name="twitter:site" content="@owllink_btc" />

        <meta name="theme-color" content="#ffffff" />

        {/* Schemas */}
        <script type="application/ld+json">
          {/* FAQ */}
          {JSON.stringify(faqSchema)}
        </script>
      </Head>

      {/* Body */}
      <div style={{ backgroundColor: '#3f4372' }}>
        <Row>
          <Col>
            <div>
              <Row>
                <Col>
                  {/* Section - 1 - Hero */}
                  <section className={styles.home_section}>
                    <header className={styles.header_box}>
                      <div className={styles.header_box_items}>
                        {/* Brand Logo */}
                        <div className={styles.logo}>
                          <svg
                            className={styles.logo_icon}
                            viewBox="0 0 292 174"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.8572 148.031C10.8572 153.46 13.5715 156.174 19.0001 156.174C24.4287 156.174 27.1431 153.46 27.1431 148.031C27.1431 142.603 24.4287 139.888 19.0001 139.888C13.5715 139.888 10.8572 142.603 10.8572 148.031ZM0 148.031C0 135.365 6.33338 129.031 19.0001 129.031C31.6669 129.031 38.0003 135.365 38.0003 148.031C38.0003 160.698 31.6669 167.032 19.0001 167.032C6.33338 167.032 0 160.698 0 148.031Z"
                              fill="#FF793F"
                            />
                            <path
                              d="M40.7146 150.746V129.031H51.5718V150.746C51.5718 154.365 53.3813 156.174 57.0004 156.174C60.6195 156.174 62.429 154.365 62.429 150.746V129.031H73.2862V150.746C73.2862 154.365 75.0958 156.174 78.7149 156.174C82.3339 156.174 84.1435 154.365 84.1435 150.746V131.746L95.0007 126.317V150.746C95.0007 161.603 89.5721 167.032 78.7149 167.032C74.1186 167.032 70.4995 166.063 67.8576 164.127C65.2157 166.063 61.5966 167.032 57.0004 167.032C46.1432 167.032 40.7146 161.603 40.7146 150.746Z"
                              fill="#FF793F"
                            />
                            <path
                              d="M97.715 126.317L108.572 131.746V156.174H133.001V167.032H97.715V126.317Z"
                              fill="#FF793F"
                            />
                            <path
                              d="M161.713 124.967L172.571 130.396V154.825H196.999V165.682H161.713V124.967Z"
                              fill="#FF793F"
                            />
                            <path
                              d="M210.571 162.967L199.714 168.396V127.681H210.571V162.967Z"
                              fill="#FF793F"
                            />
                            <path
                              d="M224.142 146.22V162.967L213.285 168.396V120L240.428 147.143V127.681H251.285V173.363L224.142 146.22Z"
                              fill="#FF793F"
                            />
                            <path
                              d="M281.143 133.11V130.396L292 124.967V133.11C292 139.009 290.625 143.533 287.874 146.682C290.625 149.83 292 154.354 292 160.253V165.682H281.143V160.253C281.143 154.825 278.428 152.11 273 152.11H264.857V162.967L254 168.396V127.681H264.857V141.253H273C278.428 141.253 281.143 138.539 281.143 133.11Z"
                              fill="#FF793F"
                            />
                            <path
                              d="M139.406 146.531L146.553 139.384L153.7 146.531L146.553 153.678L139.406 146.531Z"
                              fill="#FF793F"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M172.207 89.3491H166.648C139.228 89.3491 117 67.1211 117 39.7008V28.7903C117 12.8901 129.89 0 145.79 0H154.209C170.109 0 182.999 12.8901 182.999 28.7903V40.776C182.999 41.5255 182.713 42.2453 182.201 42.7933L182.098 42.9032L182.098 42.9034L182.098 42.9036C181.761 43.2648 181.442 43.6057 181.369 43.6381C179.701 44.3088 179.086 44.7181 177.783 45.585L177.619 45.6943L177.39 45.846C169.656 50.9886 164.881 59.6554 164.881 69.2356C164.881 74.4378 166.331 79.4314 168.922 83.74C169.955 85.4565 171.171 87.0618 172.551 88.5261C172.846 88.8389 172.636 89.3491 172.207 89.3491ZM135.485 15.3681C129.807 15.7652 125.111 20.5304 124.803 26.219C124.466 32.5628 129.34 38.0131 135.674 38.3606C135.773 38.3705 135.873 38.3804 135.962 38.4003H142.752C144.837 38.4003 146.793 39.2143 148.272 40.6836L150 42.4111L151.727 40.6836C153.206 39.2143 155.162 38.4003 157.247 38.4003H164.752C164.911 38.3407 165.07 38.301 165.239 38.2811C171.265 37.4671 175.633 32.0565 175.176 25.9708C174.749 20.322 170.163 15.7652 164.514 15.3681C158.319 14.9312 152.908 19.4185 152.233 25.5836C152.104 26.7253 151.141 27.5791 150 27.5791C148.858 27.5791 147.895 26.7253 147.766 25.5836C147.091 19.4285 141.69 14.9511 135.485 15.3681ZM177.394 52.988C178.907 51.5406 180.631 50.2907 182.541 49.2939C182.748 49.1857 183 49.3406 183 49.5729V89.3501H182.631C182.459 89.1843 182.272 89.0305 182.054 88.9094C179.633 87.5622 177.533 85.798 175.801 83.745C172.429 79.7451 170.483 74.6304 170.483 69.2357C170.483 62.9445 173.052 57.1418 177.394 52.988ZM136.535 31.6246C139.161 31.6246 141.29 29.4956 141.29 26.8693C141.29 24.243 139.161 22.1139 136.535 22.1139C133.908 22.1139 131.779 24.243 131.779 26.8693C131.779 29.4956 133.908 31.6246 136.535 31.6246ZM168.219 26.8693C168.219 29.4956 166.09 31.6246 163.463 31.6246C160.837 31.6246 158.708 29.4956 158.708 26.8693C158.708 24.243 160.837 22.1139 163.463 22.1139C166.09 22.1139 168.219 24.243 168.219 26.8693Z"
                              fill="url(#paint0_linear_183_2)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_183_2"
                                x1="163.463"
                                y1="22.1139"
                                x2="163.463"
                                y2="31.6246"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#FF793F" />
                                <stop offset="1" stopColor="#FE6844" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>

                        {/* Hero title */}
                        <h1 className={styles.header_title_box}>
                          The only bio link that{' '}
                          <br className="d-none d-md-block"></br> stays forever
                        </h1>

                        {/* {userSession && userSession.isUserSignedIn() ? (
                          // Show dashboard button
                          <Link href="/dashboard">
                            <div className="d-flex align-items-center justify-content-center">
                              <Button
                                className={styles.home_filled_button}
                                onClick={() => authenticate()}
                              >
                                Go to dashboard
                              </Button>
                            </div>
                          </Link>
                        ) : (
                          <ClaimOwlLink></ClaimOwlLink>
                        )} */}
                        <div>
                          <Link href={authenticated ? '/dashboard' : '/login'}>
                            <Button type="primary" size="large"> Get started </Button>
                          </Link>
                        </div>

                        {/* Buy NFT */}
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                            marginTop: '26px'
                          }}
                        >
                          <a
                            style={{
                              cursor: 'pointer',
                              color: '#ff793f',
                              marginRight: '5px'
                            }}
                            href="nft"
                            target={'_blank'}
                            rel="noreferrer"
                          >
                            <Button className="owl_link_dashboard_filled_button">
                              Buy NFT{' '}
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
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </a>

                          <a
                            style={{
                              cursor: 'pointer',
                              color: '#ff793f',
                              marginRight: '5px'
                            }}
                            href="https://files.owl.link/owl-link-light-paper-v0.2.pdf"
                            target={'_blank'}
                            rel="noreferrer"
                          >
                            <Button className="owl_link_dashboard_filled_button">
                              Read Light Paper{' '}
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
                                  fill="white"
                                />
                              </svg>
                            </Button>
                          </a>
                        </div>

                        {/* Hero description */}
                        <p className={styles.header_caption}>
                          Experience freedom against authority
                        </p>

                        {/* Scroll down icon */}
                        <div
                          className="d-none d-md-block"
                          style={{ margin: '70px 0px 10px' }}
                        >
                          {/* <div style={{ color: "white", marginBottom: "8px" }}>Scroll down</div> */}

                          {/* Arrow icon */}
                          <a href="#showcase">
                            <div>
                              <svg
                                className={styles.home_scroll_down_icon}
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0991 13.532C9.94488 13.532 9.79062 13.4806 9.63636 13.352C8.65939 12.3751 7.65671 11.3724 6.67974 10.3954C6.08841 9.80408 6.98825 8.90424 7.57958 9.49556C8.22232 10.1383 8.83936 10.7553 9.4821 11.3981C9.4821 7.87585 9.4821 4.35361 9.4821 0.805664C9.4821 0.651405 9.53352 0.497147 9.61065 0.420018C9.71349 0.265759 9.89346 0.16292 10.1248 0.18863C13.6471 0.265759 16.9122 2.03973 18.7376 5.09919C22.0542 10.6525 19.0204 18.134 12.7215 19.8309C6.37122 21.5277 0.226586 16.6172 0.0980368 10.164C0.072327 9.3413 1.35782 9.3413 1.38352 10.164C1.46065 13.712 3.54315 16.9514 6.8597 18.2626C10.0734 19.5481 13.827 18.7511 16.2695 16.3344C18.7119 13.8919 19.4832 10.1383 18.1977 6.92459C16.9636 3.81371 14.007 1.75693 10.7419 1.47412C10.7419 4.76497 10.7419 8.03011 10.7419 11.321C11.3846 10.6782 12.0017 10.0612 12.6444 9.41843C13.2357 8.82711 14.1356 9.75266 13.5442 10.3183C12.5416 11.321 11.5389 12.3236 10.5105 13.352C10.4077 13.4806 10.2534 13.532 10.0991 13.532Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </header>
                  </section>

                  {/* Section - 2 - Showcase */}
                  <section id="showcase" className={styles.home_section}>
                    <div className={styles.team}>
                      {/* Rounded border */}
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          className={styles.home_section_separator_border}
                        ></div>
                      </div>

                      {/* Title */}
                      <h1 className={styles.home_title}>Showcase</h1>

                      {/* Description */}
                      <p className={styles.home_description}>
                        Explore Owl Links made by crypto natives
                      </p>

                      <div className={styles.team_members_box}>
                        {showcase.map((member, i) => (
                          <div style={{ margin: '30px' }} key={i}>
                            <Link href={'https://' + member.link}>
                              {/* Each member */}
                              <div className={styles.team_members_details_box}>
                                {/* Profile image */}
                                <div
                                  className={styles.team_members_details_border}
                                >
                                  <div className={styles.team_members_details}>
                                    {/* Image */}
                                    {member.image && (
                                      <img
                                        src={member.image}
                                        alt={member.alt}
                                        style={{ width: '100%' }}
                                      ></img>
                                    )}

                                    {/* Tick */}
                                    <div className={styles.team_members_check}>
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
                                  </div>
                                </div>

                                {/* Name */}
                                <div style={{ color: 'white', marginTop: 28 }}>
                                  {member.name}
                                </div>

                                {/* Link */}
                                <div>
                                  <span
                                    style={{
                                      color: '#ff793f',
                                      marginTop: 10
                                    }}
                                  >
                                    {member.link}
                                  </span>{' '}
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
                                      fill="#ff793f"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Section - 3 - How owl-link works*/}
                  <section id="howitworks" className={styles.home_section}>
                    <div className={styles.how_owl_link}>
                      {/* Rounded border */}
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          className={styles.home_section_separator_border}
                        ></div>
                      </div>

                      {/* How it works title */}
                      <h1 className={styles.home_title}>How Owl Link works?</h1>

                      {/* How it works description */}
                      <p className={styles.home_description}>
                        Owl Links are powered by the Stacks(Ӿ) blockchain which
                        is secured by ₿itcoin.
                      </p>

                      {/* Outline box */}
                      <div className={styles.how_it_works_outline_box}>
                        {/* Parent box */}
                        <div className={styles.how_owl_link_works_parent_box}>
                          <div
                            className={
                              styles.how_owl_link_works_parent_box_index
                            }
                          >
                            Step {howItWorks[selectedHowItWorksIndex].step}
                          </div>
                          <div
                            className={
                              styles.how_owl_link_works_parent_box_title
                            }
                          >
                            {howItWorks[selectedHowItWorksIndex].title}
                          </div>
                          <div
                            className={
                              styles.how_owl_link_works_parent_box_description
                            }
                          >
                            <span
                              dangerouslySetInnerHTML={{
                                __html:
                                  howItWorks[selectedHowItWorksIndex]
                                    .description
                              }}
                            ></span>
                          </div>
                        </div>

                        {/* Back absolute  */}
                        <div
                          className={styles.how_owl_link_works_child_box}
                        ></div>

                        {/* Three carousel checkbox */}
                        <div
                          className={styles.how_owl_link_works_checkbox_outline}
                        >
                          {howItWorks.map((howWorks, i) => (
                            <div
                              className={
                                styles.how_owl_link_works_checkbox_outer
                              }
                              onClick={() => selectHowItWorksIndex(i)}
                              key={howWorks.title}
                            >
                              <div
                                className={
                                  selectedHowItWorksIndex == i
                                    ? styles.how_owl_link_works_checkbox_inner_show
                                    : styles.how_owl_link_works_checkbox_inner
                                }
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="d-flex align-items-center justify-content-center">
                        <Button
                          className={styles.home_filled_button}
                          onClick={() => authenticate()}
                        >
                          Get Owl Link
                        </Button>
                      </div>
                    </div>
                  </section>

                  {/* Section - 4 - Why owl-link */}
                  <section id="whyowllink" className={styles.home_section}>
                    <div className={styles.why_owl_link}>
                      {/* Rounded border */}
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          className={styles.home_section_separator_border}
                        ></div>
                      </div>

                      {/* Why owl-link title */}
                      <h1 className={styles.home_title}>Why Owl Link?</h1>

                      {/* Why owl-link description */}
                      <p className={styles.home_description}>
                        What you get when you use Owl Link
                      </p>

                      {/* Why owl-link cards */}
                      <div className={styles.why_owl_link_cards}>
                        {whyOwlLink.map(owlLink => (
                          <div
                            className={styles.why_owl_link_card_body}
                            key={owlLink.title}
                          >
                            {/* Image */}
                            <div className={styles.why_owl_link_avatar_box}>
                              <img src={owlLink.img} alt={owlLink.alt}></img>
                            </div>

                            {/* Content */}
                            <div
                              className={styles.why_owl_link_card_description}
                            >
                              {owlLink.title}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="d-flex align-items-center justify-content-center">
                        <Button
                          className={styles.home_filled_button}
                          onClick={() => authenticate()}
                        >
                          Get Owl Link
                        </Button>
                      </div>
                    </div>
                  </section>

                  {/* Section - 5 - FAQ's */}
                  <section id="faq" className={styles.home_section}>
                    <div className={styles.faq}>
                      {/* Rounded border */}
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          className={styles.home_section_separator_border}
                        ></div>
                      </div>

                      {/* FAQ title */}
                      <h1 className={styles.home_title}>
                        Frequently asked questions
                      </h1>

                      {/* Accordion component */}
                      <Accordion></Accordion>

                      {/* CTA */}
                      <div className="d-flex align-items-center justify-content-center">
                        <Button
                          className={styles.home_filled_button}
                          onClick={() => authenticate()}
                        >
                          Get Owl Link
                        </Button>
                      </div>
                    </div>
                  </section>

                  {/* Section - 6 - Footer */}
                  <section>
                    {/* Product hunt */}
                    {/* <div className={styles.product_hunt_box}>
                      <div dangerouslySetInnerHTML={{
                        __html: productHuntEmbedScript
                      }}>
                      </div>
                    </div> */}

                    {/* Gitlab icon */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 0 50px 0'
                      }}
                    >
                      <a
                        style={{ color: 'white', textDecoration: 'none' }}
                        href="https://gitlab.com/blocksurvey/owllink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span
                          style={{ fontSize: '16px', paddingRight: '10px' }}
                        >
                          GitLab
                        </span>
                        <svg
                          style={{ width: '30px' }}
                          viewBox="0 0 31 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0196 27.6844L20.5434 10.6839H9.49556L15.0196 27.6844Z"
                            fill="#E24329"
                          />
                          <path
                            d="M15.0196 27.6844L9.49556 10.6839L1.75411 10.6837L15.0196 27.6844Z"
                            fill="#FC6D26"
                          />
                          <path
                            d="M1.75411 10.6837L0.0755155 15.8502C0.000879876 16.0798 0.000869579 16.3273 0.0754861 16.5569C0.150103 16.7866 0.295515 16.9868 0.490885 17.1288L15.0196 27.6844L1.75411 10.6837Z"
                            fill="#FCA326"
                          />
                          <path
                            d="M1.75411 10.6837L9.49556 10.6839L6.16873 0.444442C5.99752 -0.0824508 5.25215 -0.0823335 5.08106 0.444442L1.75411 10.6837Z"
                            fill="#E24329"
                          />
                          <path
                            d="M15.0196 27.6844L20.5434 10.6839L28.285 10.6837L15.0196 27.6844Z"
                            fill="#FC6D26"
                          />
                          <path
                            d="M28.285 10.6837L29.9636 15.8502C30.0382 16.0799 30.0382 16.3273 29.9635 16.557C29.8889 16.7866 29.7435 16.9868 29.5481 17.1288L15.0196 27.6844L28.285 10.6837Z"
                            fill="#FCA326"
                          />
                          <path
                            d="M28.285 10.6837L20.5434 10.6839L23.8704 0.444442C24.0416 -0.0824508 24.7869 -0.0823335 24.958 0.444442L28.285 10.6837Z"
                            fill="#E24329"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* List of social icons */}
                    <div className={styles.footer}>
                      <div className={styles.footer_icons}>
                        {/* Twitter */}
                        <a
                          href="https://twitter.com/owllink_btc"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            width="36"
                            height="30"
                            viewBox="0 0 36 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.3216 29.2683C24.9072 29.2683 32.3366 18.0091 32.3366 8.24546C32.3366 7.92571 32.3301 7.60742 32.3157 7.29044C33.7613 6.24404 35.0089 4.94842 36 3.46434C34.6766 4.05293 33.2524 4.44907 31.7584 4.62768C33.2834 3.71298 34.454 2.26588 35.0064 0.540951C33.5565 1.40136 31.9704 2.00791 30.3163 2.33444C28.9685 0.898244 27.0497 0 24.925 0C20.8461 0 17.5385 3.30893 17.5385 7.38768C17.5385 7.96756 17.6034 8.53141 17.7301 9.07244C11.5915 8.76344 6.14817 5.82329 2.50522 1.35263C1.84909 2.48022 1.50398 3.76175 1.50512 5.06634C1.50512 7.6298 2.80902 9.89276 4.79195 11.2167C3.61903 11.1809 2.47185 10.8639 1.44688 10.2926C1.44578 10.3236 1.44578 10.3538 1.44578 10.387C1.44578 13.9652 3.99168 16.9529 7.37129 17.6298C6.73656 17.8028 6.08158 17.8902 5.42371 17.8898C4.94861 17.8898 4.48559 17.843 4.03559 17.7566C4.9759 20.6924 7.70254 22.8288 10.9353 22.8885C8.40732 24.8706 5.22285 26.0512 1.7618 26.0512C1.17304 26.0517 0.584749 26.0175 0 25.9488C3.26883 28.0448 7.14988 29.2683 11.3216 29.2683Z"
                              fill="#1DA1F2"
                            />
                          </svg>
                        </a>

                        {/* Instagram */}
                        <a
                          href="https://www.instagram.com/owllink_btc/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.12866 35.8727C6.98773 35.7753 5.82471 35.419 5.05115 35.1173C4.02615 34.7182 3.29539 34.2432 2.52611 33.475C1.75683 32.7067 1.28071 31.976 0.883764 30.951C0.582043 30.1774 0.225756 29.0144 0.128392 26.8735C0.0213986 24.5592 0 23.8648 0 18.0016C0 12.1384 0.0235385 11.4451 0.127322 9.12866C0.224686 6.98773 0.583113 5.82685 0.882694 5.05115C1.28178 4.02615 1.7579 3.29539 2.52504 2.52504C3.29325 1.75683 4.02401 1.27964 5.05008 0.882694C5.82364 0.580973 6.98666 0.224686 9.12759 0.127322C11.4429 0.0213986 12.1384 0 17.9995 0C23.8627 0 24.556 0.0235385 26.8724 0.127322C29.0133 0.224686 30.1742 0.583113 30.9499 0.882694C31.9749 1.27964 32.7057 1.75683 33.475 2.52504C34.2442 3.29325 34.7182 4.02508 35.1173 5.05008C35.419 5.82364 35.7753 6.98666 35.8727 9.12759C35.9786 11.444 36 12.1373 36 18.0005C36 23.8616 35.9786 24.5571 35.8727 26.8735C35.7753 29.0144 35.4169 30.1774 35.1173 30.951C34.7182 31.976 34.2432 32.7067 33.475 33.475C32.7067 34.2432 31.9749 34.7182 30.9499 35.1173C30.1764 35.419 29.0133 35.7753 26.8724 35.8727C24.5581 35.9786 23.8627 36 17.9995 36C12.1384 36 11.4429 35.9797 9.12866 35.8727Z"
                              fill="url(#paint0_radial_38_301)"
                            />
                            <path
                              d="M9.12866 35.8727C6.98773 35.7753 5.82471 35.419 5.05115 35.1173C4.02615 34.7182 3.29539 34.2432 2.52611 33.475C1.75683 32.7067 1.28071 31.976 0.883764 30.951C0.582043 30.1774 0.225756 29.0144 0.128392 26.8735C0.0213986 24.5592 0 23.8648 0 18.0016C0 12.1384 0.0235385 11.4451 0.127322 9.12866C0.224686 6.98773 0.583113 5.82685 0.882694 5.05115C1.28178 4.02615 1.7579 3.29539 2.52504 2.52504C3.29325 1.75683 4.02401 1.27964 5.05008 0.882694C5.82364 0.580973 6.98666 0.224686 9.12759 0.127322C11.4429 0.0213986 12.1384 0 17.9995 0C23.8627 0 24.556 0.0235385 26.8724 0.127322C29.0133 0.224686 30.1742 0.583113 30.9499 0.882694C31.9749 1.27964 32.7057 1.75683 33.475 2.52504C34.2442 3.29325 34.7182 4.02508 35.1173 5.05008C35.419 5.82364 35.7753 6.98666 35.8727 9.12759C35.9786 11.444 36 12.1373 36 18.0005C36 23.8616 35.9786 24.5571 35.8727 26.8735C35.7753 29.0144 35.4169 30.1774 35.1173 30.951C34.7182 31.976 34.2432 32.7067 33.475 33.475C32.7067 34.2432 31.9749 34.7182 30.9499 35.1173C30.1764 35.419 29.0133 35.7753 26.8724 35.8727C24.5581 35.9786 23.8627 36 17.9995 36C12.1384 36 11.4429 35.9797 9.12866 35.8727Z"
                              fill="url(#paint1_radial_38_301)"
                            />
                            <path
                              d="M13.5799 18.0767C13.5799 15.6147 15.5752 13.6183 18.0372 13.6183C20.4992 13.6183 22.4956 15.6147 22.4956 18.0767C22.4956 20.5387 20.4992 22.5351 18.0372 22.5351C15.5752 22.5351 13.5799 20.5387 13.5799 18.0767ZM11.1698 18.0767C11.1698 21.8696 14.2443 24.9441 18.0372 24.9441C21.8301 24.9441 24.9046 21.8696 24.9046 18.0767C24.9046 14.2838 21.8301 11.2093 18.0372 11.2093C14.2443 11.2093 11.1699 14.2836 11.1699 18.0767H11.1698ZM23.5717 10.937C23.5716 11.2544 23.6656 11.5647 23.8418 11.8287C24.0181 12.0927 24.2687 12.2985 24.5619 12.4201C24.8551 12.5417 25.1777 12.5736 25.4891 12.5118C25.8004 12.45 26.0865 12.2973 26.311 12.0729C26.5355 11.8485 26.6885 11.5626 26.7506 11.2513C26.8126 10.9401 26.7809 10.6174 26.6596 10.3241C26.5382 10.0307 26.3326 9.78002 26.0688 9.60356C25.8049 9.42711 25.4947 9.33286 25.1773 9.33274H25.1766C24.7511 9.33293 24.3432 9.502 24.0422 9.80279C23.7413 10.1036 23.5721 10.5115 23.5717 10.937ZM12.6341 28.963C11.3301 28.9036 10.6214 28.6864 10.1504 28.5029C9.52602 28.2598 9.0805 27.9703 8.61209 27.5025C8.14367 27.0347 7.85372 26.5897 7.6117 25.9652C7.4281 25.4945 7.21091 24.7855 7.15163 23.4816C7.0868 22.0719 7.07385 21.6484 7.07385 18.0769C7.07385 14.5054 7.08787 14.0831 7.15163 12.6722C7.21101 11.3683 7.42982 10.6607 7.6117 10.1886C7.85479 9.56416 8.14431 9.11864 8.61209 8.65023C9.07986 8.18182 9.52495 7.89187 10.1504 7.64985C10.6212 7.46625 11.3301 7.24906 12.6341 7.18978C14.0438 7.12495 14.4673 7.112 18.0372 7.112C21.6071 7.112 22.031 7.1258 23.4419 7.19C24.7459 7.24938 25.4534 7.46818 25.9256 7.65007C26.55 7.89208 26.9955 8.18267 27.4639 8.65044C27.9323 9.11822 28.2212 9.56437 28.4643 10.1888C28.6479 10.6595 28.8651 11.3685 28.9244 12.6724C28.9892 14.0833 29.0022 14.5056 29.0022 18.0771C29.0022 21.6486 28.9892 22.0709 28.9244 23.4818C28.865 24.7858 28.6467 25.4945 28.4643 25.9655C28.2212 26.5899 27.9317 27.0354 27.4639 27.5027C26.9961 27.9701 26.55 28.26 25.9256 28.5031C25.4548 28.6867 24.7459 28.9039 23.4419 28.9632C22.0322 29.028 21.6087 29.041 18.0372 29.041C14.4657 29.041 14.0434 29.028 12.6341 28.9632V28.963ZM12.5233 4.78363C11.0996 4.84847 10.1267 5.07422 9.27705 5.40483C8.39767 5.74624 7.65225 6.20428 6.9079 6.94745C6.16355 7.69062 5.70669 8.43614 5.36528 9.31658C5.03467 10.1667 4.80892 11.1391 4.74408 12.5628C4.67817 13.9888 4.66309 14.4447 4.66309 18.0767C4.66309 21.7087 4.67817 22.1646 4.74408 23.5906C4.80892 25.0144 5.03467 25.9866 5.36528 26.8368C5.70669 27.7162 6.16366 28.4631 6.9079 29.2059C7.65215 29.9488 8.3966 30.4062 9.27705 30.7486C10.1283 31.0792 11.0996 31.3049 12.5233 31.3698C13.9501 31.4346 14.4052 31.4508 18.0372 31.4508C21.6692 31.4508 22.1251 31.4357 23.5511 31.3698C24.9749 31.3049 25.9472 31.0792 26.7973 30.7486C27.6767 30.4062 28.4221 29.9491 29.1665 29.2059C29.9108 28.4628 30.3667 27.7162 30.7091 26.8368C31.0397 25.9866 31.2666 25.0143 31.3303 23.5906C31.3952 22.1635 31.4102 21.7087 31.4102 18.0767C31.4102 14.4447 31.3952 13.9888 31.3303 12.5628C31.2655 11.139 31.0397 10.1662 30.7091 9.31658C30.3667 8.43721 29.9097 7.69179 29.1665 6.94745C28.4233 6.2031 27.6767 5.74624 26.7984 5.40483C25.9472 5.07422 24.9748 4.8474 23.5521 4.78363C22.1259 4.71847 21.6703 4.70264 18.0388 4.70264C14.4074 4.70264 13.9506 4.71772 12.5239 4.78363"
                              fill="white"
                            />
                            <defs>
                              <radialGradient
                                id="paint0_radial_38_301"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(2.32988 35.2114) scale(45.7066)"
                              >
                                <stop offset="0.09" stopColor="#FA8F21" />
                                <stop offset="0.78" stopColor="#D82D7E" />
                              </radialGradient>
                              <radialGradient
                                id="paint1_radial_38_301"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(24.9359 34.0554) scale(40.2223)"
                              >
                                <stop
                                  offset="0.64"
                                  stopColor="#8C3AAA"
                                  stopOpacity="0"
                                />
                                <stop offset="1" stopColor="#8C3AAA" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </a>

                        {/* Discord */}
                        <a
                          href="https://blocksurvey.io/discord"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="48px"
                            height="48px"
                          >
                            <path
                              fill="#536dfe"
                              d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
                            />
                          </svg>
                        </a>

                        {/* Owl link */}
                        <a
                          href="https://owl.link/owllink.btc"
                          target="_blank"
                          rel="noreferrer"
                        >
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
                        </a>
                      </div>
                    </div>
                  </section>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: []
  };

  // Add FAQs dynamically
  Constants.FAQ.forEach(eachFaq => {
    faqSchema.mainEntity.push({
      '@type': 'Question',
      name: eachFaq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: convert(eachFaq.answer)
      }
    });
  });

  return {
    props: {
      faqSchema: faqSchema
    } // will be passed to the page component as props
  };
}
