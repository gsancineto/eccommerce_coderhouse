import { UseCartContext } from "../context/CartContext"

export default function Cart(){
const {cartList, EmptyCart} = UseCartContext();
console.log(cartList);
    return(
        <div>
            {cartList.map(prod => <li key={prod.id}> nombre: {prod.title} precio: ${prod.price}</li>)}
            <button onClick={EmptyCart} className="btn btn-danger">Vaciar Carrito</button>
        </div>
    )
}