import React from 'react';

import styles from './Icon.module.css';

interface IconProps {
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaHidden?: boolean;
  className?: string;
  color?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  style?: React.CSSProperties;
}

export const IconScrollCogwheel = ({
  ariaLabel = 'scroll-cogwheel',
  ariaLabelledby,
  ariaHidden = true,
  className = '',
  color,
  size = 's',
  style = {},
}: React.SVGProps<SVGSVGElement> & IconProps) => (
  <svg
    className={[styles.icon, styles[size], className].filter((e) => e).join(' ')}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
    aria-hidden={ariaHidden}
    color={color}
    style={style}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 17C2 19.2091 3.79086 21 6 21H10V19H6C4.89543 19 4 18.1046 4 17C4 15.8954 4.89543 15 6 15C6.55228 15 7.05228 15.2239 7.41421 15.5858L10 13V7H20V9H22V5H10C10 2.79086 8.20914 1 6 1C3.79086 1 2 2.79086 2 5V17ZM6 3C7.10457 3 8 3.89543 8 5V13.5351C7.41165 13.1948 6.72857 13 6 13C5.27143 13 4.58835 13.1948 4 13.5351V5C4 3.89543 4.89543 3 6 3Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0279 10.6583C16.3788 9.78057 17.6212 9.78057 17.9721 10.6583C18.2148 11.2656 18.9488 11.5041 19.5022 11.1555C20.302 10.6516 21.3071 11.3819 21.0751 12.2982C20.9145 12.9322 21.3681 13.5566 22.0207 13.5998C22.9639 13.6623 23.3479 14.8439 22.6215 15.4488C22.1189 15.8674 22.1189 16.6391 22.6215 17.0577C23.3479 17.6626 22.9639 18.8443 22.0207 18.9067C21.3681 18.9499 20.9145 19.5743 21.0751 20.2083C21.3071 21.1246 20.302 21.8549 19.5022 21.351C18.9488 21.0024 18.2148 21.2409 17.9721 21.8482C17.6212 22.7259 16.3788 22.7259 16.0279 21.8482C15.7852 21.2409 15.0512 21.0024 14.4978 21.351C13.698 21.8549 12.6929 21.1246 12.9249 20.2083C13.0855 19.5743 12.6319 18.9499 11.9793 18.9067C11.0361 18.8443 10.6521 17.6626 11.3785 17.0577C11.8811 16.6391 11.8811 15.8674 11.3785 15.4488C10.6521 14.8439 11.0361 13.6623 11.9793 13.5998C12.6319 13.5566 13.0855 12.9322 12.9249 12.2982C12.6929 11.3819 13.698 10.6516 14.4978 11.1555C15.0512 11.5041 15.7852 11.2656 16.0279 10.6583ZM18.973 16.2264C18.973 17.3309 18.0776 18.2264 16.973 18.2264C15.8685 18.2264 14.973 17.3309 14.973 16.2264C14.973 15.1218 15.8685 14.2264 16.973 14.2264C18.0776 14.2264 18.973 15.1218 18.973 16.2264Z"
      fill="currentColor"
    ></path>
  </svg>
);
