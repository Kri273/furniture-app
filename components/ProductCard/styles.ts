import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    height: 260,
  },
  image: {
    borderRadius: 16,
    marginBottom: 10,
    height: 200,
  },
  title: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.darkGray,
    fontFamily: "Nunito Sans",
  },
  price: {
    marginBottom: 5,
    fontSize: 14,
    color: Colors.text,
    fontFamily: "Nunito Sans",
    fontWeight: "700",
  },
});
