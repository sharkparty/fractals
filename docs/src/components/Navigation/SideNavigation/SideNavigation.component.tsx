// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
import { rgba } from 'polished';
// THEME
import { colors } from '../../../../../src/theme';

export const StyledSideNavigationElement = styled.nav`
  width: 300px;
  background-color: ${colors.background.base};

  // ul {
  //   display: flex;
  //   justify-content: flex-end;
  //   list-style: none;
  //   padding: 0;
  //   margin: 0;
  //
  //   li {
  //     flex: 1;
  //     margin: 0;
  //     padding: 0;
  //     max-width: 11rem;
  //
  //     a {
  //       display: block;
  //       padding: 1.5rem 0 0;
  //       text-decoration: none;
  //       text-align: center;
  //       cursor: pointer;
  //       height: 2.4rem;
  //       border-bottom: solid transparent 2px;
  //       transition: border-bottom-color 250ms, background-color 250ms;
  //
  //       &:hover {
  //         border-bottom-color: ${colors.border.white};
  //         background-color: ${rgba(colors.border.white, .1)};
  //       }
  //     }
  //   }
  // }
`;

interface SideNavigationProps {
  className?: string;
  children?: any;
}

export const SideNavigation = ({ children, className }: SideNavigationProps): React.ReactElement<any> => (
  <StyledSideNavigationElement className={classNames(className)}>
    <ul>
      <li>
        <a>Docs</a>
      </li>
      <li>
        <a>Getting Started</a>
      </li>
      <li>
        <a>Designer Resources</a>
      </li>
    </ul>
  </StyledSideNavigationElement>
);
