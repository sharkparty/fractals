import { omitBy, has, includes } from 'lodash';

const safeProps = ['children'];

export const filterProps = (props: any, filterOut: string[]) =>
  omitBy(props, (value, key) =>
    has(filterOut, `${key}`) && !includes(safeProps, key)
  );
