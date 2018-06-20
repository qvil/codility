// import { MissingInteger } from "./MissingInteger";
const MissingInteger = require("./MissingInteger");

describe("allExample tests", () => {
  test("exmaple1", () => {
    expect(MissingInteger([1, 3, 6, 4, 1, 2])).toBe(5);
  });
  test("exmaple2", () => {
    expect(MissingInteger([1, 2, 3])).toBe(4);
  });
  test("exmaple3", () => {
    // expect(MissingInteger([−1, −3])).toEqual(1); // Unexpected character '−'
  });
});

describe("Correctness tests", () => {
  test("extreme_single ", () => {
    expect(MissingInteger([3])).toBe(1);
  });
  test("simple", () => {
    expect(MissingInteger([3])).toBe(1);
    expect(MissingInteger([93])).toBe(1);
  });
  test("extreme_min_max_value  ", () => {
    expect(MissingInteger([0, 1000000])).toBe(1);
  });
  test("positive_only  ", () => {
    expect(MissingInteger([0, 50, 100])).toBe(1);
    expect(MissingInteger([102, 151, 200])).toBe(1);
  });
  test("negative_only  ", () => {
    // expect(MissingInteger([-100, -50, -1])).toBe(1);
  });
});
