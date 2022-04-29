
export const addAlpha = (color: string = '', alpha: number) => {
  const [r, g, b] = color
    .replace(/^#/, '')
    .match(/.{2}/g)!
    .map(hex => parseInt(hex, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};