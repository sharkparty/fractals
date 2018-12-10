// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
// COMPONENTS
import { NormalizeCSS, GlobalCSS } from '../../../../../src/theme';
import { Header, Footer } from '../';
import { SideNavigation } from '../../Navigation';

export const StyledPageElement = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  header {
    width: 100%;
    position: sticky;
    top: 0;
  }
`;

interface PageProps {
  className?: string;
  children?: any;
}

const StyledContentBody = styled.div`
  display: flex;
  height: calc(100vh - 4rem);
  overflow: hidden;
`;

export const Page = ({ children, className }: PageProps): React.ReactElement<any> => (
  <StyledPageElement className={classNames(className)}>
    <NormalizeCSS />
    <GlobalCSS />
    <Header/>
    <StyledContentBody>
      <SideNavigation />
      <main>
        {children}
        <Footer />
      </main>
    </StyledContentBody>
  </StyledPageElement>
);
