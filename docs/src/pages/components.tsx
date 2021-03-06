// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import { Link } from 'gatsby';
// COMPONENTS
import { Page } from '../components/Layout';
// THEME
import { sizes } from '../../../src/theme';

const StyledComponentsPage = styled.div`
  padding: ${sizes.padding.md} ${sizes.padding.lg};
`;

export const ComponentsPage = (): React.ReactElement<any> => (
  <Page>
    <StyledComponentsPage>
      <h1>Components</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget turpis scelerisque, euismod turpis eget,
        pretium tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris
        hendrerit lorem erat, quis pellentesque leo facilisis et. Nam bibendum eros non lectus efficitur, nec mattis
        enim molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac diam et lorem sodales convallis
        quis in massa. Etiam ut lacus et massa gravida condimentum. Sed sodales pulvinar sem in fringilla. Cras interdum
        orci non malesuada pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet
        viverra nulla, in varius nulla sodales eu. Phasellus varius nulla id leo ultricies, vel semper urna ultricies.
        Integer nisl ante, varius vitae venenatis eu, suscipit in leo. Duis imperdiet posuere elit, a malesuada tortor
        ullamcorper eu. Nam vestibulum mauris quis mi commodo semper. Praesent volutpat, urna ut blandit aliquet, magna
        turpis pretium ex, vel eleifend nulla diam ac nibh.
      </p>
      <ul>
        <li>
          <Link to="/components/button">Button</Link>
        </li>
      </ul>
    </StyledComponentsPage>
  </Page>
);

export default ComponentsPage;
