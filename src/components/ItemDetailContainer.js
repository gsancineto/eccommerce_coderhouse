import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";
import { getItems } from "./Utils";

export default function ItemDetailContainer(){
    const [data, setData] = useState([]);
    const { idProducto } = useParams();

    const liStyle = {
        listStyleType: 'none',
        display:'inline'
    } 
    
    useEffect(() =>{
        if(idProducto){
            getItems.then(res=>{
                setData(res.filter(prod=> prod.id.toString() === idProducto));
            });
        }
    },[idProducto])

    return(
        <div>
            {data.map(element => <li key={element.id} style={liStyle}><ItemDetail item={element}/></li>)}
        </div>
    )
}