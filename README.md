# ProgCodeHub
- プログラミングの教育現場で、問題とそれに対して提出されたコードを閲覧するアプリ
- REST API / GraphQLの性能比較用アプリでもあります。

## 実行方法
1. `backend/.env`に`DATABASE_URL=`の形でdbへのパスを記述
```bash
DATABASE_URL="file:./dev.db" # 例
```
2. ルートディレクトリで以下のコマンドを実行
```bash
$ npm install
$ npm run co-install
$ npm run prisma:generate
$ npm run build
$ npm start
```

3. `http://localhost:5173`にアクセス

※動作未検証です。バグ等あった場合はIssueにお願いいたします。

## 備考
- 個人で開発を行っています。
- 現在製作中のため、ダミーデータを用いて動作させています。