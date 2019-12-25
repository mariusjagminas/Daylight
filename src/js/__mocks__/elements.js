const elementsArray = [
	'preloader',
	'infoContainer',
	'locationNameElement',
	'currentDateElement',
	'sunriseTimeElement',
	'sunsetTimeElement',
	'dayLengthElement',
	'inputField',
	'errorMessageElement',
	'nextDateElement'
];
const elements = {};

elementsArray.map(elementName => {
	elements[elementName] = document.createElement('div');
});

for (let key in elements) {
	elements[key].setAttribute('data-element', key);
}

export default elements;
