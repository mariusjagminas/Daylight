import moment from "moment";
import { showComponent, hideComponent } from "./toggleComponent";

export const displayTimezoneData = (
  timezoneData,
  {
    preloader,
    infoContainer,
    locationName,
    currentDate,
    sunriseTime,
    sunsetTime,
    dayLenght
  }
) => {
  const dayLenghtRaw =
    moment(timezoneData.sunset) - moment(timezoneData.sunrise);
  const dayLenghtStr = `Day lenght ${moment(dayLenghtRaw).format("HH:mm")}`;

  locationName.innerText = `${timezoneData.locationName} ${timezoneData.countryCode}`;
  currentDate.innerText = moment().format("Do MMMM YYYY");
  sunriseTime.innerText = moment(timezoneData.sunrise).format("HH:mm");
  sunsetTime.innerText = moment(timezoneData.sunset).format("HH:mm");
  dayLenght.innerText = dayLenghtStr;
  hideComponent(preloader);
  showComponent(infoContainer);
};
