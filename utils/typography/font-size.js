import getModularScale from "./modular-scale.js";
import getLineHeight from "./line-height.js";
import getFluidType from "./fluid-type.js";

const variables = require("../css-variables.js");

export default function getFontSize(int) {

  const fontSizeSmall    = getModularScale('typography', 'small', int);
  const fontSizeLarge    = getModularScale('typography', 'large', int);
  const lineHeight       = getLineHeight(fontSizeSmall);
  const fluidType        = getFluidType(fontSizeSmall, fontSizeLarge);
  const mediumBreakPoint = variables.BREAKPOINTS.medium;
  const largeBreakPoint  = variables.BREAKPOINTS.large;

  return `
    font-size: ${fontSizeSmall}rem;
    line-height: ${lineHeight};
    @media screen and (min-width: ${mediumBreakPoint}px) {
      font-size: ${fluidType};
    }
    @media screen and (min-width: ${largeBreakPoint}px) {
      font-size: ${fontSizeLarge}rem;
    }
  ` ;
};
