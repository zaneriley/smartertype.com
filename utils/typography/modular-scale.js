import convertUnit from "../css-convert-unit.js";
import pxToRem from "../px-to-rem.js";

const variables = require("../css-variables.js");

/* TODO: Allow this to accept a spacing scale, not just type scale.
 * As of now, it only looks for type size and scales.
 * The function should take any predefined scale                             */

/* PARAMETERS
 * direction: integer (e.g. 1, -2, 4)
 * scale:     string  (e.g. 'small' || 'large')                               */
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
