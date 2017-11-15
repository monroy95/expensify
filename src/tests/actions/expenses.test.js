import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
})

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
// Testing async actions
test('Should add expenses to database and store', (done) => {
  const store = createMockStore({});
  const expensesData = {
    description: 'Mouse',
    amount: 2333,
    note: 'This one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expensesData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expensesData
        }
      });
      // promises chaining 
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expensesData);
      done();
    });
});

test('Should add expenses with default to database and store', (done) => {
  // start test
  const store = createMockStore({});
  const defaultData = { description: '', note: '', amount: 0, createdAt: 0 };
  store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...defaultData
        }
      });
      // promises chaining 
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then(snapshot => {
      expect(snapshot.val()).toEqual(defaultData);
      done();
    });
// end of test
})

