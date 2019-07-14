import React from 'react';
import DatePicker from './DatePicker';
import { shallow } from 'enzyme';

const props = { weeks: [] };
const setup = (anotherProps = {}) => {
  const newProps = {
    ...props,
    ...anotherProps,
  };
  const wrapper = shallow(<DatePicker {...newProps} />);

  return {
    wrapper,
    instance: wrapper.instance(),
    weeks: wrapper.find('.date-picker__week'),
  };
};

describe('DatePicker', () => {
  const { wrapper } = setup();
  it('smoke test', () => {
    expect(wrapper.exists()).toBe(true);
  });
  describe('basic render', () => {
    describe('when pass weeks', () => {
      const weeksValue = [
        [],
        []
      ]
      const { weeks } = setup({ weeks: weeksValue })
      it('renders it', () => {
        expect(weeks).toHaveLength(2)
      });
    })
  })

})