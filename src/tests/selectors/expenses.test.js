import moment from 'moment';

import selectExpensess from '../../selectors/expenses';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Choco Bar',
    note: '',
    amount: 19600,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Clothing',
    note: '',
    amount: 45600,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
]


test('Should filter by text value', () => {
  const filters = {
    text: 'o',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpensess(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1] ]);
  expect(result).toHaveLength(2);
});

test('Should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpensess(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0] ])
});

test('Should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  }
  const result = selectExpensess(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});


test('Should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpensess(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1]]);
})

test('Should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpensess(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
})