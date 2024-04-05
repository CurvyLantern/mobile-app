export function hexToRgb(hex: string) {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Parse hexadecimal into RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Return RGB values
  return {
    r: r,
    g: g,
    b: b,
  };
}
