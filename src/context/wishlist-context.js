import {useContext,createContext,useReducer} from "react";
import { WishlistReducerFunction } from "../reducer/WishlistReducerFunction";

const WishlistContext=createContext();

const WishlistProvider=({children})=>{
    const [wishlistState,wishlistDispatch]=useReducer(WishlistReducerFunction,{wishlist:[]});

    return (
        <WishlistContext.Provider value={{wishlistState,wishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}
const useWishlist=()=>{
    return useContext(WishlistContext);
}

export { useWishlist, WishlistProvider};