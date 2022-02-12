import { useEffect } from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore" 
import ItemList from "./ItemList";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemListContainer(){
    const [items, setItems] = useState([]);
    const { idCategoria } = useParams();
    
    useEffect(()=>{
        const db = getFirestore();
        const queryCollection = collection(db,'items');
        
        if(idCategoria){
            const queryFiltro = query(queryCollection, where('category','==',idCategoria));
            getDocs(queryFiltro)
            .then(resp => 
                setItems(resp.docs.map(
                    prod => ({id: prod.id, ...prod.data()}))));
        }else{
            getDocs(queryCollection)
            .then(resp => 
                setItems(resp.docs.map(
                    prod => ({id: prod.id, ...prod.data()}))));
        }
    },[idCategoria])

    return (
        <div>
            <ItemList item={items}/>
        </div>
    )
}