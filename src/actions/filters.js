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

export {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndtDate
}