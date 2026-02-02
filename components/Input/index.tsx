import React, { useMemo, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { Pressable } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean; // parooli jaoks
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};
export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  secure,
  autoCapitalize = "none",
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const showEye = !!secure;
  const secureTextEntry = secure ? !isPasswordVisible : false;

  const eyeSource = useMemo(() => {
    if (!showEye) return null;
    return isPasswordVisible
      ? require("../../assets//images/icons/eye.png")
      : require("../../assets/images/icons/eye_closed.png");
  }, [showEye, isPasswordVisible]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputRow}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8D9BB5"
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          style={styles.input}
        />

        {showEye && (
          <Pressable
            onPress={() => setIsPasswordVisible((v) => !v)}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Näita või peida parool"
            style={styles.eyeButton}
          >
            <Image source={eyeSource!} style={styles.eyeIcon} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

