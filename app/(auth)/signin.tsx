import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import AuthFooter from "../../components/AuthFooter";
import AuthHeader from "../../components/AuthHeader";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Separator from "../../components/Separator";
import { styles } from "../auth.styles";

export default function SigninScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      await signIn(email, password);
      // Navigeerimine toimub AuthContext's
    } catch (error) {
      Alert.alert("Error", "Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" onBackPress={() => router.back()} />

      <Input
        label="E-mail"
        placeholder="example@mail.com"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label="Password"
        placeholder="••••••••••"
        value={password}
        onChangeText={setPassword}
        secure
      />

      <Button
        title={loading ? "Signing in..." : "Sign In"}
        onPress={handleSignIn}
        disabled={loading}
      />

      <Separator text="Or sign in with" />

      <Button
        title=""
        onPress={() => {}}
        icon={require("../../assets/images/icons/google.png")}
        iconStyle={{ width: 28, height: 28, marginRight: 0 }}
        style={{
          backgroundColor: "#3F4A59",
          marginTop: 12,
          width: "40%",
          height: 60,
          borderRadius: 14,
          alignSelf: "center",
          marginBottom: 50,
        }}
      />

      <AuthFooter type="signin" />
    </View>
  );
}
