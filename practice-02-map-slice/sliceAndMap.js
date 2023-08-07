function explainSliceAndMap() {
  let array = ["apple", "banana", "cherry", "date", "elderberry"];
  let slicedArray = array.slice(2, 4);
  console.log(slicedArray);

  let numberArray = ["1", "2", "3", "4", "5"];
  // 各要素を数値に変換する
  let mappedArray = numberArray.map(Number);
  console.log(mappedArray);

  return { slicedArray, mappedArray };
}

module.exports = explainSliceAndMap;
