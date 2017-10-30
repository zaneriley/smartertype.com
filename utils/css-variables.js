import getFontSize from "./typography/font-size";
import getModularScale from "./typography/modular-scale";
import getLineHeight from "./typography/line-height";

export const BREAKPOINTS = {
  small: 320,
  medium: 600,
  large: 890,
  larger: 1248,
  largest: 1440
};

/* Typeface-specific data, mostly used for optical adjustments. */
export const TYPEFACES = {
  sourceCodePro: `
    --font: var(--font-family-mono);
    --fm-capitalHeight: 0.66;
    --fm-descender: 0.273;
    --fm-ascender: 0.984;
  `,

  sourceSansPro: `
    --font: var(--font-family-sans);
    --fm-capitalHeight: 0.66;
    --fm-descender: 0.273;
    --fm-ascender: 0.984;
  `,

  sourceSerifPro: `
    --font: var(--font-family-serif);
    --fm-capitalHeight: 0.66;
    --fm-descender: 0.273;
    --fm-ascender: 0.984;
  `
};

/* Base units of typography system.
 * Update these numbers to change how type is set throughout the app
 * TODO: Set line-height to be unitless to make more robust.
 * You should be able to update ONLY these numbers to get a new type system */
export const TYPEUNITS = {
  bodyFont: {
    small: 18,
    large: 18,
    lineHeight: 28
  },
  typographyScale: {
    small: 1.38,
    large: 1.5
  },
  spacingScale: {
    small: 1.5,
    large: 2
  }
};

export const TYPESTYLES = {
  small: `
      font-size: ${getModularScale('typography', 'small', -1)}rem;
      line-height: 1.07;
      line-height: calc(((var(--line-height) * var(--capital-height)) - var(--valign)) * 1px);
      font-family: var(--font);
      font-weight: var(--font-weight-bold);
      font-feature-settings: c2sc, 'smcp';
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing);
    `,

  base: `
      ${getFontSize(0)}
      font-family: var(--font);
    `,

  large: `
      ${getFontSize(1)}
      font-family: var(--font);
    `,

  larger: `
      ${getFontSize(2)}
      font-family: var(--font);
      font-weight: var(--font-weight-regular);
    `,

  largest: `
      ${getFontSize(3)}
      font-family: var(--font);
      font-weight: var(--font-weight-bold);
    `
};

export const COLORS = {
  neutral: {
    lightest: `#ffffff`,
    lighter:  `#f8f8ff`,
    light:    `#f0f0f6`,
    dark:     `#adb7d8`,
    darker:   `#747f8d`,
    darkest:  `#000000`
  },

  primary: {
    base:     `#5849fe`
  },

  success: {
    base:     `#00E3AB`
  }
};

