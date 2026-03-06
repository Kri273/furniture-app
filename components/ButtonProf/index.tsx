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
  subTitle?: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
};

export default function Button({
  title,
  subTitle,
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
        <View style={styles.text}>
          <Text style={[styles.title, textStyle]}>{title}</Text>
          {subTitle ? (
            <Text style={[styles.subTitle, textStyle]}>{subTitle}</Text>
          ) : null}
        </View>
        {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
      </View>
    </Pressable>
  );
}
