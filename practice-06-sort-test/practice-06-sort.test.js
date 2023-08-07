const {
  sortByAge1,
  sortByAge2,
  sortByLength1,
  sortByLength2,
  sortByPrice1,
  sortByPrice2,
} = require("../practice-06-sort/practice-06-sort");

describe("Sorting Tests", () => {
  // 問題1のテスト
  test("sortByAge1 sorts people by age", () => {
    const people = [
      { name: "John", age: 25 },
      { name: "Jane", age: 20 },
      { name: "Doe", age: 30 },
    ];
    expect(sortByAge1(people)).toEqual([
      { name: "Jane", age: 20 },
      { name: "John", age: 25 },
      { name: "Doe", age: 30 },
    ]);
  });

  test("sortByAge2 sorts people by age", () => {
    const people = [
      { name: "John", age: 25 },
      { name: "Jane", age: 20 },
      { name: "Doe", age: 30 },
    ];
    expect(sortByAge2(people)).toEqual([
      { name: "Jane", age: 20 },
      { name: "John", age: 25 },
      { name: "Doe", age: 30 },
    ]);
  });

  // 問題2のテスト
  test("sortByLength1 sorts strings by length", () => {
    const strings = [
      "John",
      "Jane",
      "Doe",
      "Harry",
      "Ron",
      "Neville",
      "Fred",
      "George",
    ];
    expect(sortByLength1(strings)).toEqual([
      "Doe",
      "Ron",
      "Fred",
      "John",
      "Jane",
      "Harry",
      "George",
      "Neville",
    ]);
  });

  test("sortByLength2 sorts strings by length", () => {
    const strings = [
      "John",
      "Jane",
      "Doe",
      "Harry",
      "Ron",
      "Neville",
      "Fred",
      "George",
    ];
    expect(sortByLength2(strings)).toEqual([
      "Doe",
      "Ron",
      "Fred",
      "John",
      "Jane",
      "Harry",
      "George",
      "Neville",
    ]);
  });

  // 問題3のテスト
  test("sortByPrice1 sorts products by price", () => {
    const products = [
      { name: "Laptop", price: 1000 },
      { name: "Mouse", price: 50 },
      { name: "Keyboard", price: 100 },
    ];
    expect(sortByPrice1(products)).toEqual([
      { name: "Mouse", price: 50 },
      { name: "Keyboard", price: 100 },
      { name: "Laptop", price: 1000 },
    ]);
  });

  test("sortByPrice2 sorts products by price", () => {
    const products = [
      { name: "Laptop", price: 1000 },
      { name: "Mouse", price: 50 },
      { name: "Keyboard", price: 100 },
    ];
    expect(sortByPrice2(products)).toEqual([
      { name: "Mouse", price: 50 },
      { name: "Keyboard", price: 100 },
      { name: "Laptop", price: 1000 },
    ]);
  });
});
