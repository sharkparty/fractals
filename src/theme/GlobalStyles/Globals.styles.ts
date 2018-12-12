// VENDOR
import { createGlobalStyle, css } from 'styled-components';
// THEME
import { colors, fonts } from '..';

const headingRules = (hLevel: string): string => `
  ${hLevel} {
    font-weight: ${fonts.heading[`${hLevel}`].fontWeight};
    line-height: ${fonts.heading[`${hLevel}`].lineHeight};
    font-size: ${fonts.heading[`${hLevel}`].fontSize};
  }
`;

const typography = css`
  ${[...Object.keys(fonts.heading)].map(headingRules)}
`;

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

  ${typography}
`;
