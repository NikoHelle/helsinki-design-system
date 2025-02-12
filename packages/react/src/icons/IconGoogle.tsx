import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconGoogle = ({
  'aria-label': ariaLabel = 'google',
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
      d="M19.0714 3C20.0855 3 20.9173 3.78353 20.9942 4.7779L21 4.92857V19.0714C21 20.0855 20.2165 20.9173 19.2221 20.9942L19.0714 21H4.92857C3.91454 21 3.08273 20.2165 3.0058 19.2221L3 19.0714V4.92857C3 3.91454 3.78353 3.08273 4.7779 3.0058L4.92857 3H19.0714ZM11.9677 5C8.09516 5 4.96774 8.12742 4.96774 12C4.96774 15.8726 8.09516 19 11.9677 19C16.0069 19 18.7419 16.1577 18.7419 12.1637C18.7419 11.7911 18.713 11.4962 18.6682 11.2096L18.6319 10.9952H11.9677V13.4028H15.9419C15.7782 14.4331 14.7395 16.4202 11.9677 16.4202C9.57984 16.4202 7.62944 14.4415 7.62944 12C7.62944 8.13558 12.1001 6.32407 14.6209 8.5389L14.7565 8.66371L16.6617 6.83185C15.4395 5.69153 13.8532 5 11.9677 5Z"
      fill="currentColor"
    />
  </svg>
);
