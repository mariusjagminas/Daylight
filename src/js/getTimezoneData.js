const baseUrl = "https://secure.geonames.org/";

const getGeoData = async query => {
  const encodedQuery = encodeURI(query);

  const response = await fetch(
    `${baseUrl}search?q=${encodedQuery}&maxRows=1&username=${process.env.USER}&type=json`
  );

  return await response.json();
};

export const getSunriseSunsetTimes = async (lat, lng) => {
  const response = await fetch(
    `${baseUrl}timezoneJSON?lat=${lat}&lng=${lng}&username=${process.env.USER}`
  );

  return await response.json();
};

export const getTimezoneData = async query => {
  try {
    const geoData = await getGeoData(query);
    if (geoData.totalResultsCount === 0) return { status: "NOT_FOUND" };
    const { lat, lng, toponymName, countryCode } = geoData.geonames[0];
    const { sunrise, sunset } = await getSunriseSunsetTimes(lat, lng);

    return {
      status: "OK",
      locationName: countryCode ? `${toponymName},` : toponymName,
      countryCode: countryCode || "",
      sunriseTime: sunrise,
      sunsetTime: sunset
    };
  } catch {
    return { status: "ERROR" };
  }
};
