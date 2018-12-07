// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
// THEME
import { colors, sizes } from '../../../../../src/theme';
// COMPONENTS

export const StyledFooterElement = styled.header`
  padding: ${sizes.padding.md};
  background-color: ${colors.background.base};
  border-top: solid thin ${colors.border.base};
`;

interface FooterProps {
  className?: string;
  children?: any;
}

export const Footer = ({ children, className }: FooterProps): React.ReactElement<any> => (
  <StyledFooterElement className={classNames(className)}>
    I'm the footer. Neat.
  </StyledFooterElement>
);
