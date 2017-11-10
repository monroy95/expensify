import { 
  setTextFilter,
  sortByDate, 
  sortByAmount,
  setStartDate,
  setEndtDate } from '../../actions/filters';
import moment from 'moment';

test('Should generate set Start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({ type: 'SET_START_DATE', timeStamp: moment(0) })
});

test('Should generate set end date action object', () => {
  const action = setEndtDate(moment(0));
  expect(action).toEqual({ type: 'SET_END_DATE', timeStamp: moment(0) });
})

test('Should generate set sortbyDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' })
})

test('Should generate set sortbyAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('Should generate set text filter object with values provided', () => {
  const action = setTextFilter('Test');
  expect(action).toEqual({ type: 'SET_TEXT', text: 'Test' });
})

test('Should generate set text filter object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: 'SET_TEXT', text: '' });
})