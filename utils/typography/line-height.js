/* Requires fontSize in REM */
import pxToRem from "../px-to-rem.js";

const variables = require("../css-variables.js");

export default function getLineHeight(fontSize) {
  const baseFontSize = variables.TYPEUNITS.bodyFont.small;
  const baseLineHeight = variables.TYPEUNITS.bodyFont.lineHeight;
  const roundToNearestLine = "quarter";
  const minLinePadding = 2;

  const fontSizeInPx = fontSize * 16;

  let line = Math.ceil(4 * fontSizeInPx / baseLineHeight) / 4;

  if (line <= 0.5) {
  } else if (line * baseLineHeight - baseFontSize < minLinePadding * 2) {
    if (roundToNearestLine === "quarter") {
      line += 0.25;
    } else if (roundToNearestLine === "half") {
      line += 0.5;
    } else {
      line += 1;
    }
  }

  const length = line * baseLineHeight;

  let rhythmLength = length / fontSizeInPx ;

  return rhythmLength;

}
