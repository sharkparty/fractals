// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
// COMPONENTS
import { ItemProps } from './Item/Item.component';
// THEME
import { colors, fonts, sizes, variables } from '../theme';

interface MenuProps {
  children?: Array<React.ReactElement<ItemProps>> | React.ReactElement<ItemProps>;
  className?: string;
  size?: 'small' | 'large';
  // Color
  bg?: string;
  color?: string;
  // Configuration
  justify?: 'flex-start' | 'flex-end';
}

export const StyledMenu = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  min-width: 250px;

  overflow-y: hidden;
  overflow-x: auto;

  background: ${({ bg = colors.main.grapePurchase.base }: MenuProps) => bg};
  font-size: ${fonts.navigation.menu.fontSize};
  font-family: ${fonts.fontFamily};
  border-radius: ${variables.borderRadius};

  a {
    flex: 1 0 0;
    max-width: 6rem;
    min-width: 5rem;
    color: ${({ color = colors.neutrals.silver.dark }: MenuProps) => color};

    &:hover {
      color: ${({ color = colors.neutrals.silver.dark }: MenuProps) => lighten(20, color)};
    }

    &:active,
    &.active {
      color: ${({ color = colors.neutrals.silver.dark }: MenuProps) => lighten(20, color)};
    }

    &:focus {
      color: ${({ color = colors.neutrals.silver.dark }: MenuProps) => lighten(20, color)};
    }
    }

  /* Menu Sizes */
  ${({ size = 'large' }: MenuProps) => MenuSizes[size]}

  /* Positioning */
  justify-content: ${({ justify = 'flex-start' }: MenuProps) => justify};
`;

const MenuSizes = {
  small: css`
    height: ${fonts.baseFontSize * 2};
    a {
      font-size: ${fonts.navigation.menu.small.base.fontSize};
      font-weight: ${fonts.navigation.menu.small.base.fontWeight};
      padding: ${sizes.padding.sm} ${sizes.padding.sm};

      &:active,
      &.active {
        font-weight: ${fonts.navigation.menu.small.active.fontWeight};
      }
    }
  `,
  large: css`
    a {
      font-weight: ${fonts.navigation.menu.large.base.fontWeight};
      padding: ${sizes.padding.md} ${sizes.padding.sm};

      &:active,
      &.active {
        font-weight: ${fonts.navigation.menu.large.active.fontWeight};
      }
    }
  `,
};

const DefaultProps: MenuProps = {
  size: 'large',
};

export const Menu = ({ className, children, ...props }: MenuProps = DefaultProps): React.ReactElement<any> => (
  <StyledMenu className={classNames(className)} {...props}>
    {/* TODO: React.cloneElement() to add props from parent to child? */}
    {children}
  </StyledMenu>
);

Menu.defaultProps = DefaultProps;

export default Menu;
