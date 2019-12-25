import { handleFormSubmit } from '../src/js/handleFormSubmit';
import elements from '../src/js/elements';
import { hideElement, showElement } from '../src/js/toggleElement';
import { getTimezoneData } from '../src/js/getTimezoneData';
import { displayTimezoneData } from '../src/js/displayTimezoneData';

jest.mock('../src/js/elements');
jest.mock('../src/js/toggleElement');
jest.mock('../src/js/displayTimezoneData');
jest.mock('../src/js/getTimezoneData');
jest.mock('../src/js/displayTimezoneData');

const event = {
	target: [{ value: 'test-input-value' }],
	preventDefault: jest.fn()
};

describe('handleFormSubmit function', () => {
	handleFormSubmit(event);

	test('should prevent default action', () => {
		expect(event.preventDefault).toBeCalled();
	});

	test('should call hideElement & showElement on correct DOM elements', () => {
		expect(hideElement).toBeCalledWith(elements.infoContainer);
		expect(showElement).toBeCalledWith(elements.preloader);
	});

	test('shoud call getTimezoneData with correct argument', async () => {
		await expect(getTimezoneData).toHaveBeenCalledWith('test-input-value');
	});

	test('should set input value to an empty string', () => {
		expect(event.target[0].value).toBe('');
	});

	test('should call displayTimezoneData', () => {
		expect(displayTimezoneData).toBeCalled();
	});
});
