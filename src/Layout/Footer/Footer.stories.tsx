// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import { Footer } from './Footer.component';

const StyledStory = styled.div`
  padding: 10rem;
`;

storiesOf('Components/Footer', module).add('default', () => (
    <StyledStory>
        <Footer>Story</Footer>
    </StyledStory>
));
