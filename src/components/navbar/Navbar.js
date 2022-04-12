
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

    return (
    <nav className="navbar">
        <h2 className="logo">
          <a href="/index.html">Home</a>
        </h2>

        <div className="input-container">
          <i id="searchi" className="fas fa-search icon"></i>
          <input className="input-field" type="text" placeholder="Search" />
        </div>

        <div className="top-links">
          <h2 className="btn">
            <button onClick={() => { navigate("/ProductListing");}}>Product</button>
          </h2>
          <h2 className="btn">
            <button href="/signInPage/signin.html">Login</button>
          </h2>

          <div className="child-ecom">
            <button
              onClick="location.href = '/cart/cart.html';"
              type="button"
              className="icon-button"
            >
              <i className="fas fa-shopping-cart fa-3x"></i>
              <span className="icon-button__badge">2</span>
            </button>
          </div>

          <div className="child-ecom">
            <button
              onClick="location.href = '/wishlist/wishlist.html';"
              type="button"
              className="icon-button"
            >
              <i className="fas fa-heart fa-3x"></i>
              <span className="icon-button__badge">2</span>
            </button>
          </div>
        </div>
      </nav>
    );

};

export {Navbar}  ;
