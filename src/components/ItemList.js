import Item from "./Item";

const liStyle = {
    listStyleType: 'none',
    display:'inline-block'
} 

export default function ItemList({item}){
    return(
        <div>
            {item.map(element => <li key={element.id} style={liStyle}><Item element={element}/></li>)}
        </div>
    )
}