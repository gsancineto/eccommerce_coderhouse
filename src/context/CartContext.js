import { createContext, useState, useContext } from "react";

const cartContext = createContext([]);

export function UseCartContext(){
    return useContext(cartContext);
}

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([]);

    function AddToCart(item){
        setCartList(item);
    }

    function EmptyCart(){
        setCartList([]);
    }
    return(
        <cartContext.Provider value={{
            cartList,
            AddToCart,
            EmptyCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;