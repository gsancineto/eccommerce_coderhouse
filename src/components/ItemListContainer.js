import { useEffect } from "react";
import ItemList from "./ItemList";
import { getItems } from "./Utils";
import { useState } from "react";

export default function ItemListContainer(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        getItems.then(res=>{
            setData(res);
        });
    },[])

    return (
        <div>
            <ItemList data={data}/>
        </div>
    )
}