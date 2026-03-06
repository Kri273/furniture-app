import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    width: 72,
    alignItems: "center",
    borderRadius: 14,
    marginRight: 10,
  },
  selected: {
    backgroundColor: Colors.text,
    color: Colors.white,
  },
  imageContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.card,
  },

  image: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    color: Colors.mutedText,
    fontFamily: "Nunito Sans",
    fontWeight: "400",
  },
  selectedTitle: {
    color: Colors.primary,
  },
});
