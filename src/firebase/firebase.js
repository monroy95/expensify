import * as firebase from "firebase";

// config of firebase
import config from './config'

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Alfredo Locon'
});