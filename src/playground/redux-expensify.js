import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'ksjdiajdioe21',
    description: 'January Rent',
    notes: 'This was the final payment for that address',
    amout: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amout', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

