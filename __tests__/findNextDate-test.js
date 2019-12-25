import { findNextDate } from '../src/js/findNextDate';

describe('findNextDate function', () => {
	test('should return a correct date, if the current date is after the winter solstice', () => {
		expect(findNextDate('2019-12-27')).toBe('17th December 2020');
	});

	test('should return a correct date, if the current date is before the winter solstice', () => {
		expect(findNextDate('2019-01-01')).toBe('11th December 2020');
	});
});
