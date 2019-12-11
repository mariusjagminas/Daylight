import { showErrorMessage } from "../src/js/showErrorMessage";
import { showElement, hideElement } from "../src/js/toggleElement";
import elements from "../src/js/elements";

jest.mock("../src/js/elements");
jest.mock("../src/js/toggleElement");

describe("showErrorMessage function", () => {
  test("should call hideElement, showElement, and set inner text correctly", () => {
    showErrorMessage("test message");

    expect(hideElement.mock.calls[0][0].getAttribute("data-element")).toBe(
      "infoContainer"
    );

    expect(hideElement.mock.calls[1][0].getAttribute("data-element")).toBe(
      "preloader"
    );

    expect(elements.errorMessageElement.innerText).toBe("test message");

    expect(showElement.mock.calls[0][0].getAttribute("data-element")).toBe(
      "errorMessageElement"
    );
  });
});
