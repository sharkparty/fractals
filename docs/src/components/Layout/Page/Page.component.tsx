// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
import { MDXProvider } from '@mdx-js/tag';
// COMPONENTS
import { NormalizeCSS, GlobalCSS, sizes } from '../../../../../src/theme';
import { Header, Footer } from '../';
import { SideNavigation } from '../../Navigation';
import { CodePreview } from '../../CodePreview';

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
  enableFooter?: boolean;
}

const StyledContentBody = styled.div`
  display: flex;
  height: calc(100vh - 4rem);
  overflow: hidden;


  main {
    overflow-x: hidden;
    overflow-y: auto;
    max-width: 1200px;
    margin: 0 auto;
    padding: ${sizes.padding.sm};
  }
`;

const Components: any = {};

Components.code = (props: any) => <CodePreview>{props.children}</CodePreview>;
Components.inlineCode = (props: any) => <code className="code" {...props} />;
Components.wrapper = (props: any) => <React.Fragment {...props} />;
Components.h1 = (props: any) => <h1 className="heading h1" {...props} />;
Components.h2 = (props: any) => <h2 className="heading h2" {...props} />;
Components.h3 = (props: any) => <h3 className="heading h3" {...props} />;
Components.h4 = (props: any) => <h4 className="heading h4" {...props} />;
Components.h5 = (props: any) => <h5 className="heading h5" {...props} />;
Components.h6 = (props: any) => <h6 className="heading h6" {...props} />;
Components.p = (props: any) => <p className="paragraph" {...props} />;
Components.ul = (props: any) => <ul className="ul" {...props} />;
Components.ol = (props: any) => <ol className="ol" {...props} />;
Components.li = (props: any) => <li className="li" {...props} />;
Components.a = (props: any) => <a className="link" {...props} />;
Components.blockquote = (props: any) => (
  <blockquote className="blockquote" {...props} />
);
Components.strong = (props: any) => <strong className="strong" {...props} />;

export const Page = ({ children, className, enableFooter }: PageProps): React.ReactElement<any> => (
  <StyledPageElement className={classNames(className)}>
    <NormalizeCSS />
    <GlobalCSS />
    <Header/>
    <StyledContentBody>
      <SideNavigation />
      <main>
        <MDXProvider components={Components}>
          {children}
        </MDXProvider>
        {enableFooter && <Footer />}
      </main>
    </StyledContentBody>
  </StyledPageElement>
);

export default Page;
