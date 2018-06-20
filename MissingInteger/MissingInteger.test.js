// import { MissingInteger } from "./MissingInteger";
const MissingInteger = require("./MissingInteger");

describe("Test MissingInteger.", () => {
  test("Test Sample Case.", () => {
    expect(MissingInteger([1, 3, 6, 4, 1, 2])).toBe(5);
    expect(MissingInteger([1, 2, 3])).toBe(4);
    // expect(MissingInteger([−1, −3])).toEqual(1); // Unexpected character '−'
  });
});
