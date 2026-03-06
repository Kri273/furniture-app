import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
container: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 24,
  height: 60,
},

side: {
  width: 32,
  alignItems: "center",
  justifyContent: "center",
},

center: {
  flex: 1,
  alignItems: "center",
},

title: {
  fontSize: 16,
  fontFamily: "Montserrat-Bold",
  fontWeight: "700",
  color: Colors.text
},
});
