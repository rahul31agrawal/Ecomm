const getSortedProducts=(products,sortby)=>{
  if(sortby==="PriceLowToHigh"){
      return products.sort((a,b)=> a.price - b.price);
  }
  if(sortby==="PriceHighToLow"){
    return products.sort((a,b)=> b.price - a.price);
}
  return products;
}
const getRatingSortedProducts=(products,rating)=>{
  if(rating==="4RatingAbove"){
      return products.filter((item)=> item.rating >= 4.0);
  }
  if(rating==="3RatingAbove"){
    return products.filter((item)=> item.rating >= 3.0);
  }
  if(rating==="2RatingAbove"){
    return products.filter((item)=> item.rating >= 2.0);
  }
  return products;
}
const getFinalFilteredProducts=(products,Showcategory)=>{
  if(Showcategory==="All"){
      return products;
  }
  if(Showcategory==="mens"){
      return products.filter((item)=> item.categoryName==="mens")
  }
  if(Showcategory==="womens"){
    return products.filter((item)=> item.categoryName==="womens")
  }
  if(Showcategory==="Baby Boy"){
    return products.filter((item)=> item.categoryName==="Baby Boy")
  }
  if(Showcategory==="Baby Girl"){
    return products.filter((item)=> item.categoryName==="Baby Girl")
  }
  
return products;
}

export {getFinalFilteredProducts,
  getRatingSortedProducts,
  getSortedProducts
};