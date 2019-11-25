import { getCoordsAndLocation } from "./getCoordsAndLocation";
import { getSunriseSunsetTimes } from "./getSunriseSunsetTimes";
import { showErrorMessage } from "./showErrorMessage";

export const getTimezoneData = async query => {
  try {
    const coordsAndLocation = await getCoordsAndLocation(query);
    if (!coordsAndLocation.isLocationFound) {
      showErrorMessage("Location not found, please");
    } else {
      const { lat, lng, locationName, countryCode } = coordsAndLocation;
      const { sunrise, sunset } = await getSunriseSunsetTimes(lat, lng);
      return {
        locationName,
        countryCode,
        sunrise,
        sunset
      };
    }
  } catch (err) {
    showErrorMessage(
      "Something wrong with a service provider please try later"
    );
  }
};
