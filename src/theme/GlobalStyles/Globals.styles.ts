// VENDOR
import { createGlobalStyle } from 'styled-components';
// THEME
import { colors, fonts } from '..';

export const GlobalCSS = createGlobalStyle`
  html {
    font-family: Avenir Next, Calibri, Helvetica, Roboto, sans-serif;
    color: ${colors.neutrals.charcoal.base};
    font-size: ${fonts.baseFontSize}px;
    letter-spacing: 0;
    line-height: 1.357142857rem;
  }
  body {
    height: 100vh;
  }
`;
