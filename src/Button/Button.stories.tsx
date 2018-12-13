// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import Button from './Button.component';

const StyledStory = styled.div`
  padding: 10rem;
`;

storiesOf('Components/Button', module)
  .add('default', () => (
      <StyledStory>
          <Button theme={{ bg: 'red' }}>Story</Button>
      </StyledStory>
  ));
