import { useState } from "react";

export default function ItemCount({item, onAdd}){
    const [count, setCount] =useState(0);
    
    const sum = () => {
        if(count < item.stock){
            setCount(count+1);
        }
    }

    const sust = () => {
        if(count > item.initial){
            setCount(count-1);
        }
    }

    const add = () =>{
        if(count >0){
            onAdd({item, count});
        }
    }

    return(
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={sust}>-</button>
                <button className="btn btn-light">{count}</button>
                <button type="button" className="btn btn-secondary" onClick={sum}>+</button>
            </div>
                <div><button type="button" className="btn btn-primary" onClick={add}>Añadir al Carrito</button></div>
        </div>
    )
}