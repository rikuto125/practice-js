//
// 以下のsumUsingReduceは、配列の要素を合計する関数です。
// reduceのアロー関数の第一引数は、前回のループの戻り値です。
// 第二引数は、配列の要素です。
// 第三引数は、reduceの初期値です。ない場合は、配列の最初の要素が初期値になります。
//
function sumUsingReduce(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}

function subtractUsingReduce(arr) {
  // 最初の要素から残りの要素を順に引いていく
  if (arr.length === 0) return 0;
  return arr.reduce((accumulator, currentValue) => accumulator - currentValue);
}
function multiplyUsingReduce(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1,
  );
}

module.exports = {
  sumUsingReduce,
  subtractUsingReduce,
  multiplyUsingReduce,
};
