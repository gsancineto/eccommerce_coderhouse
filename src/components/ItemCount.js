import { useState } from "react";
import { UseCartContext } from "../context/CartContext";

export default function ItemCount(data){
    const[count, setCount] = useState(0);
    const {cartList, AddToCart} = UseCartContext();
    
    const sum = () => {
        if(count < data.stock){
            setCount(count+1);
        }
    }

    const sust = () => {
        if(count > data.initial){
            setCount(count-1);
        }
    }    

    const addOn = () => {
        AddToCart(cartList);
        setCount(0);
    }

    return(
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={sust}>-</button>
                <button className="btn btn-light">{count}</button>
                <button type="button" className="btn btn-secondary" onClick={sum}>+</button>
            </div>          
            <div><button type="button" className="btn btn-primary" onClick={addOn}>Añadir al Carrito</button></div>
        </div>
    )
}