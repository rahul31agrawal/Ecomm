import { useCart } from "../../context/cart-context";

export const CartPrice=()=>{
    const{cartState}=useCart();
    const itemPrice = cartState.cart.reduce(
        (acc, curr) => acc + Number(curr.price) * Number(curr.quantity),
        0
      );
    return (
        <div className="text-card">
        <div className="card-title">
            PRICE DETAILS
        </div>
        <hr/>
        <div className="card-description">
            <div className="price">
                <p>Price ({cartState.cart.length}) item</p>
                <p>₹{itemPrice}</p>
            </div>
            <div className="discount-price">
                <p>Discount</p>
                <p>-₹100</p>
            </div>
            <div className="delivery-charge">
                <p>Delivery Charges</p>
                <p>₹100</p>
            </div>
            <hr/>
            <div className="total-amount">
                <p>Total Amount</p>
                <p>{itemPrice ? itemPrice : 0 }</p>
                
            </div>
            <hr/>
            <div className="discount-msg">
                <p>You will save ₹100 on this order.</p>
            </div>
            <div className="cart-actions">
                <button className="btn btn-primary">
                    PLACE ORDER
                </button>
            </div>
        </div>
    </div>
    )
}