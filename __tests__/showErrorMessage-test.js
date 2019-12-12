import { showErrorMessage } from "../src/js/showErrorMessage";
import { showElement, hideElement } from "../src/js/toggleElement";
import elements from "../src/js/elements";

jest.mock("../src/js/elements");
jest.mock("../src/js/toggleElement");

describe("showErrorMessage function", () => {
  test("should call hideElement, showElement, and set inner text correctly", () => {
    showErrorMessage("test message");

    expect(elements.errorMessageElement.innerText).toBe("test message");
    expect(hideElement).toHaveBeenCalledWith(elements.infoContainer);
    expect(hideElement).toHaveBeenCalledWith(elements.preloader);
    expect(showElement).toHaveBeenCalledWith(elements.errorMessageElement);
  });
});
