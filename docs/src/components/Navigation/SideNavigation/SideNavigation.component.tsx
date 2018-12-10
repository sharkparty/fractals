// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
// THEME
import { colors, fonts, sizes } from '../../../../../src/theme';

export const StyledSideNavigationElement = styled.nav`
  min-width: 299px;
  max-width: 299px;
  background-color: ${colors.neutrals.silver.base};
  border-right: solid 1px ${colors.neutrals.silver.dark};
  overflow-y: auto;
  overflow-x: hidden;

  > ul {
    > li {
    border-bottom: solid thin ${colors.neutrals.silver.dark};
      > a {
        font-weight: 500;
      }
    }

   ul li a {
    padding-left: ${sizes.padding.sm};
   }

   &:last-of-type {
     padding-bottom: ${sizes.padding.xl};
   }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;

    li {
      flex: 1;

      a {
        display: block;
        padding: ${sizes.padding.xs};
        cursor: pointer;

        font-size: ${fonts.paragraph.informational.fontSize};

        transition: background-color 250ms;

        :hover {
          background-color: ${colors.neutrals.silver.dark};
        }
      }
    }
  }
`;

interface SideNavigationProps {
  className?: string;
  children?: any;
}

export const SideNavigation = ({ children, className }: SideNavigationProps): React.ReactElement<any> => (
  <StyledSideNavigationElement className={classNames(className)}>
    <ul>
      <li>
        <a>Support</a>
      </li>
      <li>
        <a>Utilities</a>
        <ul>
          <li>
            <a>Theme</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Components</a>
        <ul>
          <li>
            <a>Button</a>
          </li>
          <li>
            <a>Layout</a>
          </li>
        </ul>
      </li>
    </ul>
  </StyledSideNavigationElement>
);
