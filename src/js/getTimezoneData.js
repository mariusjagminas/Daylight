import { getCoordsAndLocation } from "./getCoordsAndLocation";
import { getSunriseSunsetTimes } from "./getSunriseSunsetTimes";
import { showErrorMessage } from "./showErrorMessage";

export const getTimezoneData = async query => {
  try {
    const coordsAndLocation = await getCoordsAndLocation(query);
    if (!coordsAndLocation.isLocationFound) {
      showErrorMessage("Location not found, please");
    }
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
