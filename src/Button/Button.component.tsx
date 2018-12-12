// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { ThemeProvider } from 'styled-components';

export const StyledButton = styled.button`
    background: ${props => props.theme.bg};
`;

interface ButtonProps {
  theme?: any;
  children?: any;
  disabled?: boolean;
  onClick?: () => void;
  type?: any;
  showSpinner?: boolean;
  className?: string;
}

const DefaultProps: ButtonProps = {
  theme: {
    bg: 'yellow',
  },
};

export const Button = ({ children, className, theme }: ButtonProps = DefaultProps): React.ReactElement<any> => (
  <ThemeProvider theme={theme}>
    <StyledButton className={classNames(className)}>{children}</StyledButton>
  </ThemeProvider>
);

Button.defaultProps = DefaultProps;

export default Button;
