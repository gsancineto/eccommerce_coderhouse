import Item from "./Item";

export default function ItemList({data}){
    return(
        <div>
            {data.map(element => <li key={element.id}><Item element={element}/></li>)}
        </div>
    )
}