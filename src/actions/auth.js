import { firebase, googleAuthProvider } from '../firebase/firebase';

const login = uid => ({
  type: 'LOGIN',
  uid,
});

// Setting up a new action to hanlde Auth (Login)
// This helper use for google auth in popup
const startLogin = () =>
  () => firebase.auth().signInWithPopup(googleAuthProvider);


const logout = () => ({
  type: 'LOGOUT',
});

// Setting up a new action to hanlde Auth (Logout)
const startLogout = () =>
  () => firebase.auth().signOut();

export {
  login,
  startLogin,
  logout,
  startLogout,
};
