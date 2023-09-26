import React from 'react';

import { theme } from 'antd';
import { IconProps, IconTypes } from './icon.type';

export function GetSvgIcon(props: IconProps) {
  const {
    color,
    width,
    style,
    height,
    className,
    size = 16,
    name,
    type = 'default'
  } = props;

  const {
    token: { colorPrimary }
  } = theme.useToken();
  const getColor = (type: IconTypes = 'default') => {
    switch (type) {
      case 'primary':
        return color || colorPrimary;

      default:
        return color;
    }
  };

  switch (name) {
    case 'owlImg':
      return (
        <svg
          height={height || size}
          width={width || size}
          style={style}
          className={className}
          //   fill={getColor(type)}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="72" height="72" rx="14" fill="#3F4372" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.094 56.6132H43.5674C31.1037 56.6132 21 46.5096 21 34.0458V29.0865C21 21.8591 26.8591 16 34.0865 16H37.9132C45.1405 16 50.9996 21.8591 50.9996 29.0865V34.5345C50.9996 34.8752 50.8697 35.2024 50.6368 35.4515L50.5901 35.5015C50.4367 35.6657 50.2919 35.8208 50.2587 35.8355C49.5006 36.1404 49.221 36.3264 48.6286 36.7205L48.45 36.8391C44.9347 39.1766 42.7642 43.1161 42.7642 47.4707C42.7642 49.8353 43.423 52.1052 44.6008 54.0636C45.0706 54.8439 45.6234 55.5735 46.2506 56.2391C46.3846 56.3813 46.289 56.6132 46.094 56.6132ZM29.4024 22.9855C26.8212 23.166 24.6868 25.332 24.5469 27.9177C24.3935 30.8013 26.6091 33.2787 29.4882 33.4366C29.5333 33.4411 29.5784 33.4456 29.619 33.4547H32.7056C33.6533 33.4547 34.5423 33.8247 35.2146 34.4926L35.9998 35.2778L36.785 34.4926C37.4574 33.8247 38.3464 33.4547 39.294 33.4547H42.7055C42.7777 33.4276 42.8499 33.4095 42.9266 33.4005C45.6658 33.0305 47.6513 30.5711 47.4437 27.8049C47.2497 25.2373 45.1649 23.166 42.5972 22.9855C39.7814 22.7869 37.322 24.8266 37.0152 27.6289C36.9565 28.1479 36.5188 28.536 35.9998 28.536C35.4809 28.536 35.0432 28.1479 34.9845 27.6289C34.6776 24.8311 32.2228 22.7959 29.4024 22.9855ZM48.4517 40.0855C49.1395 39.4275 49.9233 38.8594 50.7915 38.4063C50.8854 38.3571 51 38.4275 51 38.5331V56.6137H50.8321C50.7541 56.5383 50.6692 56.4684 50.57 56.4133C49.4693 55.801 48.5149 54.9991 47.7279 54.0659C46.195 52.2478 45.3105 49.9229 45.3105 47.4708C45.3105 44.6111 46.4784 41.9735 48.4517 40.0855ZM29.8794 30.3748C31.0732 30.3748 32.0409 29.4071 32.0409 28.2133C32.0409 27.0195 31.0732 26.0518 29.8794 26.0518C28.6856 26.0518 27.7179 27.0195 27.7179 28.2133C27.7179 29.4071 28.6856 30.3748 29.8794 30.3748ZM44.2812 28.2133C44.2812 29.4071 43.3134 30.3748 42.1197 30.3748C40.9259 30.3748 39.9581 29.4071 39.9581 28.2133C39.9581 27.0195 40.9259 26.0518 42.1197 26.0518C43.3134 26.0518 44.2812 27.0195 44.2812 28.2133Z"
            fill="url(#paint0_linear_225_161)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_225_161"
              x1="42.1196"
              y1="26.0518"
              x2="42.1196"
              y2="30.3748"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF793F" />
              <stop offset="1" stopColor="#FE6844" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'owlIcon':
      return (
        <svg
          height={height || size}
          width={width || size}
          style={style}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34 47"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.4399 46.0283H25.5764C11.4508 46.0283 0 34.5775 0 20.4519V14.8314C0 6.64035 6.64035 0 14.8313 0H19.1682C27.3592 0 33.9996 6.64035 33.9996 14.8314V21.0058C33.9996 21.3919 33.8523 21.7627 33.5884 22.045L33.5355 22.1016C33.3616 22.2877 33.1975 22.4635 33.1598 22.4802C32.3007 22.8258 31.9838 23.0366 31.3124 23.4832C31.2484 23.5258 31.1812 23.5705 31.11 23.6177C27.126 26.2668 24.6661 30.7316 24.6661 35.6668C24.6661 38.3467 25.4127 40.9192 26.7476 43.1388C27.28 44.023 27.9065 44.85 28.6173 45.6044C28.7692 45.7655 28.6608 46.0283 28.4399 46.0283ZM9.52275 7.91687C6.59739 8.12144 4.17835 10.5763 4.01981 13.5068C3.84592 16.7748 6.35702 19.5825 9.61992 19.7615C9.67106 19.7666 9.72221 19.7717 9.76823 19.782H13.2664C14.3404 19.782 15.3479 20.2013 16.1099 20.9582L16.9998 21.8481L17.8897 20.9582C18.6517 20.2013 19.6592 19.782 20.7332 19.782H24.5996C24.6814 19.7513 24.7632 19.7308 24.8502 19.7206C27.9545 19.3012 30.2048 16.5139 29.9696 13.3789C29.7496 10.4689 27.3869 8.12144 24.4768 7.91687C21.2855 7.69185 18.4983 10.0035 18.1505 13.1794C18.084 13.7676 17.5879 14.2074 16.9998 14.2074C16.4117 14.2074 15.9156 13.7676 15.8491 13.1794C15.5013 10.0086 12.7192 7.70208 9.52275 7.91687ZM31.112 27.2969C31.8914 26.5512 32.7797 25.9073 33.7637 25.3938C33.8701 25.3381 34 25.4179 34 25.5375V46.0289H33.8098C33.7213 45.9434 33.6251 45.8642 33.5126 45.8018C32.2652 45.1078 31.1836 44.199 30.2917 43.1413C28.5543 41.0808 27.5519 38.4459 27.5519 35.6668C27.5519 32.4259 28.8755 29.4367 31.112 27.2969ZM10.0633 16.2915C11.4163 16.2915 12.5131 15.1947 12.5131 13.8417C12.5131 12.4888 11.4163 11.392 10.0633 11.392C8.71038 11.392 7.6136 12.4888 7.6136 13.8417C7.6136 15.1947 8.71038 16.2915 10.0633 16.2915ZM26.3853 13.8417C26.3853 15.1947 25.2886 16.2915 23.9356 16.2915C22.5827 16.2915 21.4859 15.1947 21.4859 13.8417C21.4859 12.4888 22.5827 11.392 23.9356 11.392C25.2886 11.392 26.3853 12.4888 26.3853 13.8417Z"
            fill="url(#paint0_linear_47_132)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_47_132"
              x1="23.9355"
              y1="11.392"
              x2="23.9355"
              y2="16.2915"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF793F" />
              <stop offset="1" stopColor="#FE6844" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'link':
      return (
        <svg
          height={height || size}
          width={width || size}
          style={style}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5044 0.743397C3.5044 0.33283 3.83723 -6.71395e-08 4.2478 0L11.2566 6.60206e-07C11.6672 6.60206e-07 12 0.33283 12 0.743397L12 7.7522C12 8.16277 11.6672 8.4956 11.2566 8.4956C10.846 8.4956 10.5132 8.16277 10.5132 7.7522V2.53811L1.26906 11.7823C0.978742 12.0726 0.50805 12.0726 0.217736 11.7823C-0.0725787 11.4919 -0.0725784 11.0213 0.217736 10.7309L9.46189 1.48679L4.2478 1.48679C3.83723 1.48679 3.5044 1.15396 3.5044 0.743397Z"
            fill="black"
          ></path>
        </svg>
      );

    case 'verified':
      return (
        <svg
          height={height || size}
          width={width || size}
          style={style}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.7508 10.4167C18.7508 9.1 18.0217 7.95833 16.9608 7.41667C17.0892 7.05417 17.1592 6.6625 17.1592 6.25C17.1592 4.40833 15.7342 2.91833 13.9775 2.91833C13.5858 2.91833 13.2108 2.98833 12.8642 3.12667C12.3492 2.0125 11.2592 1.25 10.0008 1.25C8.7425 1.25 7.65417 2.01417 7.13667 3.125C6.79083 2.9875 6.415 2.91667 6.02333 2.91667C4.265 2.91667 2.84167 4.40833 2.84167 6.25C2.84167 6.66167 2.91083 7.05333 3.03917 7.41667C1.97917 7.95833 1.25 9.09833 1.25 10.4167C1.25 11.6625 1.90167 12.7483 2.86833 13.3217C2.85167 13.4633 2.84167 13.605 2.84167 13.75C2.84167 15.5917 4.265 17.0833 6.02333 17.0833C6.415 17.0833 6.79 17.0117 7.13583 16.875C7.6525 17.9867 8.74083 18.75 10 18.75C11.26 18.75 12.3483 17.9867 12.8642 16.875C13.21 17.0108 13.585 17.0817 13.9775 17.0817C15.7358 17.0817 17.1592 15.59 17.1592 13.7483C17.1592 13.6033 17.1492 13.4617 17.1317 13.3208C18.0967 12.7483 18.7508 11.6625 18.7508 10.4175V10.4167ZM13.2375 7.63833L9.62583 13.055C9.505 13.2358 9.3075 13.3333 9.105 13.3333C8.98583 13.3333 8.865 13.3 8.75833 13.2283L8.6625 13.15L6.65 11.1375C6.40583 10.8933 6.40583 10.4975 6.65 10.2542C6.89417 10.0108 7.29 10.0092 7.53333 10.2542L9.00833 11.7267L12.1958 6.94333C12.3875 6.65583 12.7758 6.58 13.0625 6.77083C13.3508 6.9625 13.4292 7.35083 13.2375 7.6375V7.63833Z"
            fill="#FF793F"
          ></path>
        </svg>
      );

    default:
      return <>Not a valid svg Icon</>;
  }
}
