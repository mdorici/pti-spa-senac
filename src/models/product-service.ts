import { ProductDTO } from "./product-dto";
import eggsBenedictImg from "../assets/eggsBenedict.png";
import riboonSteakImg from "../assets/riboonSteak.png";
import specialChickenImg from "../assets/specialChicken.png";

export const products: ProductDTO[] = [
  {
    id: 1,
    name: "Eggs Benedict",
    price: 5.9,
    imgUrl: eggsBenedictImg,
  },
  {
    id: 2,
    name: "Riboon Steak",
    price: 7.55,
    imgUrl: riboonSteakImg,
  },
  {
    id: 3,
    name: "Special Chicken",
    price: 3.39,
    imgUrl: specialChickenImg,
  },
];
