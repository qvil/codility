const FibonacciNumbers = require("./FibonacciNumbers");

describe("Codility basic FibonacciNumbers", () => {
  test("Test", () => {
    expect(FibonacciNumbers.fibonacci(0)).toBe(0);
    expect(FibonacciNumbers.fibonacci(3)).toBe(2);
    expect(FibonacciNumbers.fibonacci(5)).toBe(5);
    expect(FibonacciNumbers.fibonacci(8)).toBe(21);
  });
});
