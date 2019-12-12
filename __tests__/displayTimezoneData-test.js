import { displayTimezoneData } from "../src/js/displayTimezoneData";
import elements from "../src/js/elements";
import { showErrorMessage } from "../src/js/showErrorMessage";
import { hideElement, showElement } from "../src/js/toggleElement";
import moment from "moment";

jest.mock("../src/js/elements");
jest.mock("../src/js/showErrorMessage");
jest.mock("../src/js/toggleElement");

describe("displayTimezoneData function", () => {
  test("should show the first error message", () => {
    displayTimezoneData({ status: "NOT_FOUND" });

    expect(showErrorMessage.mock.results[0].value).toBe(
      "Location not found, please try again."
    );
    showErrorMessage.mockClear();
  });

  test("should show the second error message", () => {
    displayTimezoneData({ status: "ERROR" });

    expect(showErrorMessage.mock.results[0].value).toBe(
      "Cannot get data from GeoNames API. Open the browser console to see errors"
    );
  });

  test("should display timezone data", () => {
    displayTimezoneData({
      status: "OK",
      locationName: "kaunas,",
      countryCode: "LT",
      sunriseTime: "2019-12-03 07:03",
      sunsetTime: "2019-12-03 16:35"
    });
    // check if data is set correctly
    expect(elements.locationNameElement.innerText).toBe("kaunas, LT");
    expect(elements.currentDateElement.innerText).toBe(
      moment().format("Do MMMM YYYY")
    );
    expect(elements.sunriseTimeElement.innerText).toBe("07:03");
    expect(elements.sunsetTimeElement.innerText).toBe("16:35");
    expect(elements.dayLengthElement.innerText).toBe(
      "Day length 9 hours 32 minutes"
    );
    // Check if hideElement & showElement is called on correct elements
    expect(hideElement).toHaveReturnedWith(elements.preloader);
    expect(hideElement).toHaveReturnedWith(elements.errorMessageElement);
    expect(showElement).toHaveReturnedWith(elements.infoContainer);
  });
});
