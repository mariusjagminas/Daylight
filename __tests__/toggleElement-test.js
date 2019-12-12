import { showElement, hideElement } from "../src/js/toggleElement";
import elements from "../src/js/elements";

jest.mock("../src/js/elements");
const { preloader } = elements;

describe("toggleElement module", () => {
  test("should add a class to the element", () => {
    expect(preloader.classList).not.toContain("app-element-is-visible");

    showElement(preloader);

    expect(preloader.classList).toContain("app-element-is-visible");
  });

  test("should remove a class from the element", () => {
    expect(preloader.classList).toContain("app-element-is-visible");

    hideElement(preloader);

    expect(preloader.classList).not.toContain("app-element-is-visible");
  });
});
