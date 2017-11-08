import { createStore } from 'redux';
// Actions - than an object that gets Sent to the store
// Action generators => functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});
// Action generators => functions that return action objects
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})
// Action generators => functions that return action objects
const resetCount = () => ({
  type: 'RESET'
})
// Action generators => functions that return action objects
const setCount = ({ count }) => ({
  type: 'SET',
  count
})

// the first arg is a default state
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.incrementBy}
      break;
    case 'DECREMENT':
      return {count: state.count - action.decrementBy}
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

// dispatching actions
store.dispatch(incrementCount({ incrementBy: 5 }))
// Using action generators
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 202 }));