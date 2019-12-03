import moment from "moment";
import { showElement, hideElement } from "./toggleElement";
import elements from "./elements";
import { calculateDayLength } from "./calculateDayLength/calculateDayLength";

const {
  preloader,
  infoContainer,
  locationNameElement,
  currentDateElement,
  sunriseTimeElement,
  sunsetTimeElement,
  dayLengthElement,
  errorMessageElement
} = elements;

export const displayTimezoneData = ({
  sunriseTime,
  sunsetTime,
  locationName,
  countryCode
}) => {
  const { hours, minutes } = calculateDayLength(sunriseTime, sunsetTime);
  const dayLengthStr = `Day length ${hours} hours ${minutes} minutes`;
  locationNameElement.innerText = `${locationName} ${countryCode}`;
  currentDateElement.innerText = moment().format("Do MMMM YYYY");
  sunriseTimeElement.innerText = moment(sunriseTime).format("HH:mm");
  sunsetTimeElement.innerText = moment(sunsetTime).format("HH:mm");
  dayLengthElement.innerText = dayLengthStr;
  hideElement(preloader);
  hideElement(errorMessageElement);
  showElement(infoContainer);
};
