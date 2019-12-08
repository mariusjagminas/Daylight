import moment from "moment";

export const calculateDayLength = (sunriseTime, sunsetTime) => {
  const sunrise = moment(sunriseTime);
  const sunset = moment(sunsetTime);
  const hours = sunset.diff(sunrise, "hours");
  const minutes = sunset.diff(sunrise, "minutes") % 60;

  return {
    hours,
    minutes
  };
};
