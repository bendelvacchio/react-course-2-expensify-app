import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
	expect(setStartDate(moment(0))).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate set end date action object', () => {
	expect(setEndDate(moment(0))).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('should generate sort by date action object', () => {
	expect(sortByDate()).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('should generate sort by amount action object', () => {
	expect(sortByAmount()).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('should generate set text filter object with text value', () => {
	const textFilter = 'testing';
	expect(setTextFilter(textFilter)).toEqual({
		type: 'SET_TEXT_FILTER',
		text: textFilter
	});
});

test('should generate set text filter object with default', () => {
	expect(setTextFilter()).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});
