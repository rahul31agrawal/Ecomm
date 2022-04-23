import Card from "../components/card/card";
import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {Navbar}  from "../../components/navbar/Navbar";
import {Filter} from "../../components/filter/Filter"

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
       
        <Filter/>

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
