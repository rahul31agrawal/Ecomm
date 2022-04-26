// import React from "react";
import { useProduct } from "../../context/Product-context";

export const Filter = () => {
  const {state,dispatch}=useProduct();
  const {sortby,rating,Showcategory}=state;
 
    
    return(

    
<div className="filters">
          <div className="filter-heading">
            <h3 className="filter-head main">Filters</h3>
            <button className="filter-head clear" onClick={()=>dispatch({type:"clear"})} >Clear</button>
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
              <input type="checkbox" id="men" name="men" value="mens" 
               onChange={()=>dispatch({type:"category", payload:"mens"})}
               checked={Showcategory==="mens"} />
              <label htmlFor="men">Men Clothing</label>
              <br />
              <input type="checkbox" id="women" name="women" value="women" 
               onChange={()=>dispatch({type:"category", payload:"womens"})}
               checked={Showcategory==="womens"}        />
              <label htmlFor="women">Women Clothing</label>
              <br />
              <input  id="bystock" type="checkbox"
               onChange={()=>dispatch({type:"category", payload:"All"})}
               checked={Showcategory==="All"}      />
              <label htmlFor="bystock">All</label>
            </div>
            <div className="filter-category --Rating">
              <h3 className="filter-head">Rating</h3>
              <div className="filter-head">
                        <label  className="rating">
                            <input type="radio" className="rating4" name="rating4"
                            onChange={()=>dispatch({type :"rating", payload:"4RatingAbove"})}
                            checked={rating==="4RatingAbove"}
                            />
                            4 rating and above
                        </label>
                        <label  className="rating">
                            <input type="radio" className="rating3" name="category3" 
                            onChange={()=>dispatch({type :"rating", payload:"3RatingAbove"})}
                            checked={rating==="3RatingAbove"}
                            />
                            3 rating and above
                        </label>
                        <label  className="rating">
                            <input type="radio" className="rating2" name="rating2"
                            onChange={()=>dispatch({type :"rating", payload:"2RatingAbove"})}
                            checked={rating==="2RatingAbove"}
                             />
                            2 rating and above
                        </label>
                </div>
            </div>
            <div className="filter-category --Sortby">
              <h3 className="filter-head">Sort By</h3>
              <input
                id="lowtohigh"
                type="radio"
                name="pricelowtohigh" value="PriceLowToHigh"
                            onChange={()=>dispatch({type:"sort",payload:"PriceLowToHigh"})} 
                            checked={sortby==="PriceLowToHigh"}
                
                
              />
              <label htmlFor="lowtohigh">Low To High</label>
              <br />
              <input
                id="hightolow"
                type="radio"
                name="pricehightolow" value="PriceHighToLow"
                            onChange={()=>dispatch({type:"sort",payload:"PriceHighToLow"})} 
                            checked={sortby==="PriceHighToLow"}
              />
              <label htmlFor="hightolow">High To Low</label>
            </div>
          </form>
        </div>
        )
};