import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore(thunk);


test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ type: 'REMOVE_EXPENSE' , id: '123abc' });
})

test('Should setup edit expense action object', () => {
  const update = { note: 'Testing with jest' };
  const action = editExpense('123abc', update);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE', 
    id: '123abc',
    updates: { 
      note: 'Testing with jest'
      }
    });
})

test('Should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('Should add expenses to database and store', (done) => {
  const store = createMockStore({});
  const expensesData = {
    description: 'Mouse',
    amount: 2333,
    note: 'This one is better',
    createdAt: 1000
  }
  return store.dispatch(startAddExpense(expensesData))
    .then(() => {
      // const action = store.getActions();
      // expect(action[0]).toEqual(addExpense())
      done();
    })
})

test('Should add expenses with default to database and store', () => {
  
})

// test('Should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   })
// })