# QQuiz

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/anorakmaton/QQuiz)

# ローカル環境で動かす方法

このプロジェクトをローカル環境で動かすための手順を以下に記載します。

## 必要条件
以下のソフトウェアが事前にインストールされていることを確認してください：

- Node.js (推奨バージョン: v18以上)
- npm または yarn (Node.js に同梱されている)
- Git (プロジェクトをクローンする場合)

## 手順

1. **リポジトリをクローンする**（プロジェクトがGitHub上にある場合）

   ```bash
   git clone https://github.com/anorakmaton/QQuiz
   cd QQuiz
   ```

2. **依存パッケージをインストールする**

   プロジェクトのルートディレクトリに移動して以下を実行します：

   ```bash
   npm install
   ```

3. **アプリケーションを起動する**

   開発モードでアプリケーションを起動する場合：

   ```bash
   npm run dev
   ```

   本番モードでアプリケーションを起動する場合：

   ```bash
   npm run start
   # または
   yarn start
   ```

5. **動作確認**

   ブラウザで以下のURLを開いてアプリケーションが動作しているか確認します：

   ```
   http://localhost:5173
   ```

## トラブルシューティング

- **依存関係のエラーが発生する場合**
  - `node_modules`ディレクトリを削除して再インストールします。

    ```bash
    rm -rf node_modules
    npm install
    ```

- **特定のNode.jsバージョンが必要な場合**
  - [nvm](https://github.com/nvm-sh/nvm)を使用して適切なバージョンをインストールします。

    ```bash
    nvm install <必要なバージョン>
    nvm use <必要なバージョン>
    ```


