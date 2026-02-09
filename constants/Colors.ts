export const Colors = {
  primary: "#4F63AC",
  secondary: "#FCA34D",
  text: "#303030",
  background: "#FFFFFF",
  gray: "#8D9BB5",
  darkGray: "#606060",
  placeholder: "#C5C5C5",
  line: "#DADADA",
  danger: "#E5484D",
  white: "#FFFFFF",
  mutedText: "#999999",
  card: "#F5F5F5",
  secondaryButton: "#F0F0F0"


} as const;

export type ColorName = keyof typeof Colors;

