import { ImageSourcePropType } from "react-native";

export type Product = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  images?: ImageSourcePropType[];
  category: number;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Black Simple Lamp",
    image: require("@/assets/images/lamp_image.png"),
    category: 6,
    price: 12.0,
  },
  {
    id: 2,
    title: "Minimal Stand",
    image: require("@/assets/images/table_image.png"),
    category: 2,
    price: 25.0,
  },
  {
    id: 3,
    title: "Coffee Chair",
    image: require("@/assets/images/chair_image.png"),
    category: 1,
    price: 20.0,
  },
  {
    id: 4,
    title: "Simple Desk",
    image: require("@/assets/images/desk_image.png"),
    category: 2,
    price: 50.0,
  },
];
