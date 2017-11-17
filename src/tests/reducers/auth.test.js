import authReducer from '../../reducers/auth';
import expenses from '../fixtures/expenses';

test('Should set uid for login', () => {
  const state = authReducer(undefined, {
    type: 'LOGIN',
    uid: expenses[0].id
  });

  expect(state.uid).toBe(expenses[0].id)
});

test('Should clear uid for logout', () => {
  const state = authReducer(undefined, {
    type: 'LOGOUT',
  });

  expect(state.uid).toBeFalsy();
})