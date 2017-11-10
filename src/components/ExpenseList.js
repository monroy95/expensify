import React from 'react'
import { connect } from 'react-redux';

// Component
import ExpenseListItem from './ExpenseListItem';

// Selector
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
  return (
    <div>
      {
        props.expenses.length === 0 ? (<p>No Expenses</p>) : (props.expenses.map((expense, index) =><ExpenseListItem key={index} {...expense} />))
      }
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    expenses: selectExpenses(state.expenses, state.filters)
  }
);


export default connect(mapStateToProps)(ExpenseList)
