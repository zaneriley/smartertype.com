import convertUnit from "../css-convert-unit.js";
import pxToRem from "../px-to-rem.js";

const variables = require("../css-variables.js");

export default function getModularScale(direction, scale) {

  let fontSize = variables.TYPEUNITS.bodyFont.small;
  if (!scale) scale = variables.TYPEUNITS.typeScale.small;

  if (scale === 'large') {
    fontSize = variables.TYPEUNITS.bodyFont.large;
    scale = variables.TYPEUNITS.typeScale.large;
  }



  console.log(fontSize);
  // Normalize fontSizes
  // Find the upper bounds for fontSize values
  const fontSizeHigh = Math.pow(scale, 1) * fontSize;



  for (let i = 1; i < fontSize.length; i++) {
    // shift up if value too low
    while (fontSize[i] / 1 < fontSize[0] / 1) {
      fontSize[i] = Math.pow(scale, 1) * fontSize[i];
    }
    // Shift down if too high
    while (fontSize[i] / 1 >= fontSizeHigh / 1) {
      fontSize[i] = Math.pow(scale, -1) * fontSize[i];
    }
  }

  // Figure out what fontSize to use with modulo
  const rBase = Math.round(
    (direction / fontSize.length - Math.floor(direction / fontSize.length)) *
      fontSize.length
  );

  const valueInPX =
    Math.pow(scale, Math.floor(direction / fontSize.length)) * fontSize[rBase];

  return valueInPX;

}
