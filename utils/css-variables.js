import getFontSize from "./typography/font-size";
import getLineHeight from "./typography/line-height";

export const BREAKPOINTS = {
  small: 320,
  medium: 770,
  large: 890,
  larger: 1248,
  largest: 1440
};

/* Typeface-specific data, mostly used for optical adjustments. */
export const TYPEFACES = {
  sourceCodePro: {
    fmCapitalHeight: 0.66,
    fmDescender: 0.273,
    fmAscender: 0.984
  },

  sourceSansPro: {
    fmCapitalHeight: 0.66,
    fmDescender: 0.273,
    fmAscender: 0.984
  },

  sourceSerifPro: {
    fmCapitalHeight: 0.66,
    fmDescender: 0.273,
    fmAscender: 0.984
  }
};

/* Base units of typography system.
 * Update these numbers to change how type is set throughout the app
 * TODO: Set line-height to be unitless to make more robust.
 * You should be able to update ONLY these numbers to get a new type system */
export const TYPEUNITS = {
  bodyFont: {
    small: 12,
    large: 12,
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
      ${getFontSize(-1, TYPEFACES.sourceSansPro)}
      font-family: var(--font-family-sans);
      font-weight: var(--font-weight-bold);
      font-feature-settings: "c2sc" 1, "smcp" 1;
      font-variant: all-small-caps;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing);
      --line-height: 1.575;
    `,

  base: `
      ${getFontSize(0, TYPEFACES.sourceSansPro)}
      font-family: var(--font-family-sans);
      --line-height: 2.355;
      --line-height-normal: 1.95;
    `,

  large: `
      ${getFontSize(1, TYPEFACES.sourceSansPro)}
      font-family: var(--font-family-sans);
      font-weight: var(--font-weight-bold);
      --line-height: 2.18;
    `,

  larger: `
      ${getFontSize(2, TYPEFACES.sourceSerifPro)}
      font-family: var(--font-family-sans);
      font-weight: var(--font-weight-regular);
      --line-height: 1.925;
    `,

  largest: `
      ${getFontSize(3, TYPEFACES.sourceSerifPro)}
      font-family: var(--font-family-serif);
      font-weight: var(--font-weight-bold);
      --line-height: 1.4;
    `
};

export const COLORS = {
  neutral: {
    lightest: `#ffffff`,
    lighter: `#f8f8ff`,
    light: `#f0f0f6`,
    base: `#D3D8E9`,
    dark: `#74758C`,
    darker: `#424773`,
    darkest: `#000000`
  },

  primary: {
    light: `#FFE3D9`,
    base: `hsla(245, 99%, 64%, 1)`
  },

  success: {
    base: `#00E3AB`
  },

  accent: {
    lighter: `#FFF3E2`,
    light: `#FFE2BC`,
    base: `#FFD099`,
    dark: `#D67200`
  }
};

export const SHADOWS = {
  inset: `inset 0 2px 4px 0 rgba(66,71,115,0.08)`
};
