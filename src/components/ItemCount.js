import { useState } from "react";
import { UseCartContext } from "../context/CartContext";

export default function ItemCount(data){
    const[count, setCount] = useState(0);
    const {cartList, AddToCart} = UseCartContext();
    
    const sum = () => {
        if(count < data.item.stock){
            setCount(count+1);
        }
    }

    const sust = () => {
        if(count > data.item.initial){
            setCount(count-1);
        }
    }    

    const addOn = () => {
        const item = [];
        for (let index = 0; index < count; index++) {
            item.push(data.item);
        }
        if(item.length > 0){
            AddToCart([...cartList, item]);
        }
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