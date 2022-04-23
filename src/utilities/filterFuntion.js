
import { useFilter } from "../context/FilterProvider";

function Product({ products }) {
    const {
      filterState: { product, sortBy, byStock, byRating, byBrand },
    } = useFilter();

    const filteredProducts = () => {
        let sortedProducts = product;
    
        if (sortBy) {
          sortedProducts = sortedProducts.sort((a, b) =>
            sortBy === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price
          );
        }
        if (!byStock) {
          sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }
    
        if (byBrand.mens) {
          return sortedProducts.filter(
            (prod) => "mens" === prod.brand.toLowerCase()
          );
        }
    
        if (byBrand.women) {
          return sortedProducts.filter(
            (prod) => "women" === prod.brand.toLowerCase()
          );
        }
    
        
    
        if (byRating) {
          sortedProducts = sortedProducts.filter(
            (prod) => prod.rating === byRating
          );
        }
        return sortedProducts;
      };

    }
    export default Product;