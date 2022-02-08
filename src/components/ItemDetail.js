import { useState } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap"

export default function ItemDetail({product}){
    const[count, setCount] = useState(0);
    const {cartList, AddToCart} = UseCartContext();
    function onAdd({item, count}) {
            console.log(cartList);
            AddToCart({...cartList, item});
            console.log(cartList);
        setCount(0);
    }

    return (
        <div>
            <Card.Title>{product.title}</Card.Title>
            <Card.Img variant="top" src={product.img}/>
            <Card.Text>{product.desc}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            {
                count === 0
                ?
                <ItemCount item={product} onAdd={onAdd}/>
                :
                <>
                <Link to='/cart'>
                    <div><button type="button" className="btn btn-primary" >Terminar de Comprar</button></div>
                </Link>
                <Link to='/'>
                    <div><button type="button" className="btn btn-primary" >Seguir Comprando</button></div>
                </Link>
                </>
            }
        </div>
    )
}