import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render correctly with 1 values', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} total={1234.10}/>)
  expect(wrapper).toMatchSnapshot();
})

test('Should render correctly with multiple values', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} total={1234312312312312}/>)
  expect(wrapper).toMatchSnapshot();
})