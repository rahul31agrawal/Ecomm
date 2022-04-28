// import Card from "../components/card/card";
import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {Navbar}  from "../../components/navbar/Navbar";
import {Filter} from "../../components/filter/Filter";
import {ProductList} from "../components/ProductList/ProductList";
import { useProduct } from "../../context/Product-context";
import {getFinalFilteredProducts,getRatingSortedProducts,getSortedProducts} from "../../utilities/filterFuntion";

export  function ProductListing() {

 const [products,setProducts] = useState([]);

 useEffect(() => {
  const fetchProducts = async () => {
    const res = await axios.get("/api/products");
    setProducts(res.data.products);
  };
  fetchProducts();
}, []);

const {state}=useProduct();
          const {sortby,rating,Showcategory}=state;
          const sortedProducts=getSortedProducts(products,sortby);
          const ratingSortedProducts=getRatingSortedProducts(sortedProducts,rating);
          const FinalFilteredProducts=getFinalFilteredProducts(ratingSortedProducts,Showcategory)
 
  return (
    <div>
      
      <Navbar/>
      <div className="content product-grid">
       
        <Filter/>

        <main className="products-container">
          <h2 className="page-title">
            Showing All Products <small>{FinalFilteredProducts.length}</small>
          </h2>
          <div className="products-grid">
            
          

          <ProductList products={FinalFilteredProducts}/>

         
            
            
            
          </div>
        </main>
      </div>
    </div>
  );
}
