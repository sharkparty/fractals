// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Hamburger } from './SVGs';
// THEME

interface IconProps {
  children?: any;
  className?: string;
  color?: string;
  type: 'hamburger';
}

export const StyledIcon = styled.i`
`;

const DefaultProps: IconProps = {
  type: 'hamburger',
  color: 'red',
};

const Icons = {
  hamburger: Hamburger,
};

export const Icon = ({ className, type, color, ...props }: IconProps = DefaultProps): React.ReactElement<any> => (
  <StyledIcon className={classNames(className)} {...props}>
    {Icons[type]({ color })}
  </StyledIcon>
);

Icon.defaultProps = DefaultProps;

export default Icon;
