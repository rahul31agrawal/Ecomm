// import React from "react";


export const Filter = () => {

 
    
    return(

    
<div className="filters">
          <div className="filter-heading">
            <h3 className="filter-head main">Filters</h3>
            <button className="filter-head clear" >Clear</button>
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
                       />
              <label htmlFor="men">Men Clothing</label>
              <br />
              <input type="checkbox" id="women" name="women" value="women" 
                       />
              <label htmlFor="women">Women Clothing</label>
              <br />
              <input  id="bystock" type="checkbox"
                     
                       />
              <label htmlFor="bystock">Include out of stock</label>
            </div>
            <div className="filter-category --Rating">
              <h3 className="filter-head">Rating</h3>
              <form action="">
                  <input
                    type="range"
                    value="1"
                    id="rating-slider"
                    step="1"
                    min="0"
                    max="5"
                    list="tickmarks"
                    
                  />
                  <datalist id="tickmarks">
                    <option value="0" label="0"></option>
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                  </datalist>
                </form>
            </div>
            <div className="filter-category --Sortby">
              <h3 className="filter-head">Sort By</h3>
              <input
                id="lowtohigh"
                type="checkbox"
                
                
                
              />
              <label htmlFor="lowtohigh">Low To High</label>
              <br />
              <input
                id="hightolow"
                
                
                type="checkbox"
                
              />
              <label htmlFor="hightolow">High To Low</label>
            </div>
          </form>
        </div>
        )
};