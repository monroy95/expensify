import React from "react";
import { shallow } from 'enzyme';
// The component
import { ExpenseListItem } from '../../components/ExpenseListItem';
// Data seed
import expenses from '../fixtures/expenses';

test('Should render an Item from expenses with fixture data', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
  expect(wrapper).toMatchSnapshot();
});