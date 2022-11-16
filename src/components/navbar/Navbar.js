import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authcontext";
import Button from '@material-ui/core/Button';

const Navbar = () => {
  const {cartState}=useCart();
    const {wishlistState}=useWishlist();
  const navigate = useNavigate();


  const { auth, setAuth } = useAuthContext();

    const logoutFunc = () => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("USER_INFO");

        setAuth({
          loginStatus: false,
          token: localStorage.getItem("TOKEN"),
          user: JSON.parse(localStorage.getItem("USER_INFO")),
        });
        navigate("/login");
      };

    return (
    <nav className="navbar">
        <h2 className="logo">
          
          <NavLink to="/" end>
            Home
           </NavLink>
        </h2>

        <div className="input-container">
          <i id="searchi" className="fas fa-search icon"></i>
          <input className="input-field" type="text" placeholder="Search" />
        </div>

        <div className="top-links">
        

           <Link className="btnMui" to="/ProductListing"><Button variant="contained">Products</Button></Link>

          {auth.loginStatus ? (
            
            <div className="btnMui"><Button variant="contained" onClick={() => logoutFunc()}>Logout</Button></div>
          
          
        
        ) : (
        <Link className="btnMui" to="/login">
          <Button variant="contained">Login</Button>
        </Link>
        )}

          <div className="child-ecom">
            <button
              onClick={() => { navigate("/CartPage");}}
              type="button"
              className="icon-button"
            >
              <i className="fas fa-shopping-cart fa-3x"></i>
              <span className="icon-button__badge">{cartState.cart.length >0 ? cartState.cart.length : '0' }</span>
            </button>
          </div>

          <div className="child-ecom">
            <button
              onClick={() => { navigate("/WishlistPage");}}
              type="button"
              className="icon-button"
            >
              <i className="fas fa-heart fa-3x"></i>
              <span className="icon-button__badge">{wishlistState.wishlist.length >0 ? wishlistState.wishlist.length : '0'}</span>
            </button>
          </div>
        </div>
      </nav>
    );

};

export {Navbar}  ;
