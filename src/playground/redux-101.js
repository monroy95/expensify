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

// REDUCERS
// 1. Reducers are pure functions (only depends of his own scope)
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.incrementBy}
    case 'DECREMENT':
      return {count: state.count - action.decrementBy}
    case 'SET':
      return {count: action.count}
    case 'RESET':
      return {count: 0}
    default:
      return state;
  }
}

// creating an store
const store = createStore(countReducer);

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