import { hexToRgb } from "../utils/utils";

class ColorMode {
  lightMode: string;
  r: number;
  g: number;
  b: number;
  alpha: number;
  constructor(a: string, b: string = "") {
    this.lightMode = a;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.alpha = 0;
  }
  toColorStr() {
    return `rgba(${this.r},${this.g},${this.b},${this.alpha})`;
  }
  opacity(a: number) {
    this.alpha = a;
    this.toRgb(this.lightMode);
    return this.toColorStr();
  }
  toRgb(a: string, mode: "light" | "dark" = "light") {
    if (mode === "light") {
      if (this.r && this.g && this.b) return;
      const { r, g, b } = hexToRgb(this.lightMode);
      this.r = r;
      this.g = g;
      this.b = b;
    }
  }
}

export const Colors = {
  primary: new ColorMode("#111b2f"),
  secondary: new ColorMode("#3399CC"),
  accent: new ColorMode("#00ADEE"),
  basicGrey: new ColorMode("#929497"),
  lightBlue: new ColorMode("#3FB0DB"),
};

export const fontSizes = {
  lg: 18,
};

const ThemeConfig = () => {
  return {
    ...Colors,
    ...fontSizes,
  };
};

export default ThemeConfig;
