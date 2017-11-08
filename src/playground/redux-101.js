import { createStore } from 'redux';

// the first arg is a default state
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {count: state.count + increment}
      break;
    case 'DECREMENT':
      const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {count: state.count - decrement}
      break;
    case 'SET':
      return {count: action.count}
      break;
    case 'RESET':
      return {count: 0}
      break;
    default:
      return state;
      break;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

// Actions - than an object that gets Sent to the store
// Increment, decremet, reset <-- Actions changes the store


store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
});