import { ImageSourcePropType } from "react-native";

export type Product = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  images?: ImageSourcePropType[];
  category: number;
  price: number;
  description?: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Black Simple Lamp",
    image: require("@/assets/images/products/black_simple_lamp.jpg"),
    category: 6,
    price: 12.0,
    description:
      "Minimal and elegant black lamp perfect for any modern interior. Provides soft ambient lighting.",
  },
  {
    id: 2,
    title: "Minimal Stand",
    image: require("@/assets/images/products/minimal_stand.jpg"),
    category: 2,
    price: 25.0,
    description:
      "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home.",
  },
  {
    id: 3,
    title: "Coffee Chair",
    image: require("@/assets/images/products/coffee_chair.jpg"),
    category: 1,
    price: 20.0,
    description:
      "Comfortable coffee chair with elegant design. Perfect for your dining area or home office.",
  },
  {
    id: 4,
    title: "Simple Desk",
    image: require("@/assets/images/products/simple_desk.jpg"),
    category: 2,
    price: 50.0,
    description:
      "Clean and functional desk design. Ideal for work or study with plenty of surface space.",
  },
];
