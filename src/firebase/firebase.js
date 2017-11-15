import * as firebase from "firebase";
import moment from 'moment';

<<<<<<< HEAD
=======
// config of firebase
>>>>>>> 6cc47d5225ef0dccdbef70f79204b95e224f519f
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
<<<<<<< HEAD
};
=======
  };
>>>>>>> 6cc47d5225ef0dccdbef70f79204b95e224f519f

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// // database.ref('notes').push({
// //   title: 'Course topics',
// //   body: 'React Native, Angular, Python'
// // })

// // database.ref('notes').push().set({
// //   title: 'Interview about JS',
// //   body: 'Feel free to ask'
// // })

// // database.ref('notes/-KytGwW4kW0QJxEsms8V').remove();

// database.ref('expenses').push({
//   description: 'Pizza',
//   note: 'sss',
//   amount: 45336,
//   createdAt: moment(0).add(9, 'days').valueOf()
// })

// // database.ref('expenses')
// //   .once('value')
// //   .then(snapshot => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     });

// //     console.log(expenses);
// //   })

// database.ref('expenses')
//   .on('value', snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   }, err => console.log(err));

// // database.ref().set({
// //   name: 'Locon Luis',
// //   age: 24,
// //   stressLevel: 5,
// //   job: {
// //     title: 'Software Developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'GTM',
// //     country: 'GTM'
// //   }
// // }).then(() => console.log('Data is saved!'))
// //   .catch((err) => console.log('This failed.', err))

// // READING DATA FROM FIREBASE
// // database.ref()
// //   .once('value')
// //   .then(snapshot => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch(e => console.log('Error fetching data', e));

// // OTHER WAY TO FETCH DATA ON REAL TIME

// // database.ref()
// //   .on('value', (snapshot) => {
// //     console.log(snapshot.val());
// //   }, (e) => console.log('Error with data fetching', e))

// // database.ref()
// //   .on('value', snapshot => {
// //     const name = snapshot.child('name').val();
// //     const job = snapshot.child('job/title').val();
// //     const company = snapshot.child('job/company').val();

// //     console.log(`${name} is a ${job} at ${company}`)
// //   }, e => console.log('Error fetching data', e))

// // UPDATING DATA FROM FIREBASE
// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // })

// // database.ref().update({ 
// //   job: 'Manager',
// //   'location/city': 'CDMX' // to update a property on a child object
// // });

// // REMOVING DATA FROM FIREBASE
// // database.ref('isSingle')
// //   .remove() // equivalent for this is .set(null)
// //   .then(() => console.log('Removing single'))
// //   .catch(e => console.log('Fail remove isSingle', e))

// // ADDING DATA TO FIREBASE
// // To change an especific part of data in or db
// // database.ref('attributes').set({
// //   height: '1.81m',
// //   weight: '200KG'
// // }).then(() => console.log('Synchronization succeeded'))
// //   .catch(() => console.log('Synchronization failed'))
