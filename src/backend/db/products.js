import tshirtImage1 from "../../pages/assets/images/tshirt-img/Tshirt image1.jpg";
import tshirtImage2 from "../../pages/assets/images/tshirt-img/Tshirt image2.jpg";
import tshirtImage3 from "../../pages/assets/images/tshirt-img/Tshirt image3.jpg";
import tshirtImage4 from "../../pages/assets/images/tshirt-img/Tshirt image4.jpg";
import tshirtImage5 from "../../pages/assets/images/tshirt-img/Tshirt image5.jpg";
import tshirtImage6 from "../../pages/assets/images/tshirt-img/Tshirt image6.jpg";

import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Eyebogler Men's t-shirt",
    categoryName: "Men's T Shirt",
    price: 1000,
    discountedPrice:9000,
    discount:10,
    stockDetail: "In Stock",
    cardImage:tshirtImage1
    
  },
  {
    _id: uuid(),
    name: "Woodland Men's t-shirt",
    categoryName: "Men's T Shirt",
    price: 2000,
    discountedPrice:1800,
    discount:10,
    stockDetail: "Out of Stock",
    cardImage:tshirtImage2,
  },
  {
    _id: uuid(),
    name: "Vanhuesein Men's T shirt",
    categoryName: "Men's T Shirt",
    price: 1500,
    discountedPrice:1400,
    discount:5,
    stockDetail: "In Stock",
    cardImage:tshirtImage3,
  },
  {
    _id: uuid(),
    name: "Manish Malhotra Men's T shirt",
    categoryName: "Amiro ka Tshirt",
    price: 10000,
    discountedPrice:9000,
    discount:10,
    stockDetail: "out of Stock",
    cardImage:tshirtImage4,

  },
  {
    _id: uuid(),
    name: "Gucci Men's T shirt",
    categoryName: "Gucci Tshirt",
    price: 500,
    discountedPrice:350,
    discount:15,
    stockDetail: "In Stock",
    cardImage:tshirtImage5,
  },
  {
    _id: uuid(),
    name: "Gucci Men's T shirt",
    categoryName: "Gucci Tshirt",
    price: 400,
    discountedPrice:200,
    discount:50,
    stockDetail: "In Stock",
    cardImage:tshirtImage6,
  },
];
