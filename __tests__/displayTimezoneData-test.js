import { displayTimezoneData } from "../src/js/displayTimezoneData";
import elements from "../src/js/elements";
import { showErrorMessage } from "../src/js/showErrorMessage";
import { hideElement, showElement } from "../src/js/toggleElement";
import moment from "moment";

jest.mock("../src/js/elements");
jest.mock("../src/js/showErrorMessage");
jest.mock("../src/js/toggleElement");

const {
  locationNameElement,
  currentDateElement,
  sunriseTimeElement,
  sunsetTimeElement,
  dayLengthElement,
  preloader,
  errorMessageElement,
  infoContainer,
  nextDateElement
} = elements;

describe("displayTimezoneData function", () => {
  test("should show the first error message", () => {
    displayTimezoneData({ status: "NOT_FOUND" });

    expect(showErrorMessage).toHaveBeenCalledWith(
      "Location not found, please try again."
    );
  });

  test("should show the second error message", () => {
    displayTimezoneData({ status: "ERROR" });

    expect(showErrorMessage).toHaveBeenCalledWith(
      "Cannot get data from GeoNames API. Open the browser console to see errors"
    );
  });

  test("should display timezone data", () => {
    displayTimezoneData(
      {
        status: "OK",
        locationName: "kaunas,",
        countryCode: "LT",
        sunriseTime: "2019-12-03 07:03",
        sunsetTime: "2019-12-03 16:35"
      },
      "2019-12-03"
    );
    // check if data is set correctly
    expect(locationNameElement.innerText).toBe("kaunas, LT");
    expect(currentDateElement.innerText).toBe(moment().format("Do MMMM YYYY"));
    expect(sunriseTimeElement.innerText).toBe("07:03");
    expect(sunsetTimeElement.innerText).toBe("16:35");
    expect(dayLengthElement.innerText).toBe("Day length 9 hours 32 minutes");
    expect(nextDateElement.innerText).toBe(
      "Around 8th January 2020 the length of the day will be the same as today"
    );
    // Check if hideElement & showElement is called on correct elements
    expect(hideElement).toHaveBeenCalledWith(preloader);
    expect(hideElement).toHaveBeenCalledWith(errorMessageElement);
    expect(showElement).toHaveBeenCalledWith(infoContainer);
  });
});
