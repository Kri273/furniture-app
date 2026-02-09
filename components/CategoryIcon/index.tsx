import React from "react";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  icon: ImageSourcePropType;
  label: string;
  selected?: boolean;
  onPress?: () => void;
};

export default function CategoryIcon({
  icon,
  label,
  selected,
  onPress,
}: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View
        style={[styles.iconContainer, selected && styles.iconContainerSelected]}
      >
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={[styles.label, selected && styles.labelSelected]}>
        {label}
      </Text>
    </Pressable>
  );
}
