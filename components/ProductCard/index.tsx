import React, { useMemo } from "react";
import { Dimensions, Image, Pressable, Text } from "react-native";
import type { Product } from "../../data/products";
import { styles } from "./styles";

type Props = {
  item: Product;
  onPress?: () => void;
};

export default function ProductCard({ item, onPress }: Props) {
  const width = useMemo(() => {
    const screen = Dimensions.get("window").width;
    const horizontalPadding = 24 * 2;
    const gap = 16;
    return (screen - horizontalPadding - gap) / 2;
  }, []);

  return (
    <Pressable style={[styles.container, { width }]} onPress={onPress}>
      <Image
        source={item.image}
        style={[styles.image, { width, height: 200 }]}
      />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
    </Pressable>
  );
}
