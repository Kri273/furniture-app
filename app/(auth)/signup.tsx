import React, { useState } from "react";
import { View } from "react-native";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import { router } from "expo-router";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Separator from "../../components/Separator";
import AuthFooter from "../../components/AuthFooter";
import { styles } from "./signup.styles";


export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);


  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={() => router.back()} />

      <Input label="Name" placeholder="John Doe" value={name} onChangeText={setName} />
      <Input label="Email" placeholder="example@mail.com" value={email} onChangeText={setEmail} />
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
        label="I agree with Terms & Conditions"
      />




      <Button title="Sign Up" onPress={() => {}} />
    
<Separator text="Or sign up with" />

<AuthFooter></AuthFooter>

    </View>
  );
}

