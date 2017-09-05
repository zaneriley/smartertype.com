import getFontSize from "./typography/font-size.js";

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
    small: 19,
    large: 19,
    lineHeight: 28
  },
  typographyScale: {
    small: 1.2,
    large: 1.5
  },
  spacingScale: {
    small: 1.5,
    large: 2
  }
};

export const TYPESTYLES = {
  small: `
    ${getFontSize(-1)}
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

// export const SPACING = {
//   smaller: `${getModularScale(-2, 'small', spacing)}`,
//   small:   `${getModularScale(-1, 'small', spacing)}`,
//   medium:  `${getModularScale(0, 'small', spacing)}`,
//   large:   `${getModularScale(1, 'small', spacing)}`,
//   larger:  `${getModularScale(2, 'small', spacing)}`,
// }

export const COLORS = {
  neutral: {
    lightest: `#ffffff`,
    lighter: `#f8f8ff`,
    light: `#f0f0f6`,
    dark: `#adb7d8`,
    darker: `#747f8d`,
    darkest: `#000000`
  },

  primary: {
    base: `#5849fe`
  },

  success: {
    base: `#00E3AB`
  }
};
