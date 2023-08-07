# JavaScript プロジェクトの環境構築と命名規則

このドキュメントでは、JavaScriptのプロジェクトにおける環境構築と命名規則について説明します。

## 環境構築

1. **Node.js のインストール**

   JavaScript をサーバーサイドで動作させるためには Node.js が必要です。[Node.js の公式サイト](https://nodejs.org/)から最新版をダウンロードしてインストールします。

2. **npm (Node Package Manager) のセットアップ**

   Node.js をインストールすると、自動的に npm もインストールされます。これは、JavaScript のライブラリやフレームワークを管理するためのパッケージマネージャです。

3. **プロジェクトの作成と初期化**

   まず、新しいディレクトリを作成します。
   
    ```bash
    mkdir my-project
    cd my-project
    ```
   次に、新しい Node.js プロジェクトを初期化します。
    
    ```bash
    npm init

    ```
   
    このコマンドを実行すると、対話型のプロンプトが表示され、プロジェクトの詳細を入力します。すべての質問に答えると、`package.json` ファイルが作成されます。これは、プロジェクトのメタデータと依存関係を記述したファイルです。
    
    ## 命名規則
    
    JavaScriptの命名規則は以下の通りです：
    
    - **変数名**: camelCase（キャメルケース）を用います。例：`myVariable`
    - **定数名**: UPPER_CASE（アッパーケース）を用います。例：`MY_CONSTANT`
    - **関数名**: camelCase（キャメルケース）を用います。例：`myFunction()`
    - **クラス名**: PascalCase（パスカルケース）を用います。例：`MyClass`
    - **ファイル名**: kebab-case（ケバブケース）または camelCase を用います。例：`my-script.js` または `myScript.js`
    
    JavaScriptの命名規則はプロジェクトやチームによって異なる場合があります。プロジェクトの規模が大きくなると、コードの可読性を維持するために一貫した命名規則を採用することが重要になります。


4. **jestの設定**
   Jest は JavaScript のテストフレームワークの1つであり、ユニットテストや統合テストを行うのに適しています。

   **Jest のインストール**

   Jest をプロジェクトにインストールするには、以下のコマンドを実行します。

    ```
    npm install --save-dev jest
    ```

   `--save-dev` オプションを使用すると、Jest が開発依存性として `package.json` ファイルに追加されます。

   **Jest の設定**

   Jest の設定は `package.json` ファイル、または独立した `jest.config.js` ファイルで行うことができます。後者を使用すると、設定がプロジェクトのメイン `package.json` ファイルから分離され、見通しが良くなります。

   以下は基本的な `jest.config.js` の例です：

    ```javascript
    module.exports = {
      verbose: true,
    };
    ```

   この設定は Jest に詳細なテスト結果を表示するよう指示します。

   **テストスクリプトの追加**

   `package.json` ファイルの `scripts` セクションにテストスクリプトを追加します：

    ```json
    "scripts": {
      "test": "jest"
    }
    ```

   これにより、`npm test` コマンドを実行することで Jest を使用したテストが実行されます。

   **テストの書き方**

   Jest を用いてテストを書く例は以下の通りです：

    ```javascript
    test('adds 1 + 2 to equal 3', () => {
      expect(1 + 2).toBe(3);
    });
    ```

   `test` 関数は2つの引数を取ります。1つ目はテストケースの名前、2つ目は実際のテスト関数です。`expect` と `toBe` は Jest のアサーションメソッドで、テストの期待値を定義します。

   これらの手順に従って Jest を設定することで、JavaScript プロジェクトでのテストが可能になります。