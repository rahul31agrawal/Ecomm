import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import {CartList} from "../../components/CartList/CartList";
import {CartPrice} from "../../components/CartPrice/CartPrice";
import {Navbar} from "../../components/navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartPage(){

    const {cartState} =useCart();
    return (
        <div className="cartPage-container">
            <Navbar/>
            <h1 class="page-title">My Cart</h1>
            <div class="cart-container">
            <div className="cart-list">
                {
                    cartState.cart.length > 0 ? (
                        cartState.cart.map((item)=>{
                            return <CartList product={item} key={item._id} />
                        })
                    ):(
                        <div>
                            <p>No products found in cart</p>
                            <Link to="/ProductListing"> Shop now </Link>
                        </div>
                    )
                }
            </div>
            <aside class="cart-summary">
            <CartPrice/>
            <ToastContainer />
            </aside>
            </div>
            
            
              
        </div>
    )
}