import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: "Montserrat-Medium",
  },
  linktext: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: "Montserrat-SemiBold",
  },
});
