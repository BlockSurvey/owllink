import { signOut } from '../../services/auth';

export default function GetBtcDomain() {
  // View
  return (
    <div className="get_btc_domain_blur_bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="get_btc_domain_popup_flex_box">
              <div className="get_btc_domain_content_box">
                {/* Logo */}
                <svg
                  width="38"
                  height="52"
                  viewBox="0 0 38 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.7858 51.4434H28.5854C12.798 51.4434 0 38.6455 0 22.858V16.5762C0 7.42157 7.42157 0 16.5762 0H21.4233C30.578 0 37.9995 7.42157 37.9995 16.5762V23.4771C37.9995 23.9086 37.8349 24.323 37.54 24.6385L37.4808 24.7019C37.2865 24.9099 37.103 25.1063 37.061 25.125C36.1008 25.5111 35.7466 25.7468 34.9963 26.2459C34.9247 26.2935 34.8496 26.3435 34.77 26.3962C30.3173 29.3571 27.568 34.3471 27.568 39.8629C27.568 42.8581 28.4025 45.7332 29.8943 48.2139C30.4894 49.2022 31.1896 50.1265 31.9841 50.9696C32.1539 51.1496 32.0327 51.4434 31.7858 51.4434ZM10.6431 8.84827C7.37356 9.07691 4.66992 11.8206 4.49273 15.0958C4.29838 18.7483 7.10491 21.8863 10.7517 22.0864C10.8088 22.0921 10.866 22.0978 10.9174 22.1092H14.8271C16.0275 22.1092 17.1535 22.578 18.0052 23.4239L18.9998 24.4185L19.9943 23.4239C20.846 22.578 21.9721 22.1092 23.1724 22.1092H27.4937C27.5851 22.0749 27.6766 22.0521 27.7737 22.0407C31.2433 21.5719 33.7583 18.4568 33.4954 14.9529C33.2496 11.7005 30.6088 9.07691 27.3565 8.84827C23.7897 8.59677 20.6745 11.1804 20.2859 14.73C20.2115 15.3873 19.6571 15.8789 18.9998 15.8789C18.3424 15.8789 17.788 15.3873 17.7137 14.73C17.325 11.1861 14.2155 8.6082 10.6431 8.84827ZM34.7722 30.5082C35.6433 29.6749 36.6362 28.9552 37.7359 28.3813C37.8548 28.319 38 28.4082 38 28.542V51.444H37.7874C37.6885 51.3486 37.581 51.26 37.4553 51.1902C36.0612 50.4146 34.8522 49.3989 33.8554 48.2168C31.9137 45.9138 30.7934 42.969 30.7934 39.863C30.7934 36.2408 32.2726 32.8998 34.7722 30.5082ZM11.2472 18.2081C12.7594 18.2081 13.9852 16.9823 13.9852 15.4702C13.9852 13.9581 12.7594 12.7322 11.2472 12.7322C9.73513 12.7322 8.50932 13.9581 8.50932 15.4702C8.50932 16.9823 9.73513 18.2081 11.2472 18.2081ZM29.4895 15.4702C29.4895 16.9823 28.2637 18.2081 26.7516 18.2081C25.2395 18.2081 24.0136 16.9823 24.0136 15.4702C24.0136 13.9581 25.2395 12.7322 26.7516 12.7322C28.2637 12.7322 29.4895 13.9581 29.4895 15.4702Z"
                    fill="url(#paint0_linear_57_422)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_57_422"
                      x1="26.7515"
                      y1="12.7323"
                      x2="26.7515"
                      y2="18.2081"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF793F" />
                      <stop offset="1" stopColor="#FE6844" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Oops message */}
                <h1 className="get_btc_domain_content_title">
                  Oops! You don&apos;t have a{' '}
                  <br className="d-none d-md-block"></br>.btc domain yet
                </h1>

                {/* Description */}
                <p className="get_btc_domain_content_description">
                  .btc domain is needed to create a profile in owl.link
                </p>

                {/* Button */}
                <a
                  href="https://btc.us/"
                  target={'_blank'}
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button
                    className="owl_link_dashboard_filled_button w-100"
                    style={{ marginTop: '20%', padding: '12px 24px' }}
                  >
                    <span style={{ marginRight: '5px' }}>
                      Get your .btc domain now
                    </span>
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
                  </button>
                </a>

                {/* Stripe payment */}
                {/* <div
                  style={{
                    fontSize: "14px",
                    marginTop: "20px",
                    color: "#ff793f",
                  }}
                >
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

                {/* Note */}
                <div style={{ fontSize: '12px', marginTop: '20px' }}>
                  Have a question? contact us through chat.
                </div>

                {/* Switch account */}
                <div style={{ fontSize: '14px', marginTop: '20px' }}>
                  <a
                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Switch account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
