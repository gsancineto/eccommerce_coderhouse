import { useState } from "react";

export default function ItemCount(data){
    const[count, setCount] = useState(data.initial);
    let countInt = parseInt(count);
    
    const sum = () => {
        if(countInt < data.stock){
            setCount(countInt+1);
        }
    }

    const sust = () => {
        if(countInt > data.initial){
            setCount(countInt-1);
        }
    }    

    const addOn = () => {
        console.log('Añadiendo ' + countInt + ' items al carrito.');
        setCount(0);
    }

    return(
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={sust}>-</button>
                <button className="btn btn-light">{countInt}</button>
                <button type="button" className="btn btn-secondary" onClick={sum}>+</button>
            </div>          
            <div><button type="button" className="btn btn-primary" onClick={addOn}>Añadir al Carrito</button></div>
        </div>
    )
}