import React from 'react';
import styled from 'styled-components';

import { breakpointsKeys } from '../theme';
import { filterProps, mediaQuery, columnWidth, CSSProperty, col } from '../Helpers';

const defaultProps = {
  alignSelf: 'flex',
  elementType: 'row',
  display: 'wrap',
  flex: 'flex-start',
  order: 'stretch',
};

const filter = ['alignSelf', 'elementType', 'display', 'flex', 'order', 'xs', 'sm', 'md', 'lg', 'gutter'];

interface RowProps {
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  elementType?: string;
  display?: 'flex' | 'inline-flex' | 'block' | 'none' | 'inline-block';
  flex?: string;
  order?: string | number;
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  gutter?: string | number;
}

export const Col = styled((props: RowProps): any =>
  React.createElement(props.elementType || 'div', filterProps(Object.assign({}, defaultProps, props), filter))
)`
  // Initial component properties
  box-sizing: border-box;

  ${props => breakpointsKeys(Object.assign({}, defaultProps, props))
  .map(breakpoint => mediaQuery(Object.assign({}, defaultProps, props))[breakpoint]`
    // Generated Display
    ${CSSProperty(Object.assign({}, defaultProps, props), breakpoint, 'display')}

    // Generate gutter
    ${col(Object.assign({}, defaultProps, props), breakpoint)}

    // Generate flex rule before width, this avoid override
    ${CSSProperty(Object.assign({}, defaultProps, props), breakpoint, 'flex')}

    // Generate column width
    ${columnWidth(Object.assign({}, defaultProps, props), breakpoint)}

    // Responsive Flexbox properties
    ${CSSProperty(Object.assign({}, defaultProps, props), breakpoint, 'order')}
    ${CSSProperty(Object.assign({}, defaultProps, props), breakpoint, 'align-self')}
  `)}
`;

// colDefaultProps = {
//   alignSelf: 'auto',
//   elementType: 'div',
//   display: 'block',
//   flex: '0 0 auto',
//   order: 0,
// };

// const displayOptions = ['flex', 'inline-flex', 'block', 'none', 'inline-block'];
// export const alignSelfOptions = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];

// Col.propTypes = {
//   xs: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['hidden', 'auto'])]),
//   sm: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['hidden', 'auto'])]),
//   md: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['hidden', 'auto'])]),
//   lg: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['hidden', 'auto'])]),
//
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
//   order: PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.shape({
//       xs: PropTypes.number,
//       sm: PropTypes.number,
//       md: PropTypes.number,
//       lg: PropTypes.number,
//     }),
//   ]),
//
//   alignSelf: PropTypes.oneOfType([
//     PropTypes.oneOf(alignSelfOptions),
//     PropTypes.shape({
//       xs: PropTypes.oneOf(alignSelfOptions),
//       sm: PropTypes.oneOf(alignSelfOptions),
//       md: PropTypes.oneOf(alignSelfOptions),
//       lg: PropTypes.oneOf(alignSelfOptions),
//     }),
//   ]),
//
//   elementType: PropTypes.string,
//
//   flex: PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.string,
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
//   children: PropTypes.node,
// };

Col.displayName = 'Col';
