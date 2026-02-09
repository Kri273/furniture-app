import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    height: 260,
  },
  image: {
    borderRadius: 16,
    marginBottom: 10,
    height: 200,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
  },
  price: {
    marginTop: 4,
    fontSize: 13,
    color: Colors.mutedText,
    fontWeight: "600",
  },
});
