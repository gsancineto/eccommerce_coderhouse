import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Item from "./Item";
import Loading from "./Loading";

export default function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const { idProduct } = useParams();
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
        const db = getFirestore();
        if(idProduct){
            const itemRef = doc(db,'items',idProduct);
            getDoc(itemRef)
                .then(resp => setItem({id: resp.id, ...resp.data()}))
                .finally(setLoading(false));
        }
    },[idProduct])
    return(
        <>
            {
                loading 
                ? 
                    <Loading /> 
                :
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
            }
        </>
    )
}