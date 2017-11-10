import getModularScale from "./modular-scale";
import getLineHeight from "./line-height";
import getFluidType from "./fluid-type";
import { BREAKPOINTS } from "../css-variables";

export default function getFontSize(int) {
  const fontSizeSmall = getModularScale("typography", "small", int);
  const fontSizeLarge = getModularScale("typography", "large", int);
  const fluidType = getFluidType(fontSizeSmall, fontSizeLarge);
  const mediumBreakPoint = BREAKPOINTS.medium;
  const largeBreakPoint = BREAKPOINTS.larger;

  return ` 
    --distanceBottom: var(--fm-descender);
    --distanceTop: calc(var(--fm-ascender) - var(--fm-capitalHeight));
    --capital-height: calc(${fontSizeSmall * 16} * var(--fm-capitalHeight));
    --valign: calc((var(--distanceBottom) - var(--distanceTop)) * (${fontSizeSmall *
      16}));
    
    --computedFontSize: calc(var(--capital-height) / var(--fm-capitalHeight));
    --computedLineHeight: calc(((var(--line-height) * var(--capital-height)) - var(--valign)) * 1px);
    
    font-size: calc((var(--computedFontSize) / 16) * 1rem);
    line-height: var(--computedLineHeight);

    @media screen and (min-width: ${mediumBreakPoint}px) {
      --capital-height: calc(${fluidType} * var(--fm-capitalHeight));
    }
    @media screen and (min-width: ${largeBreakPoint}px) {
      --capital-height: calc(${fontSizeLarge * 16} * var(--fm-capitalHeight));
    }
  `;
}
