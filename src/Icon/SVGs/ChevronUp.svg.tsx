// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', height, width }: IconSVGProps) => (
  <svg width={width ? `${width}px` : '16px'} height={height ? `${height}px` : '8px'} viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <path
        d="M15.70625,7.689 L15.67525,7.718 C15.28425,8.094 14.64425,8.094 14.25225,7.718 L7.99925,2.388 L1.74725,7.718 C1.35525,8.094 0.71525,8.094 0.32425,7.718 L0.29325,7.689 C-0.09775,7.314 -0.09775,6.7 0.29325,6.324 L7.28825,0.282 C7.68025,-0.094 8.32025,-0.094 8.71125,0.282 L15.70625,6.324 C16.09825,6.7 16.09825,7.314 15.70625,7.689"
        id="path-1"
      />
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <mask id="mask-2" fill="white">
        <use xlinkHref="#path-1" />
      </mask>
      <use id="Icons-/-Chevrons-/-Up" fill={color} xlinkHref="#path-1" />
    </g>
  </svg>
);
