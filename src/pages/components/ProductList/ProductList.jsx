import {Card} from "../../components/card/card"


export const ProductList=({products})=>{

    return(
        <div className="product-list">
            <div class="products-grid">

            
                {
                    products.length > 0 ? ( 
                        products.map((item)=>   <Card  product={item} key={item._id}  />
                    )):(
                            <p>No products found try again after some time</p>
                    )   
                }
            </div>
        </div>
    )
}