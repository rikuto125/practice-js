const {
  sumUsingReduce,
  subtractUsingReduce,
  multiplyUsingReduce,
} = require("../practice-05-reduce/practioce-05-reduce");

describe("Sorting Tests", () => {
  test("sumUsingReduce calculates the sum of an array", () => {
    expect(sumUsingReduce([1, 2, 3, 4, 5])).toBe(15);
    expect(sumUsingReduce([-1, 1])).toBe(0);
    expect(sumUsingReduce([])).toBe(0);
  });

  test("subtractUsingReduce subtracts the elements of an array", () => {
    expect(subtractUsingReduce([10, 2, 3])).toBe(5);
    expect(subtractUsingReduce([5, 5])).toBe(0);
    expect(subtractUsingReduce([])).toBe(0);
  });

  test("multiplyUsingReduce multiplies the elements of an array", () => {
    expect(multiplyUsingReduce([2, 3, 4])).toBe(24);
    expect(multiplyUsingReduce([1, 1, 1, 1])).toBe(1);
    expect(multiplyUsingReduce([])).toBe(0);
  });
});
