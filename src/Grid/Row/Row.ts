import React from 'react';
import styled from 'styled-components';
import { breakpointsKeys } from '../theme';
import { filterProps, mediaQuery, CSSProperty, row } from '../Helpers';

const defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  elementType: 'div',
};

const filter = ['elementType', 'display', 'flexDirection', 'flexWrap', 'justifyContent', 'alignItems', 'alignContent'];

interface RowProps {
  elementType?: string;
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
}

export const Row = styled((props: RowProps): any =>
  React.createElement(props.elementType || 'div', filterProps(Object.assign({}, defaultProps, props), filter))
)`
  // Initial component property
  box-sizing: border-box;

  ${(props) => breakpointsKeys(Object.assign({}, defaultProps, props))
    .map((breakpoint: any) => mediaQuery(Object.assign({}, defaultProps, props))[breakpoint]`
    // Generate gutter
    ${row(Object.assign({}, defaultProps, props), breakpoint)}

    // Responsive Flexbox properties
    ${CSSProperty(Object.assign({}, defaultProps, props), breakpoint, 'display')}
    ${CSSProperty(Object.assign({}, defaultProps, props), breakpoint, 'flex-direction')}
    ${CSSProperty(Object.assign({}, defaultProps, props), breakpoint, 'flex-wrap')}
    ${CSSProperty(Object.assign({}, defaultProps, props), breakpoint, 'justify-content')}
    ${CSSProperty(Object.assign({}, defaultProps, props), breakpoint, 'align-items')}
    ${CSSProperty(Object.assign({}, defaultProps, props), breakpoint, 'align-content')}
  `)}
`;

// Row.defaultProps = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   justifyContent: 'flex-start',
//   alignItems: 'stretch',
//   alignContent: 'stretch',
//   elementType: 'div',
// };

// const displayOptions = ['flex', 'inline-flex'];
// const flexDirectionOptions = ['row', 'row-reverse', 'column', 'column-reverse'];
// const flexWrapOptions = ['nowrap', 'wrap', 'wrap-reverse'];
// const justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
// const alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
// const alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'];

// cosnt filter = {
//   gutter: PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.string,
//     PropTypes.shape({
//       xs: PropTypes.oneOfType([
//         PropTypes.number,
//         PropTypes.string,
//       ]),
//       sm: PropTypes.oneOfType([
//         PropTypes.number,
//         PropTypes.string,
//       ]),
//       md: PropTypes.oneOfType([
//         PropTypes.number,
//         PropTypes.string,
//       ]),
//       lg: PropTypes.oneOfType([
//         PropTypes.number,
//         PropTypes.string,
//       ]),
//     }),
//   ]),
//
//   display: PropTypes.oneOfType([
//     PropTypes.oneOf(displayOptions),
//     PropTypes.shape({
//       xs: PropTypes.oneOf(displayOptions),
//       sm: PropTypes.oneOf(displayOptions),
//       md: PropTypes.oneOf(displayOptions),
//       lg: PropTypes.oneOf(displayOptions),
//     }),
//   ]),
//
//   flexDirection: PropTypes.oneOfType([
//     PropTypes.oneOf(flexDirectionOptions),
//     PropTypes.shape({
//       xs: PropTypes.oneOf(flexDirectionOptions),
//       sm: PropTypes.oneOf(flexDirectionOptions),
//       md: PropTypes.oneOf(flexDirectionOptions),
//       lg: PropTypes.oneOf(flexDirectionOptions),
//     }),
//   ]),
//
//   flexWrap: PropTypes.oneOfType([
//     PropTypes.oneOf(flexWrapOptions),
//     PropTypes.shape({
//       xs: PropTypes.oneOf(flexWrapOptions),
//       sm: PropTypes.oneOf(flexWrapOptions),
//       md: PropTypes.oneOf(flexWrapOptions),
//       lg: PropTypes.oneOf(flexWrapOptions),
//     }),
//   ]),
//
//   justifyContent: PropTypes.oneOfType([
//     PropTypes.oneOf(justifyContentOptions),
//     PropTypes.shape({
//       xs: PropTypes.oneOf(justifyContentOptions),
//       sm: PropTypes.oneOf(justifyContentOptions),
//       md: PropTypes.oneOf(justifyContentOptions),
//       lg: PropTypes.oneOf(justifyContentOptions),
//     }),
//   ]),
//
//   alignItems: PropTypes.oneOfType([
//     PropTypes.oneOf(alignItemsOptions),
//     PropTypes.shape({
//       xs: PropTypes.oneOf(alignItemsOptions),
//       sm: PropTypes.oneOf(alignItemsOptions),
//       md: PropTypes.oneOf(alignItemsOptions),
//       lg: PropTypes.oneOf(alignItemsOptions),
//     }),
//   ]),
//
//   alignContent: PropTypes.oneOfType([
//     PropTypes.oneOf(alignContentOptions),
//     PropTypes.shape({
//       xs: PropTypes.oneOf(alignContentOptions),
//       sm: PropTypes.oneOf(alignContentOptions),
//       md: PropTypes.oneOf(alignContentOptions),
//       lg: PropTypes.oneOf(alignContentOptions),
//     }),
//   ]),
//
//   elementType: PropTypes.string,
//
//   children: PropTypes.node,
// };

Row.displayName = 'Row';
