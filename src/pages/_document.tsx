import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja" data-theme="light">
      <Head />
      <body className="bg-base-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
