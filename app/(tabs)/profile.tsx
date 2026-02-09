import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/context/AuthContext";
import { Alert, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { Image } from "react-native";

export default function ProfileScreen() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut();
          } catch (error) {
            Alert.alert("Error", "Failed to sign out");
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Profile
        </ThemedText>

        {user && (
          <ThemedView style={styles.userInfo}>
            <ThemedText type="default" style={styles.label}>
              Name:
            </ThemedText>
            <ThemedText type="default" style={styles.value}>
              {user.name}
            </ThemedText>

            <ThemedText type="default" style={styles.label}>
              Email:
            </ThemedText>
            <ThemedText type="default" style={styles.value}>
              {user.email}
            </ThemedText>
          </ThemedView>
        )}


        <Pressable
                onPress={handleSignOut}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel="Log out"
              >
                <Image source={require("../../assets/images/icons/Logout.png")}/>
              </Pressable>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginBottom: 32,
    textAlign: "center",
  },
  userInfo: {
    marginBottom: 32,
    padding: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
  },
  label: {
    marginTop: 12,
    fontSize: 14,
    color: "#666",
  },
  value: {
    marginTop: 4,
    fontSize: 16,
  },
});
