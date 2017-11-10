import expensesReducer from '../../reducers/expenses';

// dummy data
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove an expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-5'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Oreos',
      note: '',
      amount: 111111,
      createdAt: 1
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toHaveLength(4);
});

test('Should edit an expense', () => {
  const newDescription = 'Bubble Gum';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description: newDescription
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(newDescription);
});

test('Should not edit if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '7',
    updates: {
      description: 'Change please'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});