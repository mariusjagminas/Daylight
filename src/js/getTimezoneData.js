import { getCoordsAndLocation } from "./getCoordsAndLocation";

export const getTimezoneData = async query => {
  try {
    const res = await getCoordsAndLocation(query);
    console.log("RESPONSE:", res);
  } catch (err) {
    console.log("SERVICE_ERROR", err);
  }
};
