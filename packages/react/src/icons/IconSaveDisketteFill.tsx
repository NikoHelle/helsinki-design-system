import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconSaveDisketteFill = ({
  'aria-label': ariaLabel = 'save-diskette-fill',
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
      d="M19 2L22 5V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2H19ZM19 12H5V20H19V12ZM17 3H7V10H17V3ZM15 5V8H13V5H15Z"
      fill="currentColor"
    />
  </svg>
);
