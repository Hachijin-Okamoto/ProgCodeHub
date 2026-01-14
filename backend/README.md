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
$ npm run prisma:generate # 初期起動時 / スキーマを変更した場合はこれをする
$ npm run prisma:reset # スキーマを変更した場合はこれを実行する（データは消える）
```

## seedデータを入れる場合
1. `production/seed.ts`にコードを記述
2. 以下を実行
```bash
$ npm run prisma:reset
$ npm run prisma:seed
```