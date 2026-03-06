import BackProducts from "@/assets/images/back_products.svg";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { Colors } from "../constants/Colors";
import { products } from "../data/products";
import { useFavorites } from "@/context/FavoritesContext";

export default function ProductScreen() {
  const router = useRouter();
  const { toggleFavorite, isFavorite } = useFavorites();

  const { id } = useLocalSearchParams<{ id?: string }>();
  const productId = id ? Number(id) : NaN;
  const product = products.find((p) => p.id === productId) || {
    id: 0,
    title: "Unknown Product",
    image: require("@/assets/images/chair_image.png"),
    category: 0,
    price: 0,
    description: "No description available.",
  };


  const handleContactSeller = () => {
    console.log("Contact seller");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <Pressable onPress={handleGoBack} style={styles.backButton}>
            <BackProducts style={styles.backIcon} />
          </Pressable>
        </View>

        {/* Should add more images and the display lines */}
        <View style={styles.imageContainer}>
          <Image source={product.image} style={styles.productImage} />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.productTitle}>{product.title}</Text>
          </View>

          <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>

          <Text style={styles.description}>
            {product.description || "No description available."}
          </Text>

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => toggleFavorite(product.id)}
              style={styles.favoriteButton}
            >
              <Image
                source={
      isFavorite(product.id)
                    ? require("@/assets/images/icons/favorites-active.png")
                    : require("@/assets/images/icons/favorites.png")
                }
                style={styles.favoriteIcon}
              />
            </Pressable>
            <View style={{ flex: 1 }}>
              <Button title="Contact Seller" onPress={handleContactSeller} style={styles.shadowStyle} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderRadius: 6,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    width: "100%",
    height: 400,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -70,
    zIndex: -1,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
    marginTop: -40,
    zIndex: 10,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    height: "100%",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  productTitle: {
    fontSize: 24,
    fontFamily: "Gelasio-Medium",
    color: Colors.text,
    flex: 1,
    marginRight: 16,
  },
  price: {
    fontSize: 28,
    fontFamily: "Montserrat-Bold",
    color: Colors.text,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    color: Colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: "DM_Sans",
    color: Colors.mutedText,
    lineHeight: 22,
    marginBottom: 32,
  },
  favoriteButton: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondaryButton,
    borderRadius: 8,
  },
  favoriteIcon: {
    width: 24,
    height: 24,
    backgroundColor: Colors.secondaryButton,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 48,
    alignItems: "center",
    gap: 10,
  },
  shadowStyle: {
  elevation: 6,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 6,
},
});
