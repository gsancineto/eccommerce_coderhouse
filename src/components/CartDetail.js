import { UseCartContext } from "../context/CartContext";


export default function CartDetail(){
    const {cartList, EmptyCart, Total, DeleteFromCart} = UseCartContext();
    return(
        <>
            <div className="card" >
                <ul className="list-group list-group-flush">
                    {
                        cartList.map(prod => 
                        <li className="list-group-item" key={prod.item.id}> 
                            <div className="card mb-3" style={{width: "100%"}}>
                                <div className="row no-gutters">
                                    <div className="col-md-1">
                                        <img src={prod.item.img} className="card-img" style={{maxWidth:"100px"}}/>
                                    </div>
                                    <div className="col-md-1">
                                        <h2 className="card-title text-muted">x{prod.qty}</h2>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body">
                                            <h5 className="card-title">{prod.item.title}</h5>
                                            <p className="card-text">Precio de lista: ${prod.item.price}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="card-body">
                                            Total: ${prod.item.price*prod.qty}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <button onClick={() => DeleteFromCart(prod.item.id)} className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    }
                </ul>
                <div className="float-right">
                    {`Total: $${Total()}`}
                </div>
            </div>
            <button onClick={EmptyCart} className="btn btn-danger">Vaciar Carrito</button>
        </>
    )
}