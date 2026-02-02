import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import React from "react";
import { styles } from "./styles";

export default function AuthFooter() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>
        Already have an account?{" "}
        <Pressable onPress={() => router.push("/signup")}>
          <Text style={styles.signintext}>Sign In</Text>
        </Pressable>
      </Text>
    </View>
  );
}
