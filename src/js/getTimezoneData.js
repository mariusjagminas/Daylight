import { showErrorMessage } from "./showErrorMessage";
const NotFoundMsg = "Location not found, please try again.";
const ServiceErrorMsg =
  "Can't fetch data from an API. Please try it later, if the problem persists, let me know.";

export const getTimezoneData = async query => {
  const encodedQuery = encodeURI(query);
  const geodataUrl = `https://secure.geonames.org/search?q=${encodedQuery}&maxRows=1&username=${process.env.USER}&type=json`;
  try {
    const queryResponse = await fetch(geodataUrl);
    const geoData = await queryResponse.json();
    if (geoData.totalResultsCount === 0) throw Error("NOT_FOUND");
    const { lat, lng, toponymName, countryCode } = geoData.geonames[0];
    const res = await fetch(
      `https://secure.geonames.org/timezoneJSON?lat=${lat}&lng=${lng}&username=${process.env.USER}`
    );
    const { sunrise, sunset } = await res.json();

    return {
      locationName: toponymName,
      countryCode: countryCode || "",
      sunrise,
      sunset
    };
  } catch (err) {
    if (err.message == "NOT_FOUND") {
      showErrorMessage(NotFoundMsg);
    } else {
      showErrorMessage(ServiceErrorMsg);
    }
  }
};
