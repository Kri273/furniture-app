import TabHeader from "@/components/TabHeader";
import { Colors } from "@/constants/Colors";
import { useFavorites } from "@/context/FavoritesContext";
import { products } from "@/data/products";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DeleteIcon from "../../assets/images/icons/Shape.svg";

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useFavorites();

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Favorites" />

      <FlatList
        data={favoriteProducts}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
            </View>

            <Pressable
              style={styles.deleteIcon}
              onPress={() => removeFavorite(item.id)}
            >
              <DeleteIcon width={24} height={24} />
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 20,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 14,
  },

  info: {
    flex: 1,
    marginLeft: 20,
    top: 0,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Nunito-sans",
    color: Colors.darkGray,
    marginBottom: 6,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nunito-sans",
    color: Colors.text,
  },
  deleteIcon: {
    position: "absolute",
    top: 20,
    right: 25,
    zIndex: 10,
  },

  separator: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginHorizontal: 24,
    borderRadius: 10,
  },
});
