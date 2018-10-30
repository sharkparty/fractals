// REACT
import React from 'react';
// VENDOR
import { mount, shallow } from 'enzyme';
// COMPONENTS
import Button from './button';

// SUBJECT
const subject = <Button>Test Label</Button>;

describe('Component: Button', () => {
    const wrapper = mount(subject);
    const component = shallow(subject);
    it('should be defined', () => {
      console.log(wrapper.debug());
      console.log(component.debug());
      expect(subject).toBeDefined();
    });
});
