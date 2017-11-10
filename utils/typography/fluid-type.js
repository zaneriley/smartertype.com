import pxToRem from "../px-to-rem";
import { BREAKPOINTS, TYPEUNITS } from "../css-variables";

export default function getFluidType(
  minFont,
  maxFont,
  minScreen,
  maxScreen,
  units
) {
  if (!minFont) minFont = TYPEUNITS.bodyFont.small;
  if (!maxFont) maxFont = TYPEUNITS.bodyFont.large;
  if (!minScreen) minScreen = pxToRem(BREAKPOINTS.medium);
  if (!maxScreen) maxScreen = pxToRem(BREAKPOINTS.larger);
  if (!units) units = `rem`;
  return `
    calc(${minFont}${units} + ${maxFont - minFont} * (100vw - ${minScreen}${units}) / ${maxScreen - minScreen} * 16)
  `;
}
