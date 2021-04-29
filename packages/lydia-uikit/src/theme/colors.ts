import { Colors } from "./types";

// Yellow #F9D92E
// Red #E60040
// Blue #15B0F8
// Purple #9027E2
// Pink #D4008F
// Dark blue #2F1B6D

export const baseColors = {
  failure: "#E60C41",
  primary: "#F9D92E",
  primaryBright: "#15B0F8",
  primaryDark: "#0098A1",
  secondary: "#E60C41",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  avalanche: "#e84142",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#E60C41",
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#6b041d",
  textDisabled: "#BDC2C4",
  textSubtle: "#E60C41",
  // #da9ead
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #d4008f00 0%, #d4008f4a 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#E60C41",
  background: "#1B1B2F",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#4a4de7",
  tertiary: "#353547",
  text: "#fff8d2",
  textDisabled: "#666171",
  textSubtle: "#a0e4f1",
  borderColor: "#524B63",
  card: "#17223E",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #f9d92e00 0%, #e9456085 100%)",
  },
};
