import React from "react";
import { Image, Pressable, View } from "react-native";
import { styles } from "./styles";

type Props = {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: React.ReactNode;
};

export default function Checkbox({ checked, onChange, label }: Props) {
  return (
    <Pressable
      onPress={() => onChange(!checked)}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      hitSlop={6}
    >
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked ? (
          <Image
            source={require("../../assets/images/icons/checkbox.png")}
            style={styles.checkIcon}
          />
        ) : null}
      </View>

      {label ? <View style={{ marginLeft: 10 }}>{label}</View> : null}
    </Pressable>
  );
}
