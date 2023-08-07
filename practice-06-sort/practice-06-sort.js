//問題1: 人々を年齢でソートする関数の作成
//testケースでは
//const people = [{name: "John", age: 25}, {name: "Jane", age: 20}, {name: "Doe", age: 30}];
//配列を作成し、testする

function sortByAge1(people) {
  return people.sort((a, b) => a.age - b.age);
}

function sortByAge2(people) {
  return people.sort((a, b) => {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });
}

// 問題2: 文字列の長さでソートする
// 説明:与えられた文字列のリストを文字列の長さで昇順にソートしてください。
// testケースでは
// const strings = ["John", "Jane", "Doe", "Harry", "Ron", "Neville", "Fred", "George"];
// 配列を作成し、testする

function sortByLength1(strings) {
  return strings.sort((a, b) => a.length - b.length);
}

function sortByLength2(strings) {
  return strings.sort((a, b) => {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
  });
}

// 問題3: 商品を価格でソートする
// 説明:与えられた商品のリストを価格で降順にソートしてください。
// testケースでは
// const const products = [{name: "Laptop", price: 1000}, {name: "Mouse", price: 50}, {name: "Keyboard", price: 100}];
// 配列を作成し、testする
function sortByPrice1(products) {
  return products.sort((a, b) => a.price - b.price);
}

function sortByPrice2(products) {
  return products.sort((a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  });
}

module.exports = {
  sortByAge1,
  sortByAge2,
  sortByLength1,
  sortByLength2,
  sortByPrice1,
  sortByPrice2,
};
