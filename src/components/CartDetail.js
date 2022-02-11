import { UseCartContext } from "../context/CartContext";


export default function CartDetail(){
    const {cartList, EmptyCart} = UseCartContext();
    return(
        <div>
            
            <div className="card" style={{width: "18rem"}}>

            <ul className="list-group list-group-flush">
                {
                    cartList.forEach(item => {
                        <li className="list-group-item">{item}</li>
                    })
                }
                {/* <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li> */}
            </ul>
            </div>

        </div>
    )
}