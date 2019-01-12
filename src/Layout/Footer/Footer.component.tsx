// REACT
import * as React from 'react';
// COMPONENTS
// VENDOR
import styled from 'styled-components';
// STYLES
import { sizes, colors } from '../../theme';

export const StyledFooterElement = styled.footer`
  padding: ${sizes.padding.lg} ${sizes.padding.xl};
  margin: 0;
  min-height: 14rem;
  border-bottom: solid 16px ${colors.neutrals.silver.base};
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.11);
`;

interface FooterProps {
  className?: string;
  children?: any;
}

export const Footer = ({ children }: FooterProps): React.ReactElement<any> => (
  <StyledFooterElement>
    <p>I'm a footer. Neat.</p>
    {children}
  </StyledFooterElement>
);
