import { getCoordsAndLocation } from "./getCoordsAndLocation";
import { getSunriseSunsetTimes } from "./getSunriseSunsetTimes";

export const getTimezoneData = async query => {
  try {
    const coordsAndLocation = await getCoordsAndLocation(query);
    const { lat, lng, locationName, countryCode } = coordsAndLocation;
    const { sunrise, sunset } = await getSunriseSunsetTimes(lat, lng);
    return {
      locationName,
      countryCode,
      sunrise,
      sunset
    };
  } catch (err) {
    console.log("SERVICE_ERROR", err);
  }
};
