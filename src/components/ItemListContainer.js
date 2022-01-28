import { useEffect } from "react";
import ItemList from "./ItemList";
import { getItems } from "./Utils";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemListContainer(){
    const [data, setData] = useState([]);
    const { idCategoria } = useParams();

    useEffect(()=>{
        if(idCategoria){
            getItems.then(res=>{
                setData(res.filter(item => item.category === idCategoria));
            });
        }else{
            getItems.then(res=>{
                setData(res);
            });
        }
    },[idCategoria])

    return (
        <div>
            <ItemList data={data}/>
        </div>
    )
}