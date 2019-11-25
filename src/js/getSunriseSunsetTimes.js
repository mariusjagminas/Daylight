export const getSunriseSunsetTimes = async (lat, lng) => {
  try {
    const res = await fetch(
      `https://secure.geonames.org/timezoneJSON?lat=${lat}&lng=${lng}&username=${process.env.USER}`
    );
    const { sunrise, sunset } = await res.json();
    return { sunrise, sunset };
  } catch (err) {
    console.log("getSunriseSunsetTimes ERROR", err);
  }
};
