// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
// THEME
import { colors, fonts, sizes } from '../theme';

interface ButtonProps {
  children?: any;
  disabled?: boolean;
  onClick?: () => void;
  type?: any;
  showSpinner?: boolean;
  className?: string;

  variant?: 'primary' | 'secondary' | 'text';
}

const ButtonColorStyles = {
  primary: css`
    border: solid thin ${colors.accent.savvyCyan.base};
    background-color: ${colors.accent.savvyCyan.base};
    color: ${colors.neutrals.white.base};

    &:hover {
      background-color: ${darken(0.05, colors.accent.savvyCyan.base)};
    }
  `,
  secondary: css`
    border: solid thin ${colors.accent.savvyCyan.light};
    background-color: ${colors.accent.savvyCyan.light};
    color: ${colors.neutrals.white.base};

    &:hover {
      background-color: ${darken(0.1, colors.accent.savvyCyan.light)};
    }
  `,
  text: css`
    border: solid thin ${colors.neutrals.white.base};
    background-color: ${colors.neutrals.white.base};
    color: ${colors.accent.savvyCyan.base};

    &:hover {
      color: ${darken(0.25, colors.accent.savvyCyan.base)};
    }
  `,
};

export const StyledButton = styled.button`
	position: relative;
  width: 100%;
	min-width: 2em;
	padding: ${sizes.padding.xs};
	border-radius: 3px;
	font-size: ${fonts.typography.body.fontSize};
	font-weight: 600;
	font-family: ${fonts.fontFamily};
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	transition: 0.5s ease background-color, 0.5s ease border-color, 0.5s ease color, 0.5s ease fill;

	// these properties are deprecated but help make white text on colored
	// backgrounds look more crisp in Chrome and Firefox.
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

  ${({ variant }: ButtonProps) => ButtonColorStyles[variant || 'primary']}
`;

const DefaultProps: ButtonProps = {};

export const Button = ({ children, className, variant }: ButtonProps = DefaultProps): React.ReactElement<any> => (
  <StyledButton variant={variant} className={classNames(className)}>{children}</StyledButton>
);

Button.defaultProps = DefaultProps;

export default Button;
