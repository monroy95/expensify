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
// SET_TEXT_FILTER,
// SORT_BY_DATE,
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// EXPENSES REDUCER
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state;
  }
};

// FILTER REDUCER
const defaultStateFiltersReducer = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined}
const filtersReducer = (state = defaultStateFiltersReducer, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

// store creation
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Food', amount: 400 }));

const removeOne = store.dispatch(removeExpense({ id: expenseOne.expense.id }));
console.log(removeOne);