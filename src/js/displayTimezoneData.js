import moment from "moment";
import { showElement, hideElement } from "./toggleElement";
import nodes from "./nodes";
import { calculateDayLength } from "./calculateDayLength/calculateDayLength";

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
  const { hours, minutes } = calculateDayLength(
    timezoneData.sunrise,
    timezoneData.sunset
  );

  const dayLengthStr = `Day length ${hours} hours ${minutes} minutes `;

  locationName.innerText = `${timezoneData.locationName} ${timezoneData.countryCode}`;
  currentDate.innerText = moment().format("Do MMMM YYYY");
  sunriseTime.innerText = moment(timezoneData.sunrise).format("HH:mm");
  sunsetTime.innerText = moment(timezoneData.sunset).format("HH:mm");
  dayLength.innerText = dayLengthStr;
  hideElement(preloader);
  hideElement(errorMessage);
  showElement(infoContainer);
};
