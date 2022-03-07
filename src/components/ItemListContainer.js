import { useEffect } from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore" 
import ItemList from "./ItemList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

export default function ItemListContainer(){
    const [items, setItems] = useState([]);
    const { idCategory } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const db = getFirestore();
        const queryCollection = collection(db,'items');
        let queryFiltro = '';

        if(idCategory){
            queryFiltro = query(queryCollection, where('category','==',idCategory)); 
        }else{
            queryFiltro = queryCollection;
        }
        getDocs(queryFiltro)
            .then(resp => 
                setItems(resp.docs.map(
                    prod => ({id: prod.id, ...prod.data()}))))
            .finally(setLoading(false));

    },[idCategory])

    return (
        <div>
            {
                loading ? <Loading /> : <ItemList item={items}/>
            }
        </div>
    )
}