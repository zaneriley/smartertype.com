import getFontSize from "./typography/font-size";
import getModularScale from "./typography/modular-scale";
import getLineHeight from "./typography/line-height";

// minScreen, maxScreen, and units are optional
export const BREAKPOINTS = {
  small: 320,
  medium: 600,
  large: 1248,
  larger: 1440
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
    large: 1.618
  },
  spacingScale: {
    small: 1.5,
    large: 2
  }
};

export const TYPESTYLES = {
  small: `
     font-size: ${getModularScale('typography', 'small', -1)}rem;
     line-height: ${getLineHeight(getModularScale('typography', 'small', -1))};
     font-weight: var(--font-weight-bold);
     font-feature-settings: c2sc, 'smcp';
     text-transform: uppercase;
     letter-spacing: var(--letter-spacing);
    `,

  base: `
     ${getFontSize(0)}
    `,

  large: `
     ${getFontSize(1)}
    `,

  larger: `
     ${getFontSize(2)}
     font-family: var(--font-family-serif);
     font-weight: var(--font-weight-regular);
    `,

  largest: `
     ${getFontSize(3)}
     font-family: var(--font-family-serif);
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
