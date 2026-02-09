import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    marginTop: 24,
    marginBottom: 26,
  },
  title: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    color: Colors.text,
    textAlign: "center",
    height: 20,
  },
});
