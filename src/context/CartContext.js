import { createContext, useState, useContext } from "react";

const cartContext = createContext([]);

export function UseCartContext(){
    return useContext(cartContext);
}

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([]);

    function AddToCart({item, count:qty}){
        if(cartList.some(l=> (l.item.id === item.id))){
            const acumulate = [...cartList];
            acumulate.forEach(i =>{
                if(i.item.id === item.id){
                    i.qty+= qty;
                    i.item.stock -= i.qty;
                }
            });
            setCartList(acumulate);
        }else{
            item.stock -= qty;
            setCartList([...cartList, {item, qty}]);
        }
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