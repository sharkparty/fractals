// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', width, height }: IconSVGProps) => (
  <svg width={width ? `${width}px` : '22px'} height={height ? `${height}px` : '21px'} viewBox="0 0 22 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M16,20.5833333 C16.6903559,20.5833333 17.25,20.0236893 17.25,19.3333333 C17.25,18.6429774 16.6903559,18.0833333 16,18.0833333 C15.3096441,18.0833333 14.75,18.6429774 14.75,19.3333333 C14.75,20.0236893 15.3096441,20.5833333 16,20.5833333 Z M16,20.3055556 C15.4630565,20.3055556 15.0277778,19.8702768 15.0277778,19.3333333 C15.0277778,18.7963898 15.4630565,18.3611111 16,18.3611111 C16.5369435,18.3611111 16.9722222,18.7963898 16.9722222,19.3333333 C16.9722222,19.8702768 16.5369435,20.3055556 16,20.3055556 Z"
        id="Cart"
        stroke={color}
        strokeWidth="0.833333333"
        fill={color}
      />
      <path
        d="M9.33333333,20.5833333 C10.0236893,20.5833333 10.5833333,20.0236893 10.5833333,19.3333333 C10.5833333,18.6429774 10.0236893,18.0833333 9.33333333,18.0833333 C8.6429774,18.0833333 8.08333333,18.6429774 8.08333333,19.3333333 C8.08333333,20.0236893 8.6429774,20.5833333 9.33333333,20.5833333 Z M9.33333333,20.3055556 C8.79638983,20.3055556 8.36111111,19.8702768 8.36111111,19.3333333 C8.36111111,18.7963898 8.79638983,18.3611111 9.33333333,18.3611111 C9.87027684,18.3611111 10.3055556,18.7963898 10.3055556,19.3333333 C10.3055556,19.8702768 9.87027684,20.3055556 9.33333333,20.3055556 Z"
        id="Wheel-1"
        stroke={color}
        strokeWidth="0.833333333"
        fill={color}
      />
      <path
        d="M5.15183532,3.22222222 L19.8884603,3.22222222 C20.50211,3.22222222 20.9995714,3.71968361 20.9995714,4.33333333 C20.9995714,4.41446581 20.9906851,4.49535424 20.9730716,4.57455173 L19.2432877,12.3523295 C19.1302443,12.8606162 18.6793819,13.2222222 18.1586764,13.2222222 L6.69029686,13.2222222 L7.0321772,15.4444444 L18.2222222,15.4444444 C18.5290471,15.4444444 18.7777778,15.6931751 18.7777778,16 C18.7777778,16.3068249 18.5290471,16.5555556 18.2222222,16.5555556 L6.55555556,16.5555556 C6.2813494,16.5555556 6.04815518,16.3554938 6.00646017,16.0844762 L3.85671169,2.11111111 L1.55555556,2.11111111 C1.24873069,2.11111111 1,1.86238042 1,1.55555556 C1,1.24873069 1.24873069,1 1.55555556,1 L4.33333333,1 C4.60753949,1 4.8407337,1.20006174 4.88242872,1.47107934 L5.15183532,3.22222222 Z M6.52136168,12.1111111 L18.1586764,12.1111111 L19.8884603,4.33333333 L5.32416274,4.33333333 L6.52136168,12.1111111 Z"
        id="Wheel-2"
        stroke={color}
        strokeWidth="0.4"
        fill={color}
      />
    </g>
  </svg>
);
