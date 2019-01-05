// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENT
import Icon from './Icon.component';

const StyledStory = styled.div`
  padding: 2rem 5rem;

  .container {
    border: solid thin grey;
    > div > div {
      border: solid thin lightgrey;
    }
  }
`;

storiesOf('Components/Icon', module)
  .add('All', () => (
      <StyledStory>
        <Icon type="hamburger" />
      </StyledStory>
  ));
