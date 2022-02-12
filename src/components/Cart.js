import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext"
import CartDetail from "./CartDetail";
import { getFirestore, collection, addDoc, where, documentId, writeBatch, getDocs, query } from "firebase/firestore"

export default function Cart(){
const {cartList, Total, EmptyCart} = UseCartContext();
const Buy = async(e) => {
    // e.preventDefault();

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
    EmptyCart();
}
    return(
        <div>
            {
                cartList.length !== 0 ?
                <CartDetail Buy={Buy}/>
                :
                <div className="p-3 mb-2 bg-danger text-white d-flex flex-column">
                    No hay productos, vaya a comprar algo 
                    <Link to='/'><button className="btn btn-success">Ir a Comprar</button></Link>
                </div>
            }
        </div>
    )
}