import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const { idProducto } = useParams();
    const db = getFirestore();
    
    const liStyle = {
        listStyleType: 'none',
        display:'inline'
    } 
    
    useEffect(() =>{
        //esto no anda ni idea
        if(idProducto){
            const itemRef = doc(db,'items',idProducto);
            console.log(itemRef);
            getDoc(itemRef).then(resp => setItem({id: resp.id, ...resp.data()}));
        }
    },[idProducto])

    return(
        <div>
            {item.map(element => <li key={element.id} style={liStyle}><ItemDetail product={element}/></li>)}
        </div>
    )
}