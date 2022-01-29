import { UseCartContext } from "../context/CartContext"

export default function Cart(){
const {cartList, EmptyCart} = UseCartContext();

    return(
        <div>
            {cartList.map(prod => <li>{prod.name} precio: {prod.price}</li>)}
            <button onClick={EmptyCart} className="btn btn-danger">Vaciar Carrito</button>
        </div>
    )
}