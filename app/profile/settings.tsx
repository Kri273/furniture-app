import { Colors } from "@/constants/Colors";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import arrow_r from "../../assets/images/icons/arrow-ri.png";
import EditIcon from "../../assets/images/icons/edit.svg";
import ButtonProf from "../../components/ButtonProf";
import TabHeader from "../../components/TabHeader";

export default function SettingsScreen() {
  const { user } = useAuth();
  const router = useRouter();

  const handleButton = () => {
    console.log("Button clicked");
  };

  const handleEditProfile = () => {
  router.push("/profile/editProfile");
};

  const contactUs = () => {
    Linking.openURL("mailto:b27628591@gmail.com");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TabHeader title="Settings" />

        {/* PERSONAL INFO */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={handleEditProfile}>
            <EditIcon width={20} height={20} style={styles.editIcon} />
          </Pressable>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{user?.name}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user?.email}</Text>
        </View>

        <Text style={styles.sectionTitle}>Help Center</Text>

        <ButtonProf title="FAQ" onPress={handleButton} icon={arrow_r} />
        <ButtonProf title="Contact Us" onPress={contactUs} icon={arrow_r} />
        <ButtonProf
          title="Privacy & Terms"
          onPress={handleButton}
          icon={arrow_r}
        />
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
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: Colors.darkGray,
    marginBottom: 15,
    marginTop: 20,
  },
  infoCard: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: 16,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 400,

    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: Colors.darkGray,
  },
  value: {
    fontSize: 16,
    color: Colors.primary,
    marginTop: 6,
    fontWeight: "600",
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 18,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
  },
  cardText: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "600",
  },
});
