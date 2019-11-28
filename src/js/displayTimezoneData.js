import moment from "moment";
import { showElement, hideElement } from "./toggleComponent";
import nodes from "./nodes";

const {
  preloader,
  infoContainer,
  locationName,
  currentDate,
  sunriseTime,
  sunsetTime,
  dayLenght,
  errorMessage
} = nodes;

export const displayTimezoneData = timezoneData => {
  const dayLenghtRaw =
    moment(timezoneData.sunset) - moment(timezoneData.sunrise);
  const dayLenghtStr = `Day lenght: ${moment(dayLenghtRaw).format(
    "HH"
  )} hours ${moment(dayLenghtRaw).format("mm")} minutes `;

  locationName.innerText = `${timezoneData.locationName} ${timezoneData.countryCode}`;
  currentDate.innerText = moment().format("Do MMMM YYYY");
  sunriseTime.innerText = moment(timezoneData.sunrise).format("HH:mm");
  sunsetTime.innerText = moment(timezoneData.sunset).format("HH:mm");
  dayLenght.innerText = dayLenghtStr;
  hideElement(preloader);
  hideElement(errorMessage);
  showElement(infoContainer);
};
