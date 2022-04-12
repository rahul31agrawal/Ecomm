import Card from "../components/card/card";
import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {Navbar}  from "../../components/navbar/Navbar";

export  function ProductListing({products }) {

 const [item,setItem] = useState([]);

  useEffect(()=>{
    

    axios.get('/api/products')
    .then((response)=>{
      setItem(response.data.products);

    },
    (error)=>{
      console.log(error);

    })
  },[])
 
  return (
    <div>
      
      <Navbar/>
      <div className="content product-grid">
        <div className="filters">
          <div className="filter-heading">
            <h3 className="filter-head main">Filters</h3>
            <p className="filter-head clear">Clear</p>
          </div>
          <form className="filter-form">
            <div className="filter-category --price">
              <label htmlFor="price">
                <h3 className="filter-head">Price</h3>
              </label>
              <input
                type="range"
                name="price"
                id="price"
                min="0"
                max="500000"
                value="50"
              />
            </div>
            <div className="filter-category --category">
              <h3 className="filter-head">Category</h3>
              <input type="checkbox" id="men" name="men" value="men" />
              <label htmlFor="men">Men Clothing</label>
              <br />
              <input type="checkbox" id="women" name="women" value="women" />
              <label htmlFor="women">Women Clothing</label>
            </div>
            <div className="filter-category --Rating">
              <h3 className="filter-head">Rating</h3>
              <input
                type="radio"
                id="four"
                name="rating"
                value="4 Stars and above"
              />
              <label htmlFor="four">4 Stars and above</label>
              <br />
              <input
                type="radio"
                id="three"
                name="rating"
                value="3 Stars and above"
              />
              <label htmlFor="three">3 Stars and above</label> <br />
              <input
                type="radio"
                id="two"
                name="rating"
                value="2 Stars and above"
              />
              <label htmlFor="two">2 Stars and above</label>
              <br />
              <input
                type="radio"
                id="one"
                name="rating"
                value="1 Stars and above"
              />
              <label htmlFor="one">1 Stars and above</label>
            </div>
            <div className="filter-category --Sortby">
              <h3 className="filter-head">Sort By</h3>
              <input
                type="radio"
                id="lowtohigh"
                name="sortby"
                value="Low to High"
              />
              <label htmlFor="lowtohigh">Low To High</label>
              <br />
              <input
                type="radio"
                id="hightolow"
                name="sortby"
                value="High to Low"
              />
              <label htmlFor="hightolow">High To Low</label>
            </div>
          </form>
        </div>

        <main className="products-container">
          <h2 className="page-title">
            Showing All Products <small>6</small>
          </h2>
          <div className="products-grid">
            
          {item.map((obj)=><Card {...obj}/>)}

         
            
            
            
          </div>
        </main>
      </div>
    </div>
  );
}
