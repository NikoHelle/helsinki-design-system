import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconSitemap = ({
  'aria-label': ariaLabel = 'sitemap',
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
      d="M15 3V9H13V11H20V15H22V21H16V15H18V13H13V15H15V21H9V15H11V13H6V15H8V21H2V15H4V11H11V9H9V3H15ZM6 17H4V19H6V17ZM13 17H11V19H13V17ZM20 17H18V19H20V17Z"
      fill="currentColor"
    />
  </svg>
);
