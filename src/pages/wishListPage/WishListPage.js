
import {Card} from "../../pages/components/card/card";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
import {Navbar} from "../../components/navbar/Navbar";

const WishlistPage = ()=> {
    const {wishlistState}=useWishlist();
    return(
       <div className="wishlistContainer">
           <Navbar/>

             <h1 className="page-title-wishlist">My wishlist</h1>
             <h2 className="page-title-wishlist">Showing {wishlistState.wishlist.length} Products</h2>
          <div className="products-grid">
        {
                    wishlistState.wishlist.length > 0 ? (
                        wishlistState.wishlist.map((item)=>{
                            return <Card product={item} key={item._id} />
                        })
                    ):(
                        <div className= "page-bottom-title-wishlist">
                            <p>No items in wishlist</p>
                            <Link to="/ProductListing"> Shop now </Link>
                        </div>
                    )
                }
        </div>


       </div>
        
                 
        
    )
}

export {WishlistPage};