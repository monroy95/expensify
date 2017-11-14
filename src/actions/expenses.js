import uuid from 'uuid';
import database from '../firebase/firebase';

// Components calls action generator
// Action generator return object
// Component dispatches objects
// Redux store changes

// Components calls action generator
// action generator returns function
// component dispatches a function (?)
// function runs (has the ability  to dispatch other actions and do whatever it wants)

// ADD_EXPENSE,
const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expensesData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expensesData;
    const expense = { description, note, amount, createdAt }

    database.ref('expenses').push(expense)
      .then((ref) => dispatch(addExpense({ id: ref.key, ...expense})))
  }
}

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

export {
  addExpense,
  removeExpense,
  editExpense
}