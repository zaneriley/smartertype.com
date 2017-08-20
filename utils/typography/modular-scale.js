import convertUnit from "../css-convert-unit.js";
import pxToRem from "../px-to-rem.js";

const variables = require("../css-variables.js");

export default function getModularScale(direction, scale) {
  let fontSize = variables.TYPEUNITS.bodyFont.small;
  let typeScale = variables.TYPEUNITS.typeScale.small;
  let modularSize = modularSize;

  if (scale === 'large') {
    fontSize = variables.TYPEUNITS.bodyFont.large;
    typeScale = variables.TYPEUNITS.typeScale.large;
  }

  if (direction < 0) {
    modularSize = fontSize / typeScale * direction * -1;
  } else if (direction === 0) {
    modularSize = fontSize;
  } else if (direction > 0) {
    modularSize = Math.pow(typeScale, direction) * fontSize;
  }

  const valueInPX = Math.floor(modularSize);
  const valueInREM = pxToRem(valueInPX);

  return valueInREM;

}
