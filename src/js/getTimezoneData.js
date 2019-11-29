import { showErrorMessage } from "./showErrorMessage";

export const getTimezoneData = async query => {
  const encodedQuery = encodeURI(query);
  const baseUrl = "https://secure.geonames.org/";

  try {
    const response = await fetch(
      `${baseUrl}search?q=${encodedQuery}&maxRows=1&username=${process.env.USER}&type=json`
    );
    const geoData = await response.json();

    if (geoData.totalResultsCount > 0) {
      const { lat, lng, toponymName, countryCode } = geoData.geonames[0];
      const response2 = await fetch(
        `${baseUrl}timezoneJSON?lat=${lat}&lng=${lng}&username=${process.env.USER}`
      );
      const { sunrise, sunset } = await response2.json();

      return {
        locationName: countryCode ? `${toponymName},` : toponymName,
        countryCode: countryCode || "",
        sunrise,
        sunset
      };
    } else {
      throw Error("NOT_FOUND");
    }
  } catch (err) {
    showErrorMessage(err.message);
  }
};
