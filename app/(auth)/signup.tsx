import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import AuthFooter from "../../components/AuthFooter";
import AuthHeader from "../../components/AuthHeader";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import Separator from "../../components/Separator";
import { styles } from "./signup.styles";

export default function SignupScreen() {
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!agree) {
      Alert.alert("Error", "Please agree to Terms & Privacy");
      return;
    }

    try {
      setLoading(true);
      await signUp(name, email, password);
      // Navigeerimine toimub AuthContext's
    } catch (error) {
      Alert.alert("Error", "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={() => router.back()} />

      <Input
        label="Name"
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
      />
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

      <Checkbox
        checked={agree}
        onChange={setAgree}
        label={
          <Text
            style={{
              fontSize: 13,
              color: "#4F63AC",
              fontFamily: "Montserrat-Medium",
            }}
          >
            I agree with{" "}
            <Text style={{ fontFamily: "Montserrat-Bold" }}>Terms</Text> &{" "}
            <Text style={{ fontFamily: "Montserrat-Bold" }}>Privacy</Text>
          </Text>
        }
      />

      <Button
        title={loading ? "Signing up..." : "Sign Up"}
        onPress={handleSignUp}
        disabled={loading}
      />

      <Separator text="Or sign up with" />

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
          marginBottom: 54,
        }}
      />

      <AuthFooter type="signup" />
    </View>
  );
}
