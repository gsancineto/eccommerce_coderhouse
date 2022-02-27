import { UseCartContext } from "../context/CartContext";

export default function BuyerGreeting(){
    const {buyer} = UseCartContext();

    return(
        <>
            <div className="alert alert-info">
                Muchas gracias por tu compra {buyer.name}, <br/>
                enviaremos tu factura electronica a {buyer.email} <br/>
                y te avisaremos al {buyer.phone} cuando el envio este llegando
            </div>
        </>
    )
}