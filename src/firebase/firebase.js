import * as firebase from "firebase";

// config of firebase
import config from './config'

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Locon Luis',
  age: 24,
  isSingle: true,
  location: {
    city: 'GTM',
    country: 'GTM'
  },
  attributes: {
    height: '1.80m',
    weight: '120KG'
  }
});

// To change an especific part of data in or db
// database.ref('attributes').set({
//   height: '1.81m',
//   weight: '200KG'
// })
