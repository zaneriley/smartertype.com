import convertUnit from "../css-convert-unit.js";
import pxToRem from "../px-to-rem.js";

const variables = require("../css-variables.js");

/* TODO: Allow this to accept a spacing scale, not just type scale.
 * As of now, it only looks for type size and scales.
 * The function should take any predefined scale                             */

/* PARAMETERS

 * type:  boolean (e.g. type  || spacing)
 * size: boolean (e.g. small || large)
 * direction:  integer (e.g. 1, -2, 4)                                        */
export default function getModularScale(direction, scale) {
  let modularSize = modularSize;

  let baseSize = variables.TYPEUNITS.bodyFont.small;
  let typescale = variables.TYPEUNITS.typographyScale.small;

  if (scale === 'large') {
    baseSize = variables.TYPEUNITS.bodyFont.large;
    typescale = variables.TYPEUNITS.typographyScale.large;
  }

  if (direction < 0) {
    modularSize = baseSize / typescale * direction * -1;
  } else if (direction === 0) {
    modularSize = baseSize;
  } else if (direction > 0) {
    modularSize = Math.pow(typescale, direction) * baseSize;
  }


  const valueInPX = Math.floor(modularSize);
  const valueInREM = pxToRem(valueInPX);

  return valueInREM;

}
