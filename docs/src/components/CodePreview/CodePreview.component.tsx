// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
import { LiveEditor, LiveProvider, LiveError, LivePreview } from 'react-live';
// COMPONENTS
import * as Fractals from '../../../../src';
// THEME

export const StyledCodePreviewElement = styled.pre`
  padding: 1rem;
  border: solid thin grey;

  .react-live-preview {
    padding: 1rem;
    background-color: lightgray;
  }
`;

interface CodePreviewProps {
  className?: string;
  children?: any;
}

export const CodePreview = ({ children, className }: CodePreviewProps): React.ReactElement<any> => (
  <StyledCodePreviewElement className={classNames(className)}>
    <LiveProvider code={children} scope={Fractals}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </StyledCodePreviewElement>
);
