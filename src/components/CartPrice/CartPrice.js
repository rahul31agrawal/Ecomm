import { useCart } from "../../context/cart-context";
import { toast } from "react-toastify";
import { loadScript } from "../../utilities/loadScript";
import { useNavigate, Outlet } from "react-router-dom";

export const CartPrice=()=>{
    const navigate = useNavigate();
    const{cartState}=useCart();

    const itemPrice = cartState.cart.reduce(
        (acc, curr) => acc + Number(curr.price) * Number(curr.quantity),
        0
      );

      async function displayRazorpay(e) {
        e.preventDefault();
        const response = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!response) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
        }
    
        const options = {
          key: "rzp_test_oyvCmMe5rvfpA6",
          currency: "INR",
          amount: itemPrice * 100,
          name: "Amazzon",
          description: "Thank you for trusting us",
          image: "",
          handler: async (response) => {
            const { razorpay_payment_id } = await response;

            const orderData = {
              orderAmount: itemPrice,
              razorpayId: razorpay_payment_id,
            };
            
            toast.success("Order Placed, Continue Shopping");
            // navigate("/ProductListing");
            
            // setCartItems([]);
          },
          prefill: {
            name: "Amazzon",
            email: "payments@amazzon.com",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.on("payment.failed", function (response) {
          toast.error("Payment Cancelled");
        });
        paymentObject.open();
      }



      


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
                <button className="btn btn-primary"  onClick={displayRazorpay}>
                    PLACE ORDER
                </button>
                <Outlet />
                
            </div>
        </div>
    </div>
    )
}