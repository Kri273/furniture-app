import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useAuth } from "@/context/AuthContext";
import { Alert, Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import TabHeader from "../../components/TabHeader";
import ButtonProf from "../../components/ButtonProf";

import { router, useRouter } from "expo-router";

import arrow_r from "../../assets/images/icons/arrow-ri.png";

export default function ProfileScreen() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleNewListing = () => {
    router.push("/profile/new-listing");
  };

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
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <TabHeader
        title="Profile"
        iconPosition="right"
        icon={
          <Pressable
            onPress={handleSignOut}
            accessibilityRole="button"
            accessibilityLabel="Log out"
          >
            <Image source={require("../../assets/images/icons/Logout.png")} />
          </Pressable>
        }
      />
      <View style={styles.container}>
        <View style={styles.topSection}>
          {user && (
            <ThemedView>
              <ThemedText type="default" style={styles.name}>
                {user.name}
              </ThemedText>
              <ThemedText type="default" style={styles.email}>
                {user.email}
              </ThemedText>
              <View>
                <ButtonProf
                  title="My Listings"
                  subTitle="Already have 10 listings"
                  onPress={handleNewListing}
                  icon={arrow_r}
                />
                <ButtonProf
                  title="Settings"
                  subTitle="Account, FAQ, Contact"
                  onPress={() => router.push("/profile/settings")}
                  icon={arrow_r}
                />
              </View>
            </ThemedView>
          )}
        </View>

        <View>
          <Button
            title="Add a new listing"
            onPress={handleNewListing}
            style={{ margin: 18 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  topSection: {
    flexShrink: 1,
  },
  name: {
    color: Colors.text,
    fontFamily: "Nunito-Sans",
    fontWeight: 700,
    fontSize: 20,
  },
  email: {
    color: Colors.darkGray,
    fontFamily: "Nunito-Sans",
    fontWeight: 400,
    fontSize: 14,
    marginVertical: 12,
    lineHeight: 15,
  },
});
