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
    getDate: (date) => wrapper.find(`#date-${date.day}-${date.month}-${date.year}`)
  };
};
const createDate = (day, month, year) => ({ day, month, year })
describe('DatePicker', () => {
  const { wrapper } = setup();
  it('smoke test', () => {
    expect(wrapper.exists()).toBe(true);
  });
  describe('basic render', () => {
    describe('when pass weeks', () => {
      const firstDate = createDate(20, 2, 2021)
      const secondDate = createDate(26, 2, 2021)
      const weeksValue = [
        [firstDate],
        [secondDate]
      ]
      const onDateClickedSpy = jest.fn()
      const { weeks, getDate } = setup({ weeks: weeksValue, onDateClicked: onDateClickedSpy })
      it('renders it', () => {
        expect(weeks).toHaveLength(2)
      });
      it('render the dates', () => {
        expect(getDate(firstDate).text()).toEqual(firstDate.day.toString())
        expect(getDate(secondDate).text()).toEqual(secondDate.day.toString())
      })
      describe('when click a date', () => {
        beforeAll(() => {
          const dateToClick = getDate(firstDate)
          dateToClick.simulate('click')
        })
        it('call onDateClickedProp with the date', () => {
          expect(onDateClickedSpy).toBeCalledWith(firstDate)
        })
      })
    })
  })
})