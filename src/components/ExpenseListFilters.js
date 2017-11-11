import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndtDate } from '../actions/filters'
// React-Dates
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarFocused: null,
    }

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange(calendarFocused) {
    this.setState(() => ({ calendarFocused }))
  }

  onTextChange (e) {
    this.props.setTextFilter(e.target.value)
  }

  onSortChange (e) {
    e.target.value === 'amount' ? this.props.sortByAmount() : this.props.sortByDate()
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ filters: state.filters });


const mapDispatchToProps = (dispatch, props) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndtDate: (endDate) => dispatch(setEndtDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);