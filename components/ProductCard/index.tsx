import React from "react";
import {
    Image,
    ImageSourcePropType,
    Pressable,
    Text
} from "react-native";
import { styles } from "./styles";

type Props = {
  image: ImageSourcePropType;
  title: string;
  price: number;
  onPress?: () => void;
};

export default function ProductCard({ image, title, price, onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>$ {price.toFixed(2)}</Text>
    </Pressable>
  );
}
