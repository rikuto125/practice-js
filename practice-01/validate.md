# 正規表現ユーティリティ関数

このモジュールは、さまざまな一般的なタスクに対して正規表現を使用するユーティリティ関数を提供します。

## 関数

### `validateEmail(email)`

- メールアドレスを検証します。
- 引数としてメールアドレスを取り、メールアドレスが有効な場合は `true` を、そうでない場合は `false` を返します。

### `validateURL(url)`

- URLを検証します。
- 引数としてURLを取り、URLが有効な場合は `true` を、そうでない場合は `false` を返します。

### `removeAllSpaces(str)`

- 文字列からすべてのスペースを削除します。
- 引数として文字列を取り、すべてのスペースを削除した新しい文字列を返します。

### `removeHTMLTags(str)`

- 文字列からすべてのHTMLタグを削除します。
- 引数として文字列を取り、すべてのHTMLタグを削除した新しい文字列を返します。

## 使用方法

モジュールを要求し、適切な引数で関数を呼び出します。例えば：

```javascript
const { validateEmail, validateURL, removeAllSpaces, removeHTMLTags } = require('./regexUtil');

console.log(validateEmail("test@example.com")); // 結果: true
console.log(validateURL("https://example.com")); // 結果: true
console.log(removeAllSpaces("Hello, World!")); // 結果: "Hello,World!"
console.log(removeHTMLTags("<h1>Hello, World!</h1>")); // 結果: "Hello, World!"
