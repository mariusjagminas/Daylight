import { findNextDate } from "../src/js/findNextDate";

describe("findNextDate function", () => {
  test("should return a correct date, if the current date is between the winter solstice of last year and the summer solstice of the current year, and it is after 1st January.", () => {
    expect(findNextDate("2019-01-01")).toBe("8th December 2019");
  });

  test("should return a correct date, if the current date is between the winter solstice of last year and the summer solstice of the current year, and it is before 1st January.", () => {
    expect(findNextDate("2019-12-22")).toBe("19th December 2020");
  });

  test("should return a correct date, if the current date is between the summer solstice and the winter solstice of this year", () => {
    expect(findNextDate("2019-06-22")).toBe("20th June 2020");
  });
});
