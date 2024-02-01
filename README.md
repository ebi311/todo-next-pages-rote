# Next.js サンプル TODO アプリ (Pages Router version)

## 概要

このサンプルアプリは、Next.js の Pages Router を使った TODO アプリです。

Next.js の他に下記の要素があります。

- TypeScript 　による型安全な開発
- Tailwind CSS でのスタイリング
- ESLint, Prettier による Static Test
- Jest による Component Unit Test
- Storybook 　による Component カタログ

## 制限

このサンプルアプリは、以下の制限があります。

- サンプルプログラムのため、実用的な運用は想定していません。
- データは、JSON 形式で、ファイルに保存されます。データは、サーバー再起動でリセットされます。

## 初回起動

```bash
$ npm install
$ npm run dev
```

## テスト

```bash
$ npm run test
```

## Storybook

```bash
$ npm run storybook
```

## アプリの仕様

このプロジェクトの`docs/functions.md`に、アプリの仕様を記載しています。

## Hygen によるコンポーネントのコード生成

下記コマンドを実行すると、コンポーネント名と、それを生成する場所を尋ねられます。

```bash
$ npx hygen component new
```
