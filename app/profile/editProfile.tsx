import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import { Colors } from "@/constants/Colors";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import TabHeader from "../../components/TabHeader";

export default function EditProfileScreen() {
  const { user } = useAuth();
  const router = useRouter();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = () => {
    Alert.alert(
      "Saved (Temp save)",
      "I didn't have time for backend :("
    );

    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TabHeader title="Edit Profile" />

        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save Changes</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 14,
    color: Colors.darkGray,
    marginTop: 20,
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#F6F7F9",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: Colors.text,
  },

  saveButton: {
    backgroundColor: Colors.primary,
    marginTop: 40,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },

  saveText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});