import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconContainer: {
    width: 44,
    height: 44,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  iconContainerSelected: {
    backgroundColor: Colors.text,
  },
  icon: {
    width: 44,
    height: 44,
  },
  label: {
    fontSize: 14,
    textAlign: "center",
    color: "#999",
  },
  labelSelected: {
    color: Colors.text,
    fontWeight: "600",
  },
});
