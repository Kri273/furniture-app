import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  onBackPress?: () => void;
};

export default function AuthHeader({ title, onBackPress }: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onBackPress}
                hitSlop={10}
        disabled={!onBackPress}
        style={styles.backButton}
        accessibilityRole="button"
        accessibilityLabel="Tagasi"
      >
        <Image source={require("../../assets/images/icons/auth_back.png")} style={styles.backIcon} />
      </Pressable>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
