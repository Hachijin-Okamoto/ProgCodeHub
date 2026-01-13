# ProgCodeHub
- プログラミングの教育現場で、問題とそれに対して提出されたコードを閲覧するアプリ
- REST API / GraphQLの性能比較用アプリでもあります。

## 実行方法
```bash
$ npm install
$ npm run prisma:generate
$ npm run build
$ npm start
```
`http://localhost:8000/ui/rest`か`http://localhost:8000/ui/graphql`にアクセスすることで、本アプリを体験いただけます。

## 開発tips
```bash
$ npm run prisma:generate # スキーマを変更した場合これを実行する
$ npm run prisma:init # prismaファイルを再生成した場合これを実行する（データは消える）
```

## 備考
- 個人で開発を行っています。
- 現在製作中のため、ダミーデータを用いて動作させています。