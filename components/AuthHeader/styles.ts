import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  title: {
    marginLeft: 8,
    fontSize: 26,
    fontFamily: "Montserrat-SemiBold",
    color: Colors.primary,
  },
});