import { firebase, googleAuthProvider } from '../firebase/firebase';

// Setting up a new action to hanlde Auth (Login)
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider) // This helper use for google auth in popup
  }
}

// Setting up a new action to hanlde Auth (Logout)
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}