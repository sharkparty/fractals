// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// COMPONENT
import Button from './button.component';

storiesOf('Components', module).add('Button', () => (
    <div>
        <Button>Story</Button>
    </div>
));
