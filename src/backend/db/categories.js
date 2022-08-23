import MenCategory from "../../pages/assets/categoryImages/Men.jpg";
import womenCategory from "../../pages/assets/categoryImages/Women.jpg";
import babyboyCategory from "../../pages/assets/categoryImages/Baby boy1.jpg";
import babygirlCategory from "../../pages/assets/categoryImages/Baby Girl.jpg";
import freshArrivalCategory from "../../pages/assets/categoryImages/freshArrivals.jpg";

import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "mens",
    categoryImage:MenCategory,
    description:
      "",
  },
  {
    _id: uuid(),
    categoryName: "womens",
    categoryImage:womenCategory,
    description:
      "",
  },
  {
    _id: uuid(),
    categoryName: "Baby Boy",
    categoryImage:babyboyCategory,
    description:
      "Meant to",
  },
  {
    _id: uuid(),
    categoryName: "Baby Girl",
    categoryImage:babygirlCategory,
    description:
      "Meant",
  },
  {
    _id: uuid(),
    categoryName: "Fresh Arrivals",
    categoryImage:freshArrivalCategory,
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];
