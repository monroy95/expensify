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
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expensesData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expensesData;
    const expense = { description, note, amount, createdAt }

    return database.ref(`users/${uid}/expenses`).push(expense)
      .then((ref) => dispatch(addExpense({ id: ref.key, ...expense})))
  }
}

// REMOVE_EXPENSE,
export const removeExpense = ( { id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove()
      .then((ref) => dispatch(removeExpense({ id })));
  }
};

// EDIT_EXPENSE,
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates)
      .then(() => dispatch(editExpense(id, updates)));
  }
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value')
      .then((snapshot) => {
        const expenses = []; // to clean when this promise run
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        return expenses // to get access to expenses on the next promise
      }).then((expenses) => dispatch(setExpenses(expenses)) )
  }
}