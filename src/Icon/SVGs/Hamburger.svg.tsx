/* tslint:disable max-line-length */
// REACT
import * as React from 'react';

interface Props {
  color?: string;
}

export default ({ color }: Props) => (
  <svg width="26px" height="20px" viewBox="0 0 26 20" version="1.1">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <path
        d="M1.4625,4 L24.5375,4 C25.345125,4 26,3.105 26,2 C26,0.895 25.345125,0 24.5375,0 L1.4625,0 C0.654875,0 0,0.895 0,2 C0,3.105 0.654875,4 1.4625,4"
        id="Top-Fill"
        fill={color}
      />
      <path
        d="M1.4625,12 L24.5375,12 C25.345125,12 26,11.105 26,10 C26,8.895 25.345125,8 24.5375,8 L1.4625,8 C0.654875,8 0,8.895 0,10 C0,11.105 0.654875,12 1.4625,12"
        id="Center-Fill"
        fill={color}
      />
      <path
        d="M1.4625,20 L24.5375,20 C25.345125,20 26,19.105 26,18 C26,16.895 25.345125,16 24.5375,16 L1.4625,16 C0.654875,16 0,16.895 0,18 C0,19.105 0.654875,20 1.4625,20"
        id="Bottom-Fill"
        fill={color}
      />
    </g>
  </svg>
);
