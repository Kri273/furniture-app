import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryBox } from "../../components/CategoryBox";
import ProductCard from "../../components/ProductCard";
import TabHeader from "../../components/TabHeader";
import { Colors } from "../../constants/Colors";
import { categories } from "../../data/categories";
import { products } from "../../data/products";

export default function HomeScreen() {
  const router = useRouter();

  const popularCategoryId = useMemo(() => {
    const popular = categories.find((c) => c.title === "Popular");
    return popular?.id ?? categories[0]?.id ?? null;
  }, []);

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    popularCategoryId,
  );
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let list = products;

    const isPopularSelected =
      popularCategoryId !== null && selectedCategoryId === popularCategoryId;

    if (selectedCategoryId !== null && !isPopularSelected) {
      list = list.filter((p) => p.category === selectedCategoryId);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }
    return list;
  }, [selectedCategoryId, query, popularCategoryId]);

  const renderHeader = () => (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      keyExtractor={(item, index) => String(item.id ?? index)}
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
      <TabHeader
        title="Find All You Need"
        iconPosition="left"
        icon={
          <Pressable onPress={() => setSearchOpen((v) => !v)}>
            <Image
              source={require("../../assets/images/icons/search.png")}
              style={styles.icon}
            />
          </Pressable>
        }
      />

      {searchOpen ? (
        <TextInput
          placeholder="Search products"
          placeholderTextColor={Colors.placeholder}
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
          returnKeyType="search"
        />
      ) : null}

      <FlatList
        data={filteredProducts}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.content}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() =>
              router.push({
                pathname: "/product",
                params: { id: String(item.id) },
              })
            }
          />
        )}
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
  icon: {
    height: 24,
    width: 24,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingTop: 4,
    paddingBottom: 20,
    alignItems: "center",
  },
  row: {
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  content: {
    paddingTop: 8,
    backgroundColor: Colors.background,
  },
  searchInput: {
    height: 40,
    borderColor: "#9DB0D8",
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 24,
    marginTop: 12,
    marginBottom: 6,
    paddingHorizontal: 12,
    color: Colors.text,
  },
});
