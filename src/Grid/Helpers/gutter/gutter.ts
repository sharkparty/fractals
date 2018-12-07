import { has, isObject, isNumber, isUndefined } from 'lodash';
import { css } from 'styled-components';

import { theme } from '../../theme';

export const gutterWidth = (props: any, breakpoint: any) => {
  if (isObject(props.gutter) && has(props, `gutter.${breakpoint}`)) {
    return props.gutter[breakpoint];
  }

  if (!isObject(props.gutter) && has(props, 'gutter')) {
    return props.gutter;
  }

  return isObject(theme(props).gutter)
    ? theme(props).gutter[breakpoint]
    : theme(props).gutter;
};

export const row = (props: any, breakpoint: any) => {
  const gutterUnit = gutterWidth(props, breakpoint);
  const gutter = isNumber(gutterUnit) ? `${gutterUnit}rem` : gutterUnit;

  return isUndefined(gutterUnit) ? null : css`
    margin-left: calc(-${gutter} / 2);
    margin-right: calc(-${gutter} / 2);
  `;
};

export const col = (props: any, breakpoint: any) => {
  const gutterUnit = gutterWidth(props, breakpoint);
  const gutter = isNumber(gutterUnit) ? `${gutterUnit}rem` : gutterUnit;

  return isUndefined(gutterUnit) ? null : css`
    padding-left: calc(${gutter} / 2);
    padding-right: calc(${gutter} / 2);
  `;
};
