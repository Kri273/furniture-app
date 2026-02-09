import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 38,
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.line,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
    color: Colors.primary,
    fontFamily: "Montserrat-SemiBold",
  },
});
