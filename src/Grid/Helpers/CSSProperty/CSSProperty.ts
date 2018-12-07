import { has, camelCase, isObject, isNull } from 'lodash';
import { css } from 'styled-components';

import { theme } from '../../theme';
import { sortBreakpoints } from '..';

export const getPropertyValue = (props: any, breakpoint: any, property: any) => {
  const propertySlug = camelCase(property);
  const ThemeBreakpoints = theme(props).breakpoints;
  if (has(props, `${propertySlug}`)) {
    if (isObject(props[propertySlug])) {
      const value = props[propertySlug][breakpoint];
      if (value === 0) {
        return value.toString();
      }

      return value || null;
    }

    if (breakpoint === sortBreakpoints(ThemeBreakpoints)[0]) {
      return props[propertySlug] || null;
    }
  }

  return null;
};

export const CSSProperty = (props: any, breakpoint: any, property: any) => {
  const value = getPropertyValue(props, breakpoint, property);
  return isNull(value) ? null : css`
    ${property}: ${value};
  `;
};
