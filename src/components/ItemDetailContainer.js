import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Item from "./Item";

export default function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const { idProducto } = useParams();
    
    useEffect(() =>{
        const db = getFirestore();
        if(idProducto){
            const itemRef = doc(db,'items',idProducto);
            getDoc(itemRef).then(resp => setItem({id: resp.id, ...resp.data()}));
        }
    },[idProducto])
    return(
        <div style={{display:'inline-flex'}}>
            <Item element={item}/>
            <div className="card bg-secondary" >
                <div className="text-white" 
                    style={{textAlign:'center',width:'300px',margin:'auto'}}
                >
                    {item.descLong}
                </div>
            </div>
        </div>
    )
}