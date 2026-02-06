import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    width: 90,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.card,
    marginRight: 12,
  },
  selected: {
    borderColor: Colors.primary,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    color: Colors.mutedText,
    fontWeight: "600",
  },
  selectedTitle: {
    color: Colors.text,
  },
});
