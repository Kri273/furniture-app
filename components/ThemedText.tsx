import { StyleSheet, Text, TextProps } from "react-native";

type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "titleOrange";
};

export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        type === "title" && styles.title,
        type === "titleOrange" && styles.titleOrange,
        type === "default" && styles.default,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: "DMSerifDisplay",
    fontWeight: "700",
  },
  titleOrange: {
    fontSize: 40,
    fontFamily: "DMSerifDisplay",
    fontWeight: "700",
    color: "#FCA34D",
    textDecorationLine: "underline",
  },
  default: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    color: "#4F63AC",
  },
});
