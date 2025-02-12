import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconThumbsDownFill = ({
  'aria-label': ariaLabel = 'thumbs-down-fill',
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
      d="M20.9998 15H16.9998C16.4475 15 15.9998 14.5523 15.9998 14V7C15.9998 6.44772 16.4475 6 16.9998 6H20.9998V15ZM10.5701 20C9.07487 20 8.18171 18.7507 8.18171 17.5435C8.18171 17.1311 8.33103 16.456 8.60226 15.6664L8.68726 15.4262H5.28302C4.02441 15.4262 3.00001 14.3537 3.00001 13.0361C3.00001 12.2075 3.4125 11.4968 4.03893 11.0386C3.99684 10.8565 3.97501 10.6697 3.97501 10.48C3.97501 9.66926 4.365 8.93958 4.97316 8.50563C4.95878 8.39795 4.95133 8.28862 4.95133 8.17983C4.95133 7.38265 5.32836 6.65833 5.93414 6.22153C6.01371 5.03573 6.92262 4.08586 8.05554 4.00551L8.21136 4H10.0021C11.1417 4 12.2695 4.36647 13.2093 5.03464L13.4228 5.19416L14.6729 6.17706C14.8565 6.32125 14.9657 6.52902 14.9931 6.74934L14.9998 6.82011V14.5128L14.997 14.514L14.9998 14.5723C14.9998 14.8445 14.9223 15.0002 14.7869 15.1475L14.6883 15.2457L14.375 15.527C14.3275 15.5714 14.2779 15.6195 14.2265 15.6726L14.0665 15.8478C13.7636 16.2004 13.4099 16.7381 13.0409 17.6584L12.806 18.2676L12.7039 18.5095C12.3624 19.2738 11.828 20 10.5701 20Z"
      fill="currentColor"
    />
  </svg>
);
