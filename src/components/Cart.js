import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext"
import CartDetail from "./CartDetail";

export default function Cart(){
const {cartList} = UseCartContext();
    return(
        <div>
            {
                cartList.length !== 0 ?
                <CartDetail />
                :
                <div className="p-3 mb-2 bg-danger text-white d-flex flex-column">
                    No hay productos, vaya a comprar algo 
                    <Link to='/'><button className="btn btn-success">Ir a Comprar</button></Link>
                </div>
            }
        </div>
    )
}