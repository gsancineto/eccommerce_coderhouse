import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Item from "./Item";

export default function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const { idProducto } = useParams();
    
    useEffect(() =>{
        const db = getFirestore();
        //esto no anda ni idea
        if(idProducto){
            const itemRef = doc(db,'items',idProducto);
            getDoc(itemRef).then(resp => setItem({id: resp.id, ...resp.data()}));
        }
    },[idProducto])
    return(
        <div style={style}>
            <Item element={item}/>
            <div className="card bg-secondary" >
                <div className="text-white" style={styleDsc}>
                    {item.descLong}
                </div>
            </div>
        </div>
    )
}

const style = {
    display: "inline-flex"
}

const styleDsc ={
    textAlign: "center",
    width:"300px",
    margin:"auto",
    // color:"white",
    // backgroundColor: "black"
}