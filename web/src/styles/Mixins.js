// Convert px to em
export function pxtoem(target, context = 16) {
  return `${target / context}em`;
}

// Convert px to pc
export function pxtopc(target, context) {
  return `${(target / context) * 100}%`;
}

// Convert px to vw
export function pxtovw(target) {
  return `${(target / 1920) * 100}vw`;
}

// Takes the viewport widths in pixels and the font sizes in rem
export function calcClamp(
  minFontSize,
  maxFontSize,
  minWidthPx = 512,
  maxWidthPx = 1280,
  pixelsPerRem = 16
) {
  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;
  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;
  return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem)`;
}

// --------------------------------

// Default base document font size
// Value stand on Bootstrap assertion of 16px default value from browsers
// But this is not a threat since rem will finally adapt relatively to any
// default value. However for sanity we use a variable.

// --------------------------------

// Helper to convert pixel value to rem value
export function remCalc(size, remCalcBaseFontSize = 16) {
  const remSize = size / remCalcBaseFontSize;
  return `${remSize}rem`;
}

// letter spacing
// justinmarsan.com/css-letter-spacing-in-photoshop-and-browsers/
/*
  .letter-spacing {
      letter-spacing: photoshop-letterspacing-to-ems(-10);
  }
  */
export function lsEm(val) {
  return `${val / 1000}em`;
}

export function lsPx(val, fontSize = 16) {
  return `${(val * fontSize) / 1000}px`;
}

// maintain aspect ratio
// https://css-tricks.com/snippets/sass/maintain-aspect-ratio-mixin/
export function aspectRatio(width, height) {
  return `
  position: relative;
  &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: calc((${height} / ${width}) * 100%);
  }
  > .content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
  }
  `;
}
