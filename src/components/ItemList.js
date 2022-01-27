import Item from "./Item";

const liStyle = {
    listStyleType: 'none',
    display:'inline-block'
} 

export default function ItemList({data}){
    return(
        <div>
            {data.map(element => <li key={element.id} style={liStyle}><Item element={element}/></li>)}
        </div>
    )
}