import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconPlaybackFastforward = ({
  'aria-label': ariaLabel = 'playback-fastforward',
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
    <path fillRule="evenodd" clipRule="evenodd" d="M5 5L13 12L5 19V5ZM13 5L21 12L13 19V5Z" fill="currentColor" />
  </svg>
);
