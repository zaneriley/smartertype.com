import Head from "next/head";
import { injectGlobal } from "styled-components";
import pxToRem from "../utils/px-to-rem.js";
import { TYPEUNITS, COLORS, BREAKPOINTS, TYPESTYLES } from "../utils/css-variables.js";

/* TODO: Update spacing values to use fluid type. * /

/* eslint no-unused-expressions: 0 */
injectGlobal`
  :root {
    --font-body-small:        ${pxToRem(TYPEUNITS.bodyFont.small)}rem;
    --font-body-large:        ${pxToRem(TYPEUNITS.bodyFont.large)}rem;
    --font-family-fallback:   -apple-system, system-ui, blinkmacsystemfont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans';
    --font-family-serif:      'Source Serif Pro', 'Georgia', 'Times New Roman';
    --font-family-sans:       'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --font-family-mono:       'Source Code Pro', Apercu, 'Fira Mono', Courier, monospace;
    --font-weight-bold:       800;

    --color-neutral-lightest: ${COLORS.neutral.lightest};
    --color-neutral-lighter:  ${COLORS.neutral.lighter};
    --color-neutral-light:    ${COLORS.neutral.light};
    --color-neutral-dark:     ${COLORS.neutral.dark};
    --color-neutral-darker:   ${COLORS.neutral.darker};
    --color-neutral-darkest:  ${COLORS.neutral.darkest};

    --color-primary-base:     ${COLORS.primary.base};
    --color-success-base:     ${COLORS.success.base};

    --border-radius-base:     4px;
    --letter-spacing:         0.05em;

    --optical-adjustment-smaller: 0.25rem;
    --optical-adjustment-small:   0.35rem;
    --optical-adjustment-base:    0.5rem;
    --optical-adjustment-large:   0.75rem;

    --spacing-smaller:  1rem;
    --spacing-small:    1rem;
    --spacing-base:     1rem;
    --spacing-large:    1rem;
    --spacing-larger:   1rem;
    --column-gap:       var(--spacing-small);
  }

  @media screen and (min-width: ${BREAKPOINTS.medium}rem) {
    :root {
      --spacing-base:   1rem;
      --spacing-large:  1rem;
      --spacing-larger: 1rem;
      --column-gap:     var(--spacing-large);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.large}rem) {
    :root {
      --spacing-base:   1rem;
      --spacing-large:  1rem;
      --spacing-larger: 1rem;
    }
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro'), url(./assets/fonts/source-sans-pro-regular.woff) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro'), url(./assets/fonts/source-sans-pro-bold.woff) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Serif Pro';
    src: local('Source Serif Pro'), url(./assets/fonts/source-serif-pro-regular.woff) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Serif Pro';
    src: local('Source Serif Pro'), url(./assets/fonts/source-serif-pro-black.woff) format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Code Pro';
    src: local('Source Code Pro'), url(./assets/fonts/source-code-pro-regular.woff) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Code Pro';
    src: local('Source Code Pro'), url(./assets/fonts/source-code-pro-bold.woff) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  * {
    margin: 0;
  }

  * + * {
    margin-top: var(--spacing-base);
  }

  *:focus {
    outline: 4px solid #00defd;
  }

  /* Experimental spacing properties */
  * + fieldset,
  * + pre,
  * + hr,
  h1 + div,
  h2 + div,
  h3 + div,
  h4 + div,
  blockquote + div,
  p + div {
    margin-top: calc(var(--spacing-base) + var(--optical-adjustment-base));
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
    ${TYPESTYLES.base}
  }

  *::selection {
    background-color: #fff3e2;
  }

  .wfLoadedSourceSerifPro {
    font-family: var(--font-family-sans);
  }

  pre {
    display: block;
    padding: 0 var(--spacing-smaller) 0 0;
    font-family: var(--font-family-mono);
    background-color: var(--color-neutral-lighter);
    border-radius: var(--border-radius-base);
    white-space: pre-wrap;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
  }

  sup {
    font-variant-position: super;
    font-feature-settings: "sups";
  }
`;

export default () =>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  </div>;
