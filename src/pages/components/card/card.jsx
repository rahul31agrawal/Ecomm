export default function Card ({name,categoryName,price,discountedPrice,discount,stockDetail,cardImage}){
return(
    <div className="container1">
              <div>
                <img className="ecom-img1" src={cardImage} alt="ecomimage" />
                <span className="card-badge1"> {stockDetail} </span>
                <span className="heart-badge1">
                  <i className="fas fa-heart"></i>
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
                <button className="btn-link1 call-to-action1 vertical-btn1">
                  Add to cart
                </button>
              </div>
            </div>

)
    
    
}



