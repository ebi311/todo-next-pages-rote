# Next.js サンプル TODO アプリ (Pages Router version)

## 概要

このサンプルアプリは、Next.js の Pages Router を使った TODO アプリです。

Next.js の他に下記の要素があります。

- TypeScript 　による型安全な開発
- Tailwind CSS + daisyUI でのスタイリング
  - [daisyUI — Tailwind CSS Components ( version 4 update is here )](https://daisyui.com/)
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

## 実装ポイント

- Pages Router を採用したものです。APP Router 版は、後ほど作成します。
- 汎用パーツとして、`src/components` に、`RadioButton`, `Textbox` を作成しました。
- `Textbox` は、[React Hook Form](https://react-hook-form.com/) に対応したものです。
- タスク一覧のページは、いくつかのコンポーネントに分割して実装しています。
  - 分割することで、個々のコンポーネントの実装がシンプルになっていることに注目してください。
  - 例えば、ステータスごとに変化するアイコンは、ステータスを受け取って、それに応じた表示を行う処理を、アイコンのコンポーネントに隠蔽することで、ページや行のコンポーネントでそれらを考慮する必要が無いようにしています。
  - また、タスクの一覧を表示するコンポーネントは、ページのコンポーネントから、データを受け取って、それを表示するだけのコンポーネントになっています。なので、ページングが追加されたとしても、ここでは 1 ページの行数などを考慮する必要なく、渡された分だけを表示するようにします。つまり、データの取得はページの方で、一覧の表示の処理は一覧のコンポーネントと、役割を分離することで、シンプルな設計になっています。
- 検索条件もフォームをコンポーネントとして分離し、それぞれのコントロールもコンポーネントとして分離しています。
  - 検索条件のコンポーネントの役割として、検索条件が変更されたときに、Router でクエリパラメータを変更することとしています。
  - タイトルのテキストボックスや、ラジオボタンのそれぞれのコンポーネントで、変更イベントのイベントハンドラを担当しています。そのために、親からそのコールバック関数を受け取って、それを実行するようにしています。
- ページでは、`getServerSideProps`でサーバー側でデータの取得とレンダリングを行っています。特に問題がなければ、データのフェッチはサーバーサイドで行うほうがシンプルで、パフォーマンスも良いです。
