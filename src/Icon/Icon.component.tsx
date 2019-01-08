// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Hamburger, ChevronDown } from './SVGs';
// THEME

type IconTypes = 'hamburger' | 'chevron-down';

interface IconProps {
  children?: any;
  className?: string;
  color?: string;
  type: IconTypes;
}

export const StyledIcon = styled.i`
`;

const DefaultProps: IconProps = {
  type: 'hamburger', // todo: default icon
  color: '#222',
};

const Icons = {
  'hamburger': Hamburger,
  'chevron-down': ChevronDown,
};

export const Icon = ({ className, type, color, ...props }: IconProps = DefaultProps): React.ReactElement<any> => (
  <StyledIcon className={classNames(className)} {...props}>
    {Icons[type]({ color })}
  </StyledIcon>
);

Icon.defaultProps = DefaultProps;

export default Icon;
