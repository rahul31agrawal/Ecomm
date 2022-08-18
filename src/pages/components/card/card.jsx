import { Link } from "react-router-dom";
import { useCart } from "../../../context/cart-context";
import { useWishlist } from "../../../context/wishlist-context";
import "./card.css";

export const Card = ({ product }) => {
  const {
    _id,
    name,
    categoryName,
    price,
    discountedPrice,
    discount,
    cardImage,
    rating,
  } = product;
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();

  return (
    <div className="container1">
      <div>
        <img className="ecom-img1" src={cardImage} alt="ecomimage" />
        <span className="card-badge1"> {rating} 🌟</span>
        <span className="heart-badge1">
          
          {wishlistState.wishlist.find((item) => item._id === _id) ? (
            <i
              className="fas fa-heart"
              onClick={() =>
                wishlistDispatch({ type: "RemoveFromWishlist", payload: _id })
              }
            ></i>
          ) : (
            <i
              className="far fa-heart"
              onClick={() =>
                wishlistDispatch({ type: "AddToWishlist", payload: product })
              }
            ></i>
          )}
        </span>
      </div>
      <div>
        <h5>{name}</h5>
        <h6>{categoryName}</h6>
      </div>
      <div className="secondary-container1">
        <p className="disc-price1">{discountedPrice}</p>
        <p className="actual-price1">{price}</p>
        <p className="offer-info1">{discount}% Off</p>
      </div>
      <div className="card-footer1">
        <div className="card-buttons">
          {cartState.cart.find((item) => item._id === _id) ? (
            <Link to="/CartPage">
              <button className="btn-link1 call-to-action1 vertical-btn1">
                Go to cart
              </button>
            </Link>
          ) : (
            <button
              className="btn-link1 call-to-action1 vertical-btn1"
              onClick={() =>
                cartDispatch({ type: "AddToCart", payload: product })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
