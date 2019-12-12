const elementsArray = [
  "preloader",
  "infoContainer",
  "locationNameElement",
  "currentDateElement",
  "sunriseTimeElement",
  "sunsetTimeElement",
  "dayLengthElement",
  "inputField",
  "errorMessageElement"
];
const elements = {};

elementsArray.map(elementName => {
  elements[elementName] = document.createElement("div");
});

export default elements;
