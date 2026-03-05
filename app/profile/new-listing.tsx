import Button from "@/components/Button";
import TabHeader from "@/components/TabHeader";
import { Colors } from "@/constants/Colors";

import { categories, Category } from "@/data/categories";
import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

import Shape from "../../assets/images/icons/Shape.svg";

function ChevronDown({
  width = 18,
  height = 18,
  color = Colors.primary,
}: {
  width?: number;
  height?: number;
  color?: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 9l6 6 6-6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default function NewListingScreen() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const handleSubmit = () => {
    console.log({
      title,
      price,
      description,
      category: selectedCategory
        ? (selectedCategory.id ?? selectedCategory.title)
        : null,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TabHeader title="Create a new listing" />

      <ScrollView style={styles.container}>
        <Text style={styles.label}>Upload photos</Text>

        <View style={styles.photoRow}>
          <Pressable style={styles.uploadBox}>
            <Text style={styles.plus}>+</Text>
          </Pressable>

          <View style={styles.photoPreview}>
            <Image
              source={require("../../assets/images/lamp_image.png")}
              style={styles.image}
            />

            <Pressable style={styles.deleteIcon}>
              <Shape width={24} height={24} />
            </Pressable>
          </View>
        </View>

        <Text style={styles.label}>Title</Text>
        <TextInput
          placeholder="Listing Title"
          placeholderTextColor={Colors.placeholder}
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        <Text style={styles.label}>Category</Text>
        <Pressable
          style={styles.input}
          onPress={() => setCategoryOpen((v) => !v)}
          accessibilityRole="button"
        >
          <Text
            style={selectedCategory ? styles.inputText : styles.placeholder}
          >
            {selectedCategory?.title ?? "Select the category"}
          </Text>
          <ChevronDown />
        </Pressable>

        {categoryOpen ? (
          <View style={styles.dropdown}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {categories.map((cat) => (
                <Pressable
                  key={cat.id ?? cat.title}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedCategory(cat);
                    setCategoryOpen(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{cat.title}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        ) : null}

        <Text style={styles.label}>Price</Text>
        <TextInput
          placeholder="Enter price in USD"
          placeholderTextColor={Colors.placeholder}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          placeholder="Tell us more..."
          placeholderTextColor={Colors.placeholder}
          value={description}
          onChangeText={setDescription}
          multiline
          style={styles.textArea}
        />

        <Button
          title="Submit"
          onPress={handleSubmit}
          style={{ marginTop: 20 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  container: {
    padding: 20,
  },

  label: {
    color: Colors.primary,
    marginBottom: 8,
    marginTop: 20,
    fontSize: 14,
  },

  photoRow: {
    flexDirection: "row",
    gap: 12,
  },

  uploadBox: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderStyle: "dashed",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  plus: {
    fontSize: 28,
    color: "#FFF",
    backgroundColor: Colors.line,
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: "center",
    lineHeight: 30,
  },

  inputText: {
    color: Colors.text,
  },

  dropdown: {
    borderWidth: 1,
    marginTop: 8,
    borderColor: "#9DB0D8",
    borderRadius: 12,
    backgroundColor: Colors.white,
    maxHeight: 200,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    zIndex: 10,
  },

  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },

  dropdownItemText: {
    color: Colors.darkGray,
  },

  photoPreview: {
    width: 90,
    height: 90,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  deleteIcon: {
    position: "absolute",
    top: -10,
    right: -10,
    borderRadius: 20,
    padding: 4,
  },

  input: {
    borderWidth: 1,
    borderColor: "#9DB0D8",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: Colors.placeholder,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textArea: {
    borderWidth: 1,
    borderColor: "#9DB0D8",
    borderRadius: 12,
    padding: 14,
    height: 120,
    textAlignVertical: "top",
  },

  placeholder: {
    color: Colors.placeholder,
  },
});
