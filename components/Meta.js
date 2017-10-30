import Head from "next/head";
import { injectGlobal } from "styled-components";
import pxToRem from "../utils/px-to-rem";
import { BREAKPOINTS, TYPEUNITS, TYPESTYLES, COLORS } from "../utils/css-variables";
import getModularScale from "../utils/typography/modular-scale";
import getFluidType from "../utils/typography/fluid-type";

import sourceSansProRegular from "../assets/fonts/source-sans-pro-regular.woff";
import sourceSansProBold from "../assets/fonts/source-sans-pro-bold.woff";

import sourceSerifProRegular from "../assets/fonts/source-serif-pro-regular.woff";
import sourceSerifProBlack from "../assets/fonts/source-serif-pro-black.woff";

import sourceCodeProRegular from "../assets/fonts/source-code-pro-regular.woff";
import sourceCodeProBold from "../assets/fonts/source-code-pro-bold.woff";

/* TODO: Update spacing values to use fluid type. * /

/* eslint no-unused-expressions: 0 */
injectGlobal`

  @font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro'), url(${sourceSansProRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro'), url(${sourceSansProBold}) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Serif Pro';
    src: local('Source Serif Pro'), url(${sourceSerifProRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Serif Pro';
    src: local('Source Serif Pro'), url(${sourceSerifProBlack}) format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Code Pro';
    src: local('Source Code Pro'), url(${sourceCodeProRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Code Pro';
    src: local('Source Code Pro'), url(${sourceCodeProBold}) format('woff');
    font-weight: 900;
    font-style: normal;
  }

  :root {
    --font-body-small:        ${pxToRem(TYPEUNITS.bodyFont.small)}rem;
    --font-body-large:        ${pxToRem(TYPEUNITS.bodyFont.large)}rem;
    --font-family-fallback:   -apple-system, system-ui, blinkmacsystemfont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans';
    --font-family-serif:      'Source Serif Pro', 'Georgia', 'Times New Roman';
    --font-family-sans:       'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --font-family-mono:       'Source Code Pro', Apercu, 'Fira Mono', Courier, monospace;
    --font-weight-bold:       900;

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

    --spacing-smaller:  ${getModularScale('spacing', 'small', -2,)}rem;
    --spacing-small:    ${getModularScale('spacing', 'small', -1,)}rem;
    --spacing-base:     ${getModularScale('spacing', 'small', 0,)}rem;
    --spacing-large:    ${getModularScale('spacing', 'small', 1,)}rem;
    --spacing-larger:   ${getModularScale('spacing', 'small', 2,)}rem;
    --column-gap:       var(--spacing-small);
  }

  @media screen and (min-width: ${BREAKPOINTS.medium}px) {
    :root {
      --spacing-base:   ${getFluidType(getModularScale('spacing', 'small', 0,), getModularScale('spacing', 'large', 0,))};
      --spacing-large:  ${getFluidType(getModularScale('spacing', 'small', 1,), getModularScale('spacing', 'large', 1,))};
      --spacing-larger: ${getFluidType(getModularScale('spacing', 'small', 2,), getModularScale('spacing', 'large', 2,))};
      --column-gap:     var(--spacing-large);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.large}px) {
    :root {
      --spacing-base:   ${getModularScale('spacing', 'large', 0,)}rem;
      --spacing-large:  ${getModularScale('spacing', 'large', 1,)}rem;
      --spacing-larger: ${getModularScale('spacing', 'large', 2,)}rem;
    }
  }

  * {
    margin: 0;
  }

  * + * {
    margin-top: var(--spacing-large);
  }

  *:focus {
    outline: 4px solid #00defd;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
  }

  html {
    font-size: 100%;
    font-kerning: normal;
  }

  body {
    font-family: var(--font-family-fallback);
  }

  *::selection {
    background-color: #fff3e2;
  }

  .wfLoadedSourceSerifPro {
    font-family: var(--font-family-serif);
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
