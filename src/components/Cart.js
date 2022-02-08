import { UseCartContext } from "../context/CartContext"

export default function Cart(){
const {cartList, EmptyCart} = UseCartContext();
    return(
        <div>
            {cartList.map(prod => <li key={prod.item.id}> nombre: {prod.item.title} precio: ${prod.item.price}</li>)}
            <button onClick={EmptyCart} className="btn btn-danger">Vaciar Carrito</button>
        </div>
    )
}