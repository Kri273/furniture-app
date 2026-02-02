export const Colors = {
  primary: "#4F63AC",
  secondary: "#FCA34D",
  text: "#303030",
  background: "#FFFFFF",
  grey: "#8D9BB5",
  placeholder: "#C5C5C5",
  line: "#DADADA",
  danger: "#E5484D",
  white: "#FFFFFF",

} as const;

export type ColorName = keyof typeof Colors;

