import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index,follow" />
          <meta
            name="format-detection"
            content="email=no,telephone=no,address=no"
          />

          {/** favicon */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
          <link
            rel="apple-touch-icon-precomposed"
            href="/apple-touch-icon-precomposed.png"
          />
          <link rel="manifest" href="/manifest.webmanifest" />

          {/** font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700&display=swap"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
