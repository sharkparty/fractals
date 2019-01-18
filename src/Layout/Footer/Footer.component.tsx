// REACT
import * as React from 'react';
// COMPONENTS
// VENDOR
import styled from 'styled-components';
// STYLES
import { sizes, colors, fonts } from '../../theme';

export const StyledFooterElement = styled.footer`
  font-family: ${fonts.fontFamily};
  text-align: center;
  padding: ${sizes.padding.lg};
  margin: 0;
  background-color: ${colors.neutrals.silver.base};
  color: ${colors.neutrals.ash.base};
`;

interface FooterProps {
  className?: string;
  children?: any;
}

export const Footer = ({ children }: FooterProps): React.ReactElement<any> => (
  <StyledFooterElement>
    <p>RMN Footer Stub</p>
    {/*{children}*/}
  </StyledFooterElement>
);
