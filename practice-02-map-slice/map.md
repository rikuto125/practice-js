<!-- TOC -->
  * [map(Number)](#mapnumber)
<!-- TOC -->

## map(Number)
`map` メソッドは、配列のすべての要素に関数を適用し、その結果を新しい配列として返すメソッドです。

```javascript
let mappedArray = numberArray.map(Number);
```

このコードでは、`Number` 関数を `map` メソッドに渡しています。この `Number` 関数は、文字列を数値に変換するJavaScriptの組み込み関数です。

したがって、`numberArray` という配列の各要素（この場合は文字列の "1", "2", "3", "4", "5"）が `Number` 関数に渡され、その結果の数値が新しい配列 `mappedArray` に格納されます。

結果的に、`mappedArray` は `[1, 2, 3, 4, 5]` という配列になります。この配列は `numberArray` の各要素が数値に変換されたものです。