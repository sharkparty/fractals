// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import Item from './Item.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = <Item>Item</Item>;
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: Item', () => {
    it('should be defined', () => {
        /* tslint:disable */
        console.log(subject);
        console.log(wrapper.debug());
        console.log(component.debug());

        /* tslint:enable */
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
