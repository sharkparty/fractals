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
  display: flex;
  flex-direction: column;
  height: 100vh;

  header,
  footer {
    flex: 0 0 auto;
  }
  > section {
    flex: 1 1 auto;
  }
`;

interface PageProps {
  className?: string;
  children?: any;
}

const StyledContentBody = styled.section`
  display: flex;

  > aside,
  > nav {
  flex: 1
  }

  > nav {
    max-width: 300px;
  }
`;

export const Page = ({ children, className }: PageProps): React.ReactElement<any> => (
  <StyledPageElement className={classNames(className)}>
    <NormalizeCSS />
    <GlobalCSS />
    <Header/>
    <StyledContentBody>
      <SideNavigation />
      <aside>
        {children}
      </aside>
    </StyledContentBody>
    <Footer />
  </StyledPageElement>
);
