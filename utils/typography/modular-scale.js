import convertUnit from "../css-convert-unit.js";
import pxToRem from "../px-to-rem.js";
import { TYPEUNITS } from "../css-variables.js";

/* TODO: Allow this to accept a spacing scale, not just type scale.
 * As of now, it only looks for type size and scales.
 * The function should take any predefined scale                             */

/* PARAMETERS

 * typeOfScale:      boolean (typography || spacing)
 * sizeOfScale:      boolean (small || large)
 * direction: integer                                                        */
export default function getModularScale(typeOfScale, sizeOfScale, direction) {
  if (!typeOfScale) typeOfScale = "typography";
  if (!sizeOfScale) sizeOfScale = "small";

  let modularSize = modularSize;
  let baseSize = baseSize;
  let scale = scale;

  if (typeOfScale === "typography") {
    if (sizeOfScale === "small") {
      baseSize = TYPEUNITS.bodyFont.small;
      scale = TYPEUNITS.typographyScale.small;
    } else {
      baseSize = TYPEUNITS.bodyFont.large;
      scale = TYPEUNITS.typographyScale.large;
    }
  } else if (typeOfScale === "spacing") {
    baseSize = TYPEUNITS.bodyFont.lineHeight;
    if (sizeOfScale === "small") {
      scale = TYPEUNITS.spacingScale.small;
    } else {
      scale = TYPEUNITS.spacingScale.large;
    }
  }

  if (direction < 0) {
    modularSize = baseSize / (scale * direction) * -1;
  } else if (direction === 0) {
    modularSize = baseSize;
  } else if (direction > 0) {
    modularSize = Math.pow(scale, direction) * baseSize;
  }

  const valueInPX = Math.round(modularSize);
  const valueInREM = pxToRem(valueInPX);

  return valueInREM;
}
