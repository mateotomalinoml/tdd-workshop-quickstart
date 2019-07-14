import React from 'react';
import DatePicker from './DatePicker';
import { shallow } from 'enzyme';

const props = {};
const setup = (anotherProps = {}) => {
    const newProps = {
        ...props,
        ...anotherProps,
    };
    const wrapper = shallow(<DatePicker {...newProps} />);

    return {
        wrapper,
        instance: wrapper.instance(),
    };
};

describe('DatePicker', () => {
    const { wrapper } = setup();
    it('smoke test', () => {
        expect(wrapper.exists()).toBe(true);
    });
})