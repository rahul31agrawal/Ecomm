import "./App.css";

import {Home} from "./pages/homePage/Home"
import { Routes, Route } from "react-router-dom";
import {ProductListing} from "./pages/productListing/ProductListing";
import {WishlistPage} from "./pages/wishListPage/WishListPage";





function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductListing" element={<ProductListing/>} />
        <Route path="/WishlistPage" element={<WishlistPage/>} />
    </Routes>

    </div>
  );
}

export default App;
