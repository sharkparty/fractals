// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color, height, width }: IconSVGProps) => (
  <svg
    height={height ? `${height}px` : '8px'}
    width={width ? `${width}px` : '16px'}
    viewBox="0 0 16 8"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        d="M15.706,11.689 L15.675,11.718 C15.284,12.094 14.644,12.094 14.252,11.718 L7.999,6.388 L1.747,11.718 C1.355,12.094 0.715,12.094 0.324,11.718 L0.293,11.689 C-0.098,11.314 -0.098,10.7 0.293,10.324 L7.288,4.282 C7.68,3.906 8.32,3.906 8.711,4.282 L15.706,10.324 C16.098,10.7 16.098,11.314 15.706,11.689"
        id="path-1"
      />
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group" transform="translate(0.000000, -4.000000)">
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1" />
        </mask>
        <use id="Icons-/-Chevrons-/-Up" fill={color ? color : '#222'} transform="translate(7.999875, 8.000000) rotate(180.000000) translate(-7.999875, -8.000000) " xlinkHref="#path-1" />
      </g>
    </g>
  </svg>
);
