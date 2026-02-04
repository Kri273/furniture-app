import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/context/AuthContext";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabHeader from "../../components/TabHeader";
import CategoryIcon from "../../components/CategoryIcon";
import ProductCard from "../../components/ProductCard";

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable style={styles.iconButton}>
          <Image
            source={require("../../assets/images/icons/search.png")}
            style={styles.icon}
          />
        </Pressable>
        <TabHeader title="Find All You Need" />
      </View>
      <ScrollView
        horizontal
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <ThemedView style={styles.content}>
          <CategoryIcon
            icon={require("../../assets/images/icons/popular.png")}
            label="Popular"
          />
          <CategoryIcon
            icon={require("../../assets/images/icons/chair.png")}
            label="Chair"
          />
          <CategoryIcon
            icon={require("../../assets/images/icons/table.png")}
            label="Table"
          />
          <CategoryIcon
            icon={require("../../assets/images/icons/armchair.png")}
            label="Armchair"
          />
          <CategoryIcon
            icon={require("../../assets/images/icons/bed.png")}
            label="Bed"
          />
          <CategoryIcon
            icon={require("../../assets/images/icons/lamp.png")}
            label="Lamp"
          />
        </ThemedView>
      </ScrollView>
      <View style={styles.content}>
        <ProductCard
          image={require("@/assets/images/lamp_image.png")}
          title="Black Simple Lamp"
          price={12.00}
        />
        <ProductCard
          image={require("@/assets/images/table_image.png")}
          title="Minimal Stand"
          price={25.00}
        />
        <ProductCard
          image={require("@/assets/images/chair_image.png")}
          title="Coffee Chair"
          price={20.00}
        />
        <ProductCard
          image={require("@/assets/images/desk_image.png")}
          title="Simple Desk"
          price={50.00}
        />
      </View>




    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    position: "relative",
  },
  iconButton: {
    position: "absolute",
    left: 24,
    marginTop: 18,
    zIndex: 1,
  },
  icon: {
    height: 24,
    width: 24,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 24,
    flexDirection: "row",
    gap: 25,
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  categoryIcon: {
    width: 44,
    height: 44,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    textAlign: "center",
  },
  title: {
    marginBottom: 16,
    textAlign: "center",
  },
});