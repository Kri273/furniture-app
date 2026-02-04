import React from "react";
import {
    Image,
    ImageSourcePropType,
    Pressable,
    Text
} from "react-native";
import { styles } from "./styles";

type Props = {
  icon: ImageSourcePropType;
  label: string;
  onPress?: () => void;
};

export default function CategoryIcon({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}
