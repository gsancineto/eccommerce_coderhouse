import { UseCartContext } from "../context/CartContext";


export default function CartDetail({Buy}){
    const {cartList, EmptyCart, Total, DeleteFromCart} = UseCartContext();
    return(
        <>
            <div className="card" >
                <ul className="list-group list-group-flush">
                    {
                        cartList.map(prod => 
                        <li className="list-group-item" key={prod.item.id}> 
                            <div className="card mb-3" style={{width: "100%"}}>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-md">
                                        <img src={prod.item.img} className="card-img"/>
                                    </div>
                                    <div className="col-md">
                                        <h2 className="card-title text-muted">x{prod.qty}</h2>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body">
                                            <h5 className="card-title">{prod.item.title}</h5>
                                            <p className="card-text">Precio unitario: ${prod.item.price}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="card-body">
                                        <p className="card-text">Precio: ${prod.item.price*prod.qty}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <button onClick={() => DeleteFromCart(prod.item.id)} className="btn btn-danger">Remover</button>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
            <div className="h4 text-light bg-success float-right">
                {`Total: $${Total()}`}
            </div>
            <button onClick={EmptyCart} className="btn btn-danger">Vaciar Carrito</button>
            <button onClick={() => Buy()} className="btn btn-success">Finalizar Compra</button>
        </>
    )
}