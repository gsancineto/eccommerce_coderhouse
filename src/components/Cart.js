import { UseCartContext } from "../context/CartContext"
import CartDetail from "./CartDetail";

export default function Cart(){
const {cartList, EmptyCart} = UseCartContext();
    return(
        <div>
            <CartDetail />
            {cartList.map(prod => <li key={prod.item.id}> nombre: {prod.item.title} precio: ${prod.item.price}</li>)}
            <button onClick={EmptyCart} className="btn btn-danger">Vaciar Carrito</button>
        </div>
    )
}