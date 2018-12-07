import { css } from 'styled-components';
import { isString, has } from 'lodash';

import { theme } from '../../theme';

export const percentage = (props: any, breakpoint: any) =>
  (Math.abs(props[breakpoint]) / theme(props).columns) * 100;

export const display = (props: any, breakpoint: any) => {
  if ((props.display && isString(props.display))) {
    return css`display: ${props.display}`;
  }

  return !has(props.display, `${breakpoint}`) ? css`display: block` : null;
};

export const isHidden = (props: any, breakpoint: any) =>
  (props[breakpoint] === 0 || props[breakpoint] === 'hidden');

export const isAuto = (props: any, breakpoint: any) =>
  (props[breakpoint] === 'auto');

export const columnWidth = (props: any, breakpoint: any) => {
  if (isHidden(props, breakpoint)) {
    return css`
      display: none;
    `;
  }

  if (isAuto(props, breakpoint)) {
    return css`
      flex: 1;
    `;
  }

  const width = percentage(props, breakpoint);

  return has(props, `${breakpoint}`) ? css`
    flex-basis: ${width}%;
    max-width: ${width}%;
    ${display(props, breakpoint)}
  ` : null;
};
