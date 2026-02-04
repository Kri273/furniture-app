import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
};

export default function Button({
  title,
  onPress,
  disabled,
  style,
  textStyle,
  icon,
  iconStyle,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
      accessibilityRole="button"
    >
      <View style={styles.content}>
        {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
        <Text style={[styles.title, textStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
}
