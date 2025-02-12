import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconSwapUser = ({
  'aria-label': ariaLabel = 'swap-user',
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
      d="M6 5C6.55228 5 7 4.55228 7 4C7 3.44772 6.55228 3 6 3C5.44772 3 5 3.44772 5 4C5 4.55228 5.44772 5 6 5ZM6 7C7.65685 7 9 5.65685 9 4C9 2.34315 7.65685 1 6 1C4.34315 1 3 2.34315 3 4C3 5.65685 4.34315 7 6 7ZM18 14C18.5523 14 19 13.5523 19 13C19 12.4477 18.5523 12 18 12C17.4477 12 17 12.4477 17 13C17 13.5523 17.4477 14 18 14ZM18 16C19.6569 16 21 14.6569 21 13C21 11.3431 19.6569 10 18 10C16.3431 10 15 11.3431 15 13C15 14.6569 16.3431 16 18 16ZM4 10C3.44772 10 3 10.4477 3 11V12H9V11C9 10.4477 8.55228 10 8 10H4ZM1 11C1 9.34315 2.34315 8 4 8H8C9.65685 8 11 9.34315 11 11V14H1V11ZM16 19C15.4477 19 15 19.4477 15 20V21H21V20C21 19.4477 20.5523 19 20 19H16ZM13 20C13 18.3431 14.3431 17 16 17H20C21.6569 17 23 18.3431 23 20V23H13V20ZM16 3H12.9998V1H16C17.6569 1 19 2.34315 19 4V5.08578L20.2929 3.79289L21.7071 5.20711L18 8.91421L14.2929 5.20711L15.7071 3.79289L17 5.08579V4C17 3.44772 16.5523 3 16 3ZM6 15.0858L9.70711 18.7929L8.29289 20.2071L6.99999 18.9142V20C6.99999 20.5523 7.44771 21 7.99999 21H11V23H7.99999C6.34313 23 4.99999 21.6569 4.99999 20V18.9142L3.70711 20.2071L2.29289 18.7929L6 15.0858Z"
      fill="currentColor"
    />
  </svg>
);
