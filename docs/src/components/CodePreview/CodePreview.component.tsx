// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { LiveEditor, LiveProvider, LivePreview } from 'react-live';
// COMPONENTS
import * as Fractals from '../../../../src';
// THEME
import { colors, sizes } from '../../../../src/theme';

const PrismStyleOverrides = css`
  .prism-code {
    padding: ${sizes.padding.sm} 0;
    background-color: ${colors.neutrals.silver.light};
    color: ${colors.neutrals.charcoal.light};
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    font-family: monospace !important;

    .token {
      &.tag {
        color: ${colors.accent.savvyCyan.dark};
      }
      &.attr-name {
        color: ${colors.accent.tealBreaker.base};
      }
      &.string {
        color: ${colors.secondary.fireSale.base};
      }
      &.number {
        color: ${colors.secondary.dealEnvy.base};
      }
      &.operator {
        color: ${colors.secondary.cyberMango.base};
      }
      &.punctuation {
        color: ${colors.secondary.cyberMango.base};
      }
      &.keyword {
        color: ${colors.accent.savvyCyan.dark};
      }
      &.class-name {
        color: ${colors.accent.tealBreaker.base};
      }
      &.function {
        color: ${colors.accent.savvyCyan.light};
      }
      &.template-string {
        color: ${colors.secondary.fireSale.base};
      }
    }
  }
`;

export const StyledCodePreviewElement = styled.pre`

  .react-live-preview {
    padding: ${sizes.padding.sm};
    border: solid thin ${colors.neutrals.silver.dark};
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }

  ${PrismStyleOverrides}
`;

interface CodePreviewProps {
  className?: string;
  children?: any;
}

export const CodePreview = ({ children, className }: CodePreviewProps): React.ReactElement<any> => (
  <StyledCodePreviewElement className={classNames(className)}>
    <LiveProvider code={children} scope={Fractals}>
      <LivePreview />
      <LiveEditor />
      {/*<LiveError />*/}
    </LiveProvider>
  </StyledCodePreviewElement>
);
