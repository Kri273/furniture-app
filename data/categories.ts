import image5 from "@/assets/images/icons/bed.svg";
import image2 from "@/assets/images/icons/chair.svg";
import image6 from "@/assets/images/icons/lamp.svg";
import image4 from "@/assets/images/icons/sofa.svg";
import image3 from "@/assets/images/icons/table.svg";
import image1 from "@/assets/images/icons/star.svg";
import { SvgProps } from "react-native-svg";

export type Category = {
  id?: number;
  title: string;
  image: React.FC<SvgProps>;
};

export const categories: Category[] = [
  { id: 0, title: "Popular", image: image1 },
  { id: 1, title: "Chair", image: image2 },
  { id: 2, title: "Table", image: image3 },
  { id: 3, title: "Armchair", image: image4 },
  { id: 4, title: "Bed", image: image5 },
  { id: 5, title: "Lamp", image: image6 },
];
