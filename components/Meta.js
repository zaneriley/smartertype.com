import Head from "next/head";
import { injectGlobal } from "styled-components";

const variables = require("../utils/css-variables.js");
const cssUtils = require("../utils/css-utils.js");

/* eslint no-unused-expressions: 0 */
injectGlobal`
  :root {

  }

  @media screen and (min-width: ${cssUtils.SIZES.medium}rem) {
    :root {

    }
  }

  @media screen and (min-width: ${cssUtils.SIZES.large}rem) {
    :root {

    }
  }

  * {
    margin: 0;
  }

  * + * {
    margin-top: ;
  }

  *:focus
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
  }

  html {
    font-size: 100%;
    font-kerning: normal;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  body {
    font-family: var(--font-family-fallback);
  }

  *::selection {

  }

`;

export default () =>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  </div>;
