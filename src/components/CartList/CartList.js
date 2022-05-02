import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { Link } from "react-router-dom";


const  CartList=({product})=>{
      const {_id,name,categoryName,price,discountedPrice,discount,cardImage,quantity} =product;
      const {cartDispatch}=useCart(); 
      const {wishlistState,wishlistDispatch}=useWishlist();
      
    return (
        
             <div className="cart-products">
            <div className="card5 horizontal-card-container">
                <div className="card-img">
                    <img className="horizontal-card-img" src={cardImage} alt="ecomimage" />
                </div>
                <div className="card-info">

                    <h2 className="card-title">{name}</h2>
                    <h3 className="subtitle">{categoryName}</h3>
                    <div className="card-body">
                        <div className="price-details">
                            <p className="disc-price"> {discountedPrice}</p>
                            <p className="actual-price">{price}</p>
                            <p className="offer-info">({discount}% Off)</p>


                        </div>
                    </div>
                    <div className="product-quantity">
                        <p>Quantity:</p>
                        <button className="btn minus-quantity" 
                        onClick={()=>cartDispatch({type:"Decrease_Quantity",payload: _id})}><i className="material-icons">remove</i></button>
                        <input type="number" name="quantity" id="quantity" value={quantity}/>
                        <button className="btn minus-quantity"
                        onClick={()=>cartDispatch({type:"Increase_Quantity",payload: _id})}
                        ><i className="material-icons">add</i></button>
                    </div>

                    <div className="card-footer">

                       <div className="card-buttons horizontal-card-buttons">{
                    wishlistState.wishlist.find((item) => item._id === _id) ? (
                        <Link to="/WishlistPage">
                          <button className="btn-link not-call-to-action">
                            Go to wishlist
                          </button>
                        </Link>
                      ) :(
                        <button className="btn-link not-call-to-action"
                        onClick={()=>wishlistDispatch({type:"AddToWishlist",payload:product})}>
                            Move to Wishlist
                        </button>
                      )
                }
                    
                    <button className="btn-link call-to-action"
                        onClick={()=>cartDispatch({type:"RemoveFromCart", payload:_id})}
                    >Remove from cart</button>
                </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export {CartList}