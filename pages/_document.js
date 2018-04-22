import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>SmarterType – Better typography for the modern web.</title>
          <meta
            name="description"
            content="Improve the typography of your app or website by enabling your font's opentype features. See which features your font supports, how to include them in your designs, and how to enable them on the web."
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5849fe" />
          <meta name="msapplication-TileColor" content="#5849fe" />
          <meta name="theme-color" content="#5849fe" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://smartertype.com" />
          <meta
            property="og:title"
            content="SmarterType – Better typography for the modern web."
          />
          <meta property="og:image" content="https://smartertype.com/og.png" />
          <meta
            property="og:description"
            content="Improve the typography of your app or website by enabling your font's opentype features. See which features your font supports, how to include them in your designs, and how to enable them on the web."
          />
          <meta property="og:site_name" content="SmarterType" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@zaneriley" />
          <meta name="twitter:url" content="https://smartertype.com/" />
          <meta
            name="twitter:title"
            content="SmarterType – Better typography for the modern web."
          />
          <meta
            name="twitter:description"
            content="Improve the typography of your app or website by enabling your font's opentype features. See which features your font supports, how to include them in your designs, and how to enable them on the web."
          />
          <meta name="twitter:image" content="https://smartertype.com/og.jpg" />

          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
