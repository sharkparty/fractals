// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import {
  Hamburger,
  ChevronDown,
  ChevronUp,
  Cart
} from './SVGs';
// THEME

type IconTypes = 'hamburger' | 'chevron-down' | 'chevron-up' | 'cart';

export interface IconSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

interface IconProps {
  type: IconTypes;
  children?: any;
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

export const StyledIcon = styled.i`
`;

const DefaultProps: IconProps = {
  type: 'hamburger', // TODO: default icon
  color: '#222',
};

const Icons = {
  'hamburger': Hamburger,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'cart': Cart,
};

export const Icon = ({
  className,
  type,
  color,
  width,
  height,
  ...props
}: IconProps = DefaultProps): React.ReactElement<any> => (
  <StyledIcon className={classNames(className)} {...props}>
    {Icons[type]({ color, width, height })}
  </StyledIcon>
);

Icon.defaultProps = DefaultProps;

export default Icon;
