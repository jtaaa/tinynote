//--> Breakpoints
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const breakpoints: any = ['40em', '52em', '64em', '80em'];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

//--> Colors
const colors = {
  black: '#000e1a',
  white: '#fff',
  blue: '#007ce0',
  navy: '#004175',
};

//--> Space
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

//--> FontSizes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fontSizes: any = [12, 14, 16, 18, 24, 32, 48, 64, 72];

// aliases
fontSizes.S = fontSizes[0];
fontSizes.M = fontSizes[1];
fontSizes.HS = fontSizes[2];
fontSizes.HM = fontSizes[3];
fontSizes.HL = fontSizes[4];
fontSizes.HXL = fontSizes[5];

export default {
  breakpoints,
  colors,
  space,
  fontSizes,
};
