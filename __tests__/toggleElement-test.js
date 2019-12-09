import { showElement, hideElement } from "../src/js/toggleElement";

describe("toggleElement module", () => {
  test("should add a class to the element", () => {
    const element = document.createElement("div");

    showElement(element);

    expect(element.classList).toContain("app-element-is-visible");
  });

  test("should remove a class from the element", () => {
    const element = document.createElement("div");
    element.classList.add("app-element-is-visible");
    expect(element.classList).toContain("app-element-is-visible");

    hideElement(element);

    expect(element.classList).not.toContain("app-element-is-visible");
  });
});
