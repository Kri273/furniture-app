import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  onBackPress?: () => void;
  icon?: React.ReactNode;
};

export default function AuthHeader({ title, icon, iconPosition = "left" }: Props & { iconPosition?: "left" | "right" }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.side}>
        {icon && iconPosition === "left" ? icon : null}
      </View>

      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.side}>
        {icon && iconPosition === "right" ? icon : null}
      </View>

    </View>
  );
}
