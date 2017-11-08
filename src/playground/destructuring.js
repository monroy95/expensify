// 
// Object destructuring
// 

// const person = {
//   name: 'Luis',
//   age: 24,
//   location: {
//     city: 'Guatemala',
//     temp: 23
//   }
// };

// const { name: firstName = 'Anonymous', age, location } = person;
// // const name = person.name && const age = person.age;

// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city } = person.location;
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Anonymous' } = book.publisher;
// console.log(publisherName);

// 
// Array destructuring
// 

// const address = ['1299 S Juniper Street', 'Philadephia', 'Pennsylvania', '19147'];
// const [, , state='huhu'] = address;
// console.log(`You are in ${state}.`);

// const item = ['Expresso', '$2.00', '$2.50', '$2.75'];
// const [menu, , cost] = item;
// console.log(`A medium ${menu} costs ${cost}`)