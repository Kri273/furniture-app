import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },
  pressed: {
    opacity: 0.75,
  },
  box: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.grey,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
  boxChecked: {
    backgroundColor: Colors.grey,
  },
  checkIcon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
  },
});
