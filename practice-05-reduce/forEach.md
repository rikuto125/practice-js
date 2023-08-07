JavaScriptの`forEach`メソッドは、配列の各要素に対して指定した関数を実行します。基本的な使用方法は以下の通りです：

```javascript
let array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
    console.log(element);
});
```

このコードは、配列の各要素をコンソールに出力します。`forEach`メソッドに渡される関数は、各要素に対して一度ずつ呼び出されます。この関数は、次の3つの引数を取ります：

1. `element`：現在処理している配列の要素。
2. `index`（オプション）：現在処理している要素の配列内のインデックス。
3. `array`（オプション）：`forEach`が適用された配列。

これらの引数を使用して、以下のように配列の各要素とそのインデックスを出力することもできます：

```javascript
let array = ['apple', 'banana', 'cherry'];

array.forEach(function(element, index) {
    console.log('Element: ' + element + ', Index: ' + index);
});
```

また、`forEach`メソッドはアロー関数と組み合わせて使用することもできます。これにより、コードをより簡潔に書くことができます：

```javascript
let array = [1, 2, 3, 4, 5];

array.forEach(element => console.log(element));
```

このコードも、配列の各要素をコンソールに出力します。