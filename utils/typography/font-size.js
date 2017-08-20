import getModularScale from "./modular-scale.js";
import getLineHeight from "./line-height.js";
import getFluidType from "./fluid-type.js";

const variables = require("../css-variables.js");

export default function getFontSize(int) {

  const fontSizeSmall    = getModularScale(int, 'small');
  const fontSizeLarge    = getModularScale(int, 'large');
  const lineHeight       = getLineHeight(fontSizeSmall);
  const fluidType        = getFluidType(fontSizeSmall, fontSizeLarge);
  const mediumBreakPoint = variables.BREAKPOINTS.medium;
  const largeBreakPoint  = variables.BREAKPOINTS.large;

  return `
    font-size: ${fontSizeSmall}rem;
    line-height: ${lineHeight};
    @media screen and (min-width: ${mediumBreakPoint}rem) {
      font-size: ${fluidType};
    }
    @media screen and (min-width: ${largeBreakPoint}rem) {
      font-size: ${fontSizeLarge}rem;
    }
  ` ;
};
