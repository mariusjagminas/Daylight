const elements = {
  preloader: document.createElement("div"),
  infoContainer: document.createElement("div"),
  locationNameElement: document.createElement("div"),
  currentDateElement: document.createElement("div"),
  sunriseTimeElement: document.createElement("div"),
  sunsetTimeElement: document.createElement("div"),
  dayLengthElement: document.createElement("div"),
  inputField: document.createElement("div"),
  errorMessageElement: document.createElement("div")
};

for (let key in elements) {
  elements[key].setAttribute("data-element", key);
}

export default elements;
