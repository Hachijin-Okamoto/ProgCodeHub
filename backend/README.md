# ProgCodeHub - backend

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
$ npm run prisma:generate # 初期起動時はこれをする
$ npm run prisma:init # prismaファイルを再生成した場合 / スキーマを変更した場合はこれを実行する（データは消える）
```