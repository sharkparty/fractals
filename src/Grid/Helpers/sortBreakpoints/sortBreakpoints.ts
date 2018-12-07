import { map, sortBy } from 'lodash';

export const sortBreakpoints = (breakpoints: any) => {
  const mappedBreakpoints = map(breakpoints, (value, key) => ({ key, value }));
  const sortedBreakpoints = sortBy(mappedBreakpoints, 'value');

  return map(sortedBreakpoints, value => (value.key));
};
