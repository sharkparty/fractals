// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
import { Box, BoxProps } from '@rebass/grid';
// import { debounceTime } from 'rxjs/operators';

interface ContainerProps extends BoxProps {
  children?: any;
  className?: string;
}

export const StyledContainer = styled(Box)`
  max-width: 1140px;
`;

const DefaultProps: ContainerProps = {};

export const Container = ({ className, ...props }: ContainerProps = DefaultProps): React.ReactElement<any> =>
  <StyledContainer mx="auto" className={classNames(className)} {...props} />;

Container.defaultProps = DefaultProps;

export default Container;
