import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    shadowColor: "#8A959E",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    height: 80,
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    marginVertical: 12,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 12,
    resizeMode: "contain",
  },
  text: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: Colors.primary,
    fontFamily: "Nunito-Sans",
    fontWeight: 700,
  },
  subTitle: {
    fontFamily: "Nunito-Sans",
    fontWeight: 400,
    fontSize: 12,
    color: Colors.darkGray,
    marginTop: 4,
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    opacity: 0.5,
  },
});
