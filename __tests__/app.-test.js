import { app } from "../src/js/app";
import { handleFormSubmit } from "../src/js/handleFormSubmit";
import elements from "../src/js/elements";

jest.mock("../src/js/handleFormSubmit");
jest.mock("../src/js/elements");

describe("app module", () => {
  test("should call handleFormSubmit function on the form submission", () => {
    app();

    const event = new Event("submit");
    elements.inputField.dispatchEvent(event);

    expect(handleFormSubmit).toBeCalled();
  });
});
