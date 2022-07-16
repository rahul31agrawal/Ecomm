import "./App.css";

import Home from "./pages/homePage/Home";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./pages/productListing/ProductListing";
import { WishlistPage } from "./pages/wishListPage/WishListPage";
import CartPage from "./pages/cartPage/CartPage";
import { LoginPage } from "./pages/loginPage/login";
import { RequiresAuth } from "./context/RequiresAuth";
import { SignupPage } from "./pages/signupPage/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/WishlistPage" element={<WishlistPage />} />

        <Route
          path="/CartPage"
          element={
            <RequiresAuth>
              <CartPage />
            </RequiresAuth>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
