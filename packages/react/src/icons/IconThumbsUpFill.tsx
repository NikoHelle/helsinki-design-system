import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconThumbsUpFill = ({
  'aria-label': ariaLabel = 'thumbs-up-fill',
  'aria-hidden': ariaHidden = true,
  className = '',
  color,
  size = IconSize.Small,
  style = {},
  ...rest
}: IconProps) => (
  <svg
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    className={[styles.icon, styles[size], className].filter((e) => e).join(' ')}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    color={color}
    style={style}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9H7C7.55228 9 8 9.44772 8 10V17C8 17.5523 7.55228 18 7 18H3V9ZM13.4297 4C14.9249 4 15.818 5.24934 15.818 6.45654C15.818 6.86889 15.6687 7.54395 15.3975 8.33359L15.3125 8.57378H18.7167C19.9753 8.57378 20.9998 9.64632 20.9998 10.9639C20.9998 11.7925 20.5873 12.5032 19.9608 12.9614C20.0029 13.1435 20.0247 13.3303 20.0247 13.52C20.0247 14.3307 19.6348 15.0604 19.0266 15.4944C19.041 15.6021 19.0484 15.7114 19.0484 15.8202C19.0484 16.6173 18.6714 17.3417 18.0656 17.7785C17.986 18.9643 17.0771 19.9141 15.9442 19.9945L15.7884 20H13.9976C12.8581 20 11.7302 19.6335 10.7904 18.9654L10.577 18.8058L9.32688 17.8229C9.14326 17.6787 9.03408 17.471 9.00663 17.2507L9 17.1799V9.48721L9.00275 9.486L9 9.42774C9 9.15545 9.07749 8.99976 9.21288 8.85245L9.3115 8.75429L9.62473 8.473C9.67221 8.42861 9.72181 8.38048 9.7733 8.32741L9.93326 8.15225C10.2361 7.79963 10.5899 7.26194 10.9589 6.34158L11.1938 5.73237L11.2958 5.49052C11.6373 4.72615 12.1718 4 13.4297 4Z"
      fill="currentColor"
    />
  </svg>
);
