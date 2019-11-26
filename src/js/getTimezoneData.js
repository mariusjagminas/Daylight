import { showErrorMessage } from "./showErrorMessage";

export const getTimezoneData = async query => {
  const encodedQuery = encodeURI(query);
  const baseUrl = "https://secure.geonames.org/";

  try {
    const queryResponse = await fetch(
      `${baseUrl}search?q=${encodedQuery}&maxRows=1&username=${process.env.USER}&type=json`
    );
    const geoData = await queryResponse.json();

    if (geoData.totalResultsCount === 0) throw Error("NOT_FOUND");

    const { lat, lng, toponymName, countryCode } = geoData.geonames[0];
    const res = await fetch(
      `${baseUrl}timezoneJSON?lat=${lat}&lng=${lng}&username=${process.env.USER}`
    );
    const { sunrise, sunset } = await res.json();

    return {
      locationName: toponymName,
      countryCode: countryCode || "",
      sunrise,
      sunset
    };
  } catch (err) {
    showErrorMessage(err.message);
  }
};
