import { createStore } from 'redux';

// the first arg is a default state
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1}
      break;
    case 'DECREMENT':
      return {count: state.count - 1}
      break;
    case 'RESET':
      return {count: 0}
      break;
    default:
      return state;
      break;
  }
});

console.log(store.getState());

// Actions - than an object that gets Sent to the store
// Walk, stop_waling, sit, work, stop_working

// Increment, decremet, reset <-- Actions changes the store
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});
console.log(store.getState());

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

// I'd like to increment the count
// Id like to reset the count to zero
console.log(store.getState());