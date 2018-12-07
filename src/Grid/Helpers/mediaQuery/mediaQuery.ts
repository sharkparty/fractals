import { css } from 'styled-components';

import { theme, breakpointsKeys } from '../../theme';

export const mediaQuery = (props: any) =>
  (breakpointsKeys(props).reduce((accumulator, value) => {
    const breakpointSize = theme(props).breakpoints[value];

    Object.assign(accumulator, { [value]: (...args: any) =>
      (breakpointSize === 0 ? css`${css(...args)}` :
        css`@media (min-width: ${breakpointSize}rem) {
          ${css(...args)}
        }`
      ),
    });

    return accumulator;
  }, {})
);
