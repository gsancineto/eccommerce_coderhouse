import Item from "./Item";

export default function ItemList({item}){
    return(
        <div>
            {
                item.map(element => 
                <li 
                    key={element.id} 
                    style={{listStyleType:'none',display:'inline-block'}}
                >
                    <Item 
                        element={element}
                    />
                </li>)
            }
        </div>
    )
}