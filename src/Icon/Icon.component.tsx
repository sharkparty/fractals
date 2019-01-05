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
  type: 'hamburger';
}

export const StyledIcon = styled.i`
`;

const DefaultProps: IconProps = {
  type: 'hamburger',
};

export const Icon = ({ className, ...props }: IconProps = DefaultProps): React.ReactElement<any> => (
  <StyledIcon className={classNames(className)} {...props}>
    <Hamburger color={'orange'} />
  </StyledIcon>
);

Icon.defaultProps = DefaultProps;

export default Icon;
