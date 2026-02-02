import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    color: Colors.primary,
    marginBottom: 6,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    paddingVertical: 0, // Android: hoiab kõrguse kontrolli all
  },
  eyeButton: {
    paddingLeft: 10,
  },
  eyeIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
});
