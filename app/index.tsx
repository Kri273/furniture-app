import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import  Button  from "../components/Button";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Image
          source={require("../assets/images/10050 1.png")}
          style={styles.image}
        />

        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">You’ll Find</ThemedText>
          <ThemedText type="title" style={styles.titleOrangeContainer}>
            All you need
          </ThemedText>
          <ThemedText type="title">Here!</ThemedText>
        </ThemedView>

        <Button title="Sign Up" onPress={() => router.push("/signup")} style={styles.button} />

        <Pressable style={styles.signin} onPress={() => router.push("/signin")}>
          <ThemedText type="defaultSemiBold" style={styles.signinText}>
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
    marginTop: 48,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  titleContainer: {
    alignItems: "center",
    gap: 8,
    marginTop: 16,
  },
  titleOrangeContainer: {
    color: "#FCA34D",
    textDecorationLine: "underline",
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
    color: "#4F63AC",
    fontSize: 16,
    textAlign: "center",
  },
});
  