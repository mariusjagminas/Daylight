import moment from "moment";
import { showElement, hideElement } from "./toggleElement";
import nodes from "./nodes";

const {
  preloader,
  infoContainer,
  locationName,
  currentDate,
  sunriseTime,
  sunsetTime,
  dayLength,
  errorMessage
} = nodes;

export const displayTimezoneData = timezoneData => {
  const dayLengthRaw =
    moment(timezoneData.sunset) - moment(timezoneData.sunrise);
  const dayLengthStr = `Day length ${moment(dayLengthRaw).format(
    "HH"
  )} hours ${moment(dayLengthRaw).format("mm")} minutes `;

  locationName.innerText = `${timezoneData.locationName} ${timezoneData.countryCode}`;
  currentDate.innerText = moment().format("Do MMMM YYYY");
  sunriseTime.innerText = moment(timezoneData.sunrise).format("HH:mm");
  sunsetTime.innerText = moment(timezoneData.sunset).format("HH:mm");
  dayLength.innerText = dayLengthStr;
  hideElement(preloader);
  hideElement(errorMessage);
  showElement(infoContainer);
};
