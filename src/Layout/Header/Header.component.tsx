// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
// STYLES
import { sizes, colors } from '../../theme';
// COMPONENTS
import { version } from '../../../package.json';

export const StyledHeaderElement = styled.header`
  padding: ${sizes.padding.sm} ${sizes.padding.md};
  background-color: ${colors.main.grapePurchase.base};
  margin: 0;
  color: ${colors.neutrals.white.base};
`;

interface HeaderProps {
  className?: string;
  children?: any;
}

export const Header = ({ children, className }: HeaderProps): React.ReactElement<any> => (
  <StyledHeaderElement className={classNames(className)}>
    <h1>Fractals</h1>
    <p><small>v {version}</small></p>
    {children}
  </StyledHeaderElement>
);
