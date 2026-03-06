import React from "react";
import { Pressable, Text, View } from "react-native";
import type { Category } from "../../data/categories";
import { styles } from "./styles";

type Props = {
  item: Category;
  selected?: boolean;
  onPress?: () => void;
};

export function CategoryBox({ item, selected = false, onPress }: Props) {
  const IconComponent = item.image;

  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
    >
      <View style={[styles.imageContainer, selected && styles.selected]}>
      <View style={styles.image}>
        <IconComponent width={28} height={28} />
      </View>
      </View>
      <Text
        style={[styles.title, selected && styles.selectedTitle]}
        numberOfLines={1}
      >
        {item.title}
      </Text>
    </Pressable>
  );
}
