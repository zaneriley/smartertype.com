// minScreen, maxScreen, and units are optional
export const SIZES = {
  small: 320 / 16,
  medium: 600 / 16,
  large: 1248 / 16,
  larger: 1440 / 16
};

export function responsiveSize(minFont, maxFont, minScreen, maxScreen, units) {
  if (!minFont) minFont = 1.125;
  if (!maxFont) maxFont = 1.25;
  if (!minScreen) minScreen = SIZES.medium;
  if (!maxScreen) maxScreen = SIZES.large;
  if (!units) units = "rem";
  return `calc(${minFont}${units} + ${maxFont -
    minFont} * (100vw - ${minScreen}${units}) / ${maxScreen - minScreen});`;
}
