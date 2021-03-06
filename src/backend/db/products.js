import tshirtImage1 from "../../pages/assets/images/tshirt-img/Tshirt image1.jpg";
import tshirtImage2 from "../../pages/assets/images/tshirt-img/Tshirt image2.jpg";
import tshirtImage3 from "../../pages/assets/images/tshirt-img/Tshirt image3.jpg";
import tshirtImage4 from "../../pages/assets/images/tshirt-img/Tshirt image4.jpg";
import tshirtImage5 from "../../pages/assets/images/tshirt-img/Tshirt image5.jpg";
import tshirtImage6 from "../../pages/assets/images/tshirt-img/Tshirt image6.jpg";
import greenwomen from "../../pages/assets/images/tshirt-img/green_women.jpg";
import jockey_women from "../../pages/assets/images/tshirt-img/Jockey_women.jpg";
import white_media_women from "../../pages/assets/images/tshirt-img/white_media_women.jpg";
import babyblueTshirt from "../../../src/pages/assets/babyClothes/babyboyTshirt1.jpg";
import babyWhiteTshirt from "../../../src/pages/assets/babyClothes/babyboyTshirt2.jpg";
import blueGirl from "../../../src/pages/assets/babyClothes/blueGirl.jpg";
import yellowGirl from "../../../src/pages/assets/babyClothes/yellowGirl.jpg";

import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Eyebogler Men's t-shirt",
    categoryName: "mens",
    price: 10000,
    discountedPrice:9000,
    discount:10,
    stockDetail: "In Stock",
    cardImage:tshirtImage1,
    inStock: true,
    rating: 4,
    quantity:"1",
    
  },
  {
    _id: uuid(),
    name: "Woodland Men's t-shirt",
    categoryName: "mens",
    price: 2000,
    discountedPrice:1800,
    discount:10,
    stockDetail: "Out of Stock",
    cardImage:tshirtImage2,
    inStock: false,
    rating: 3,
    quantity:"1",
  },
  {
    _id: uuid(),
    name: "Vanhuesein Men's T shirt",
    categoryName: "mens",
    price: 1500,
    discountedPrice:1400,
    discount:5,
    stockDetail: "In Stock",
    cardImage:tshirtImage3,
    inStock: true,
    rating: 2,
    quantity:"1",
  },
  {
    _id: uuid(),
    name: "Manish Malhotra Women's T shirt",
    categoryName: "womens",
    price: 10500,
    discountedPrice:9500,
    discount:10,
    stockDetail: "out of Stock",
    cardImage:greenwomen,
    inStock: false,
    rating: 4,
    quantity:"1",

  },
  {
    _id: uuid(),
    name: "Gucci Women's T shirt",
    categoryName: "womens",
    price: 500,
    discountedPrice:350,
    discount:15,
    stockDetail: "In Stock",
    cardImage:jockey_women,
    inStock: true,
    rating: 5,
    quantity:"1",
  },
  {
    _id: uuid(),
    name: "Gucci Women's T shirt",
    categoryName: "womens",
    price: 400,
    discountedPrice:200,
    discount:50,
    stockDetail: "In Stock",
    cardImage:white_media_women,
    inStock: true,
    rating: 4,
    quantity:"1",
  },
  {
    _id: uuid(),
    name: "Baby boy blue T shirt",
    categoryName: "Baby Boy",
    price: 500,
    discountedPrice:400,
    discount:100,
    stockDetail: "In Stock",
    cardImage:babyblueTshirt,
    inStock: true,
    rating: 4,
    quantity:"1",
  },
  {
    _id: uuid(),
    name: "Baby boy White T shirt",
    categoryName: "Baby Boy",
    price: 400,
    discountedPrice:300,
    discount:100,
    stockDetail: "In Stock",
    cardImage:babyWhiteTshirt,
    inStock: true,
    rating: 3,
    quantity:"1",
  },
  {
    _id: uuid(),
    name: "Baby girl yellow frok",
    categoryName: "Baby Girl",
    price: 400,
    discountedPrice:300,
    discount:100,
    stockDetail: "In Stock",
    cardImage:yellowGirl,
    inStock: true,
    rating: 3,
    quantity:"1",
  },

  {
    _id: uuid(),
    name: "Baby girl Blue frok",
    categoryName: "Baby Girl",
    price: 500,
    discountedPrice:400,
    discount:100,
    stockDetail: "In Stock",
    cardImage:blueGirl,
    inStock: true,
    rating: 3,
    quantity:"1",
  },
  {
    _id: uuid(),
    name: "Eyebogler Men's t-shirt",
    categoryName: "mens",
    price: 1000,
    discountedPrice:900,
    discount:100,
    stockDetail: "In Stock",
    cardImage:tshirtImage4,
    inStock: true,
    rating: 4,
    quantity:"1",
    
  },
  {
    _id: uuid(),
    name: "Eyebogler Men's t-shirt",
    categoryName: "mens",
    price: 800,
    discountedPrice:700,
    discount:100,
    stockDetail: "In Stock",
    cardImage:tshirtImage5,
    inStock: true,
    rating: 4,
    quantity:"1",
    
  },
  {
    _id: uuid(),
    name: "Eyebogler Men's t-shirt",
    categoryName: "mens",
    price: 700,
    discountedPrice:600,
    discount:100,
    stockDetail: "In Stock",
    cardImage:tshirtImage6,
    inStock: true,
    rating: 4,
    quantity:"1",
    
  },
];
