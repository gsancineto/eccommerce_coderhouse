import { useState } from "react";

const styleButton = {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
}

export default function ItemCount(data){
    let initialInt = parseInt(data.initial);
    const[count, setCount] = useState(initialInt);
    let countInt = parseInt(count);
    let stockInt = parseInt(data.stock);
    
    const sum = () => {
        if(stockInt > 0 && stockInt >= countInt+1){
            setCount(countInt+1);
        }
    }

    const sust = () => {
        if(stockInt > 0 && countInt-1 >=0){
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
            {/* <div style={styleButton}><button onClick={sust}>-</button> {countInt} <button onClick={sum}>+</button></div> */}
            
            <div><button type="button" className="btn btn-primary" onClick={addOn}>Añadir al Carrito</button></div>
        </div>
    )
}