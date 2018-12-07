// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
// THEME
import { colors } from '../../../../../src/theme';
// COMPONENTS
import { NavigationBar } from '../../Navigation';

export const StyledHeaderElement = styled.header`
  background-color: ${colors.primary.base};
  color: ${colors.text.white};
  display: flex;
  padding: 0;
  margin: 0;
  height: 4rem;

  h1 {
    flex: 1;
    padding: 1rem;
    margin: 0;
    font-weight: 400;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  nav {
    flex: 1;
  }
`;

interface HeaderProps {
  className?: string;
  children?: any;
}

export const Header = ({ children, className }: HeaderProps): React.ReactElement<any> => (
  <StyledHeaderElement className={classNames(className)}>
    <h1>Fractals</h1>
    <NavigationBar />
  </StyledHeaderElement>
);
