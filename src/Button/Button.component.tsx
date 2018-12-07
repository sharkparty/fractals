// REACT
import * as React from 'react';
// STYLES
import styled from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    cursor: pointer;
`;

interface ButtonProps {
  borders?: boolean;
  className?: string;
  children?: any;
}

const StyledButton = ({ children }: ButtonProps): React.ReactElement<any> => (
  <Button>{children}</Button>
);

export default StyledButton;
