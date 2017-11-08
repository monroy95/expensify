import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
  expenses: [{
    id: 'ksjdiajdioe21',
    description: 'January Rent',
    notes: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amout', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// Actions: 

// ADD_EXPENSE,
const addExpense = (
  { description = '',
    notes = '', 
    amount = 0, 
    createdAt = 0 
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE,
const removeExpense = ( { id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE,
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER,
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT',
  text
})

// SORT_BY_DATE,
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (timeStamp = undefined) => ({
  type: 'SET_START_DATE',
  timeStamp
})

// SET_END_DATE
const setEndtDate = (timeStamp = undefined) => ({
  type: 'SET_END_DATE',
  timeStamp
})

// EXPENSES REDUCER
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates}
        } else {
          return expense
        }
      });
    default:
      return state;
  }
};

// FILTER REDUCER
const defaultStateFiltersReducer = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined}
const filtersReducer = (state = defaultStateFiltersReducer, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {...state, text: action.text}
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date'}
    case 'SORT_BY_AMOUNT':
      return {...state, sortBy: 'amount'}
    case 'SET_START_DATE':
      return {...state, startDate: action.timeStamp}
    case 'SET_END_DATE':
      return {...state, endDate: action.timeStamp}
    default:
      return state;
  }
}

// get visible expense
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.createdAt > b.createdAt ? -1 : 1;
    }
  })
}

// store creation
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
});

// add one expense save data in variable to use later 
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Food', amount: 400 }));
// // remove one expense using id from expenseOne
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// // Edit a expense data using id from expenseTwo and changing some values
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// // Set an value for the object filters 
// store.dispatch(setTextFilter('ood'));
// store.dispatch(setTextFilter());
// // Trigger an action to change sortBy value
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// // Trigger an action to change startDate and EndDate value
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndtDate(129));
// store.dispatch(setEndtDate());