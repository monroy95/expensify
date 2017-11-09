import React from 'react'
import { connect } from 'react-redux';

// Component
import ExpenseListItem from './ExpenseListItem';

// Selector
import selectExpenses from '../selectors/expenses';

 const ExpenseList = (props) => {
  return (
    <div>
      <h1>ExpenseList</h1>
      {
        props.expenses.map((expense, index) =><ExpenseListItem key={index} {...expense} />)
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
