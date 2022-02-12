import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext"
import CartDetail from "./CartDetail";
import { getFirestore, collection, addDoc, where, documentId, writeBatch, getDocs, query } from "firebase/firestore"
import { useState } from "react";

export default function Cart(){
const {cartList, Total, EmptyCart} = UseCartContext();
const [buyed, setBuyed] = useState(false);
const Buy = async() => {
    let order = {}

    order.buyer = {name:"juan", email:"j@gmail.com", phone:"44448888"};
    order.total = Total();

    order.items = cartList.map(cart => {
        const id = cart.item.id;
        const title = cart.item.title;
        const price = cart.item.price * cart.qty;
        const qty = cart.qty;

        return {
            id,
            title,
            price,
            qty
        }
    });
    const db = getFirestore();
    //comprar
    const ordersCollection = collection(db,'orders');
    await addDoc(ordersCollection, order);

    //actualizar stock
    const itemsCollection = collection(db,'items');
    const queryUpdateStock = query(
        itemsCollection,
        where(documentId(),'in',cartList.map(cart=>cart.item.id)));

    const batch = writeBatch(db);

    await getDocs(queryUpdateStock)
    .then(resp=> resp.docs.forEach(res => batch.update(res.ref,{
        stock:res.data().stock - cartList.find(cart => cart.item.id === res.id).qty
    })));
    batch.commit();
    setBuyed(true);
    EmptyCart();
}
    return(
        <div>
            {
                cartList.length !== 0 ?
                <>
                    <CartDetail Buy={Buy}/>
                </>
                :
                    buyed ?
                        <div className="h3 mb-2 bg-success text-white d-flex flex-column">
                            <i className="bi bi-bag-check-fill"></i>
                            <p>
                                Muchas gracias por su compra!
                            </p>
                            <Link to='/'><button className="btn btn-primary">Volver a Comprar</button></Link>
                        </div>
                    :
                        <div className="h3 mb-2 bg-danger text-white d-flex flex-column">
                            <i className="bi bi-bag-x-fill"></i>
                            <p>
                                No hay productos en el carrito, desea comprar algo?
                            </p>
                            <Link to='/'><button className="btn btn-success">Ir a Comprar</button></Link>
                        </div>
            }
        </div>
    )
}