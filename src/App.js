import "./App.css";

import {Home} from "./pages/homePage/Home"
import { Routes, Route } from "react-router-dom";
import {ProductListing} from "./pages/productListing/ProductListing";






function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductListing" element={<ProductListing/>} />
        
    </Routes>

    </div>
  );
}

export default App;
