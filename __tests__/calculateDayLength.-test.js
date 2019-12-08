import { calculateDayLength } from "../src/js/calculateDayLength";

describe("calculateDayLength function", () => {
  test("should calculate correctly the length of a day.", () => {
    const result = calculateDayLength("2019-12-03 07:03", "2019-12-03 16:35");

    expect(result).toEqual({ hours: 9, minutes: 32 });
  });
});
