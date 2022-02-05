import { UseCartContext } from "../context/CartContext"

export default function Cart(){
const {cartList, EmptyCart} = UseCartContext();
    return(
        <div>
            {cartList.map(item => item.map(prod => <li key={prod.id}>nombre: {prod.title} precio: {prod.price}</li>))}
            <button onClick={EmptyCart} className="btn btn-danger">Vaciar Carrito</button>
        </div>
    )
}