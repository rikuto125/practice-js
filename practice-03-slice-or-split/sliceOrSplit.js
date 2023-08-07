```
// この関数は、文字列を引数として受け取り、
// その文字列をスペースで分割し、
// その結果の配列の最小値と最大値の平均値を返します。
```;
function processNumbers(input) {
  // splitメソッドを用いてスペースで分割
  let numbers = input.split(" ").map(Number);

  // スプレッド構文を用いて最小値と最大値を取得
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  // 平均値を計算
  let average = (min + max) / 2;

  // toFixedメソッドを用いて小数点以下の表示を保証
  return average.toFixed(1);
}
