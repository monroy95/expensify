import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import uuid from 'uuid';
import expensesReducer from '../../reducers/expenses';
import { 
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = uuid();
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  });
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
})

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ type: 'REMOVE_EXPENSE' , id: '123abc' });
})

test('Should remove expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
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

test('Should edit expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = { amount: 99922 }
  store.dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });

      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    })
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
  const store = createMockStore(defaultAuthState);
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
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expensesData);
      done();
    });
});

test('Should add expenses with default to database and store', (done) => {
  // start test
  const store = createMockStore(defaultAuthState);
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
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then(snapshot => {
      expect(snapshot.val()).toEqual(defaultData);
      done();
    });
// end of test
})

test('Should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1]]);
})

test('Should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
      done();
    })
})
