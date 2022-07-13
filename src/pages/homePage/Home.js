import { Navbar } from "../../components/navbar/Navbar";
import banner from "../../pages/assets/images/banner1.jpg";
import bannerBottom from "../../pages/assets/images/banner.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useProduct } from "../../context/Product-context";
import { Link } from "react-router-dom";




export default function Home()  {

    const {dispatch}=useProduct();
  


  const [categoryItem, setcategoryItem] = useState([]);

  useEffect(() => {
    axios.get("/api/categories").then(
      (response) => {
        setcategoryItem(response.data.categories);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="men-card-container">

        
        {
        categoryItem.map((categ, index) => (
          <>
            <div key={index}>
            <Link
            to="/ProductListing"  onClick={()=>dispatch({type:"category", payload:categ.categoryName})}
            >
            <img className="img-overlay-card" src={categ.categoryImage}   alt="ecomimage" />
            </Link>
              <p className="overlay-text">{categ.categoryName}</p>
            </div>
          </>
        ))
        }

      </div>

      <div className="banner">
        <img src={banner} alt="banner" />
      </div>

      <div className="collection-card">
        <div className="card-container">
          <div className="card-img-container">
            <img src={bannerBottom} alt="summer collection" />
          </div>
          <div className="collection-info">
            <section>
              <p>NEW ARRIVALS</p>
            </section>
            <section>
              <h2>Summer Collection</h2>
              <p>
                Check out the best summer collection to enjoy these summers and
                be summer fashion ready.
              </p>
            </section>
          </div>
        </div>
        <div className="card-container">
          <div className="card-img-container">
            <img src={bannerBottom} alt="summer collection" />
          </div>
          <div className="collection-info">
            <section>
              <p>NEW ARRIVALS</p>
            </section>
            <section>
              <h2>Summer Collection</h2>
              <p>
                Check out the best summer collection to enjoy these summers and
                be summer fashion ready.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};


