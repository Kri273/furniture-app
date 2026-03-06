import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    width: 44,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 14,
    marginRight: 12,
  },
  selected: {
    backgroundColor: Colors.text,
    color: Colors.white,
  },
  imageContainer: {
    width: 44,
    height: 44,    
    borderRadius: 12,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.card,
  },
  
  image: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    color: Colors.mutedText,
    fontFamily: "Nunito Sans",
    fontWeight: "400"
  },
  selectedTitle: {
    color: Colors.primary,
  },
});
