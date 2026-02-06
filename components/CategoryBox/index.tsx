import React from "react";
import { Text, Image, Pressable } from "react-native";
import type { Category } from "../../data/categories";
import { styles } from "./styles";

type Props = {
  item: Category;
  selected?: boolean;
  onPress?: () => void;
};

export function CategoryBox({ item, selected = false, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.container, selected && styles.selected]}>
      <Image source={item.image} style={styles.image} />
      <Text style={[styles.title, selected && styles.selectedTitle]} numberOfLines={1}>
        {item.title}
      </Text>
    </Pressable>
  );
}

