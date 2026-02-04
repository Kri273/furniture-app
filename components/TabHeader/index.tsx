import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  onBackPress?: () => void;
  icon?: React.ReactNode;
};

export default function AuthHeader({ title, icon }: Props) {
  return (
    <View style={styles.container}>
      {icon && <View style={{ marginRight: 8 }}>{icon}</View>}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
