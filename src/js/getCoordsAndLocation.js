export const getCoordsAndLocation = async query => {
  const encodedQuery = encodeURI(query);

  try {
    const queryResponse = await fetch(
      `https://secure.geonames.org/search?q=${encodedQuery}&maxRows=1&username=${process.env.USER}&type=json`
    );
    const geoData = await queryResponse.json();

    if (geoData.totalResultsCount > 0) {
      const { lat, lng, toponymName, countryCode } = geoData.geonames[0];
      return {
        lat: lat,
        lng: lng,
        locationName: toponymName,
        countryCode: countryCode || "",
        isLocationFound: true,
        error: false
      };
    } else {
      return {
        isLocationFound: false,
        error: false
      };
    }
  } catch (err) {
    console.errr("getCoordsAndLocation:", err);
    return {
      error: true,
      isLocationFound: true
    };
  }
};
