# QQuiz クイズアプリ (Docker環境)

## 📌 セットアップ方法

### ✅ 前提条件
- このアプリを動かすには、事前に **Docker** がインストールされている必要があります。  
  未インストールの場合は、[Docker公式サイト](https://www.docker.com/products/docker-desktop/) からインストールしてください。

### 0. 事前準備（Windows向け）
1. `docker.zip` を任意の場所に解凍してください。  
2. 解凍してできた `docker` フォルダに、コマンドプロンプトで移動します。  
   例：
   ```
   cd C:\Users\YourName\Downloads\docker
   ```

### 1. Docker イメージのビルド  
以下のコマンドを実行して、Docker イメージをビルドします。
```sh
docker build -t qquiz-app .
```

### 2. コンテナの実行  
ビルドが完了したら、コンテナを起動します。
```sh
docker run -p 8080:80 --rm qquiz-app
```

### 3. アクセス方法  
ブラウザで以下の URL にアクセスしてください。
```
http://localhost:8080
```