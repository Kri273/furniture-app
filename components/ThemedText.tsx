import { StyleSheet, Text, TextProps } from "react-native";

type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "defaultSemiBold";
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
        type === "defaultSemiBold" && styles.defaultSemiBold,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  defaultSemiBold: {
    fontSize: 16,
    fontWeight: "600",
  },
});
