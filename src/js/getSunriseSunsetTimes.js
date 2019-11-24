import { user } from "./user";

export const getSunriseSunsetTimes = async (lat, lng) => {
  try {
    const res = await fetch(
      `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lng}&username=${user}`
    );
    const { sunrise, sunset } = await res.json();
    return { sunrise, sunset };
  } catch (err) {
    console.log("getSunriseSunsetTimes ERROR", err);
  }
};
