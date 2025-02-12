import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconCustomerBotNegative = ({
  'aria-label': ariaLabel = 'customer-bot-negative',
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
      d="M18 5H6C3.79086 5 2 6.79086 2 9V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V9C22 6.79086 20.2091 5 18 5ZM18 7C19.1046 7 20 7.89543 20 9V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V9C4 7.89543 4.89543 7 6 7H18ZM11.9999 13C10.4069 13 9.10378 13.8781 9.0059 14.9871L9.003 15.028L9 17H15L14.9971 15.028C14.9281 13.8997 13.6126 13 11.9999 13ZM8.50004 9C7.39544 9 6.5 9.89539 6.5 11C6.5 12.1045 7.39544 13 8.50004 13C9.60456 13 10.5 12.1045 10.5 11C10.5 9.89539 9.60456 9 8.50004 9ZM15.5 9C14.3954 9 13.5 9.89539 13.5 11C13.5 12.1045 14.3954 13 15.5 13C16.6046 13 17.5 12.1045 17.5 11C17.5 9.89539 16.6046 9 15.5 9ZM12 1C12.8284 1 13.5 1.67154 13.5 2.5C13.5 2.94372 13.3073 3.34245 13.0011 3.61709L13 5H11L10.9999 3.61796C10.6931 3.3433 10.5 2.94419 10.5 2.5C10.5 1.67154 11.1716 1 12 1Z"
      fill="currentColor"
    />
  </svg>
);
