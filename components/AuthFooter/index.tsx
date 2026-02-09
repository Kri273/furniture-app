import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

interface AuthFooterProps {
  type?: "signin" | "signup";
}

export default function AuthFooter({ type = "signup" }: AuthFooterProps) {
  const isSignUp = type === "signup";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isSignUp ? "Already have an account? " : "Don't have an account? "}
      </Text>
      <Pressable
        onPress={() => router.replace(isSignUp ? "/signin" : "/signup")}
      >
        <Text style={styles.linktext}>{isSignUp ? "Sign In" : "Sign Up"}</Text>
      </Pressable>
    </View>
  );
}
