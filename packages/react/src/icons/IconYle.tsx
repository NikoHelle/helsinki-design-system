import React from 'react';
import styles from '../../templates/Icon.module.css';

interface IconProps {
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaHidden?: boolean;
  className?: string,
  color?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  style?: React.CSSProperties;
}

export const IconYle = ({
  ariaLabel = 'yle',
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
    <path fillRule="evenodd" clipRule="evenodd" d="M19.0714 3H4.92857C3.86384 3 3 3.86384 3 4.92857V19.0714C3 20.1362 3.86384 21 4.92857 21H19.0714C20.1362 21 21 20.1362 21 19.0714V4.92857C21 3.86384 20.1362 3 19.0714 3ZM5.78124 9.20665H5.43353L5.34502 9.21206C5.12161 9.24077 5 9.38314 5 9.62035C5 9.75978 5.03211 9.95706 5.10093 10.2363L5.13842 10.3828L6.12414 13.8987L6.16491 14.0351C6.33956 14.5578 6.65484 14.8062 7.18905 14.8414L7.32721 14.8457H7.72257L7.61702 15.3684C7.58804 15.501 7.55906 15.6221 7.53592 15.6944C7.35489 16.2562 7.07459 16.375 6.59262 16.375C6.30817 16.375 6.09373 16.3593 5.9248 16.3421L5.74236 16.3215C5.62777 16.3086 5.53642 16.2979 5.45262 16.2979C5.25419 16.2979 5.13022 16.4025 5.10233 16.5885L5.09632 16.6731V16.9049L5.10244 16.996C5.12574 17.1575 5.21251 17.2321 5.31048 17.2818L5.37019 17.3092C5.60479 17.4159 5.89949 17.4736 6.78594 17.4736C7.67442 17.4736 8.33369 16.9976 8.54931 16.1984L8.82744 15.1182L10.0344 10.1512C10.0696 9.99584 10.1177 9.7579 10.1177 9.62035C10.1177 9.40055 9.9929 9.24866 9.79347 9.21413L9.70358 9.20665H9.37522L9.29452 9.21104C9.09116 9.23479 8.98002 9.35801 8.89695 9.65212L8.86699 9.77057L7.93895 13.8049H7.73232L7.65124 13.8027C7.42369 13.7892 7.30554 13.7075 7.21143 13.4073L7.17709 13.2842L6.21547 9.64024C6.15786 9.433 6.08467 9.2516 5.86903 9.21385L5.78124 9.20665ZM16.6599 9.05168C14.9176 9.05168 14.1397 10.002 14.1397 12.1325C14.1397 14.2087 14.8651 14.9807 16.8147 14.9807C17.6846 14.9807 18.2564 14.8616 18.479 14.7601C18.6015 14.7076 18.7206 14.6403 18.7485 14.4457L18.7546 14.3542V14.1419L18.7486 14.0572C18.7208 13.8709 18.5971 13.7661 18.3988 13.7661C18.3461 13.7661 18.2923 13.7733 18.2321 13.784L17.8948 13.8458C17.7022 13.8752 17.4374 13.9015 17.0462 13.9015C15.6425 13.9015 15.4175 13.6588 15.3645 12.5706L15.3587 12.4302H18.1216L18.2574 12.4258C18.8167 12.388 19 12.1093 19 11.705L18.9961 11.4746C18.9573 10.3802 18.6017 9.05168 16.6599 9.05168ZM12.1383 6.25H11.3075C11.1714 6.25 10.8292 6.25 10.7681 6.54637L10.7587 6.64447V7.01233L10.7605 7.05288C10.7732 7.19396 10.8594 7.38697 11.2269 7.4209L11.3458 7.42609H11.5503V14.3349L11.5523 14.4315C11.5652 14.7083 11.6436 14.8692 11.9219 14.8986L12.0223 14.9036H12.2932L12.3884 14.898C12.6495 14.8655 12.7289 14.6917 12.7434 14.435L12.7459 14.3349L12.7451 7.05037C12.7367 6.63213 12.6594 6.25 12.1383 6.25ZM16.6808 9.97473C17.4842 9.97441 17.8334 10.4219 17.8921 11.2874L17.8998 11.4546L15.3808 11.4567L15.3913 11.2797C15.4676 10.3683 15.8653 9.97512 16.6808 9.97473Z" fill="currentColor"></path>
  </svg>
);
