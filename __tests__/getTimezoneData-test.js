import { getTimezoneData } from "../src/js/getTimezoneData";

describe("getTimezoneData function", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("should return an object filled with timezone data, and property: [status: OK] ", async () => {
    fetch
      .mockResponseOnce(
        JSON.stringify({
          totalResultsCount: 1,
          geonames: [
            { lat: 10, lng: 10, toponymName: "kaunas", countryCode: "LT" }
          ]
        })
      )
      .mockResponseOnce(JSON.stringify({ sunrise: "07:10", sunset: "16:45" }));

    const res = await getTimezoneData("kaunas");

    expect(res).toEqual({
      status: "OK",
      locationName: "kaunas,",
      countryCode: "LT",
      sunriseTime: "07:10",
      sunsetTime: "16:45"
    });
  });

  test("should return an object with no data, and property: [status: NOT_FOUND]", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        totalResultsCount: 0
      })
    );

    const res = await getTimezoneData("hsh-cc-hsj=jdj");

    expect(res).toEqual({ status: "NOT_FOUND" });
  });

  test("should return an object with no data, and property: [status: ERROR]", async () => {
    fetch.mockResponseOnce();

    const res = await getTimezoneData();

    expect(res).toEqual({ status: "ERROR" });
  });
});
