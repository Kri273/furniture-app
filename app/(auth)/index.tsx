import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.ThemedView}>
        <Image
          source={require("../../assets/images/10050 1.png")}
          style={styles.image}
        />

        <ThemedView style={{ alignItems: "center", marginBottom: 24 }}>
          <ThemedText type="title">You’ll Find</ThemedText>
          <ThemedText type="titleOrange">All you need</ThemedText>
          <ThemedText type="title">Here!</ThemedText>
        </ThemedView>

        <Button
          title="Sign Up"
          onPress={() => router.push("/signup")}
          style={styles.button}
        />

        <Pressable style={styles.signin} onPress={() => router.push("/signin")}>
          <ThemedText type="default" style={styles.signinText}>
            Sign In
          </ThemedText>
        </Pressable>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 357,
    height: 209,
    marginTop: 140,
    marginBottom: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  ThemedView: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    marginTop: 32,
    width: 303,
    height: 60,
  },
  signin: {
    width: 303,
    height: 60,
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  signinText: {
    textAlign: "center",
  },
});
