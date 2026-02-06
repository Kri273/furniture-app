import { useAuth } from "@/context/AuthContext";
import React, { useMemo, useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryBox } from "../../components/CategoryBox";
import ProductCard from "../../components/ProductCard";
import TabHeader from "../../components/TabHeader";
import { Colors } from "../../constants/Colors";
import { categories } from "../../data/categories";
import { products } from "../../data/products";

export default function HomeScreen() {
  const { user } = useAuth();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );

  const filteredProducts = useMemo(() => {
    if (!selectedCategoryId) return products; // Popular / kõik
    return products.filter((p) => p.category === selectedCategoryId);
  }, [selectedCategoryId]);

  const renderHeader = () => (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      keyExtractor={(item, index) => String(item.id ?? `popular-${index}`)}
      renderItem={({ item }) => (
        <CategoryBox
          item={item}
          selected={(item.id ?? null) === selectedCategoryId}
          onPress={() => setSelectedCategoryId(item.id ?? null)}
        />
      )}
    />
  );

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
      <FlatList
        data={filteredProducts}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.content}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ProductCard item={item} />}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={<View style={{ height: 24 }} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    position: "relative",
    backgroundColor: "#FFFFFF",
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
  listContent: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 20,
    gap: 16,
  },
  row: {
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  content: {
    paddingTop: 8,
    backgroundColor: Colors.background,
  },
});
