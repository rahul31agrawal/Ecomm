import {Navbar}  from "../../components/navbar/Navbar";
import banner from "../../pages/assets/images/banner1.jpg";
import bannerBottom from "../../pages/assets/images/banner.jpeg";

const Home = () => {
return(
    <>
    <Navbar/> 
    <div className="men-card-container">
        <div className="img-overlay-card">
            <p className="overlay-text">Men</p>
        </div>
        <div className="img-overlay-card">
            <p className="overlay-text">Men</p>
        </div>
        <div className="img-overlay-card">
            <p className="overlay-text">Men</p>
        </div>
        <div className="img-overlay-card">
            <p className="overlay-text">Men</p>
        </div>
        <div className="img-overlay-card">
            <p className="overlay-text">Men</p>
        </div>
    </div>

    <div className="banner">
        <img src={banner} alt="banner"/>
    </div>

    <div className="collection-card">
        <div className="card-container">
            <div className="card-img-container">
                <img src={bannerBottom} alt="summer collection"/>
            </div>
            <div className="collection-info">
                <section>
                    <p>NEW ARRIVALS</p>
                </section>
                <section>
                    <h2>Summer Collection</h2>
                    <p>Check out the best summer collection to enjoy these summers and be summer fashion ready.</p>
                </section>
            </div>
        </div>
        <div className="card-container">
            <div className="card-img-container">
                <img src={bannerBottom} alt="summer collection"/>
            </div>
            <div className="collection-info">
                <section>
                    <p>NEW ARRIVALS</p>
                </section>
                <section>
                    <h2>Summer Collection</h2>
                    <p>Check out the best summer collection to enjoy these summers and be summer fashion ready.</p>
                </section>
            </div>
        </div>
    </div>
    </>
);


};

export {Home}  ;
