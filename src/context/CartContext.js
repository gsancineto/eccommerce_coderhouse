import { createContext, useState, useContext } from "react";

const cartContext = createContext([]);

export function UseCartContext(){
    return useContext(cartContext);
}

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([]);
    const [buyer, setBuyer] = useState({});
    const [buyerExists, setBuyerExists] = useState(false);

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

    const Quantity = () =>{
        return cartList.reduce((acum, prod) => acum += prod.qty, 0);
    }
    const Total = () =>{
        return cartList.reduce((acum, prod) => acum += prod.item.price * prod.qty, 0);
    }

    const DeleteFromCart = (id) => {
        setCartList(cartList.filter(prod => prod.item.id !== id));
    }

    const SetBuyerData = (buyer) =>{
        if(buyer !== null){
            setBuyerExists(true);
            setBuyer(buyer);
        }
    }

    return(
        <cartContext.Provider value={{
            cartList,
            AddToCart,
            EmptyCart,
            Total,
            DeleteFromCart,
            Quantity,
            SetBuyerData,
            buyer,
            buyerExists
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;