import uuid from 'uuid';
import { login, logout } from '../../actions/auth'

test('Should setup a login action object', () => {
  const uid = uuid();
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('Should setup a logout action object', () => {
  const action = logout();
  expect(action).toEqual({ type: 'LOGOUT' });
})