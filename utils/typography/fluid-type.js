const variables = require("../css-variables.js");

export default function getFluidType(
  minFont,
  maxFont,
  minScreen,
  maxScreen,
  units
) {
  if (!minFont) minFont = variables.TYPEUNITS.bodyFont.small;
  if (!maxFont) maxFont = variables.TYPEUNITS.bodyFont.large;
  if (!minScreen) minScreen = variables.BREAKPOINTS.medium;
  if (!maxScreen) maxScreen = variables.BREAKPOINTS.large;
  if (!units) units = `rem`;
  return `
    calc(${minFont}${units} + ${maxFont - minFont} * (100vw - ${minScreen}${units}) / ${maxScreen - minScreen});
  `;
}
