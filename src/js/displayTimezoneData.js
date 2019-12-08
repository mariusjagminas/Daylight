import moment from "moment";
import { showElement, hideElement } from "./toggleElement";
import elements from "./elements";
import { calculateDayLength } from "./calculateDayLength";
import { showErrorMessage } from "./showErrorMessage";

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

const notFoundMsg = "Location not found, please try again.";
const apiErrorMsg =
  "Cannot get data from GeoNames API. Open the browser console to see errors";

export const displayTimezoneData = timezoneData => {
  if (timezoneData.status === "NOT_FOUND") {
    showErrorMessage(notFoundMsg);
    return;
  }
  if (timezoneData.status === "ERROR") {
    showErrorMessage(apiErrorMsg);
    return;
  }
  const { locationName, countryCode, sunriseTime, sunsetTime } = timezoneData;
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
