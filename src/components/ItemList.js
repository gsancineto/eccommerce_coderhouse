import { Card } from "react-bootstrap"
import ItemCount from "./ItemCount"
import { getItems } from "./Item";
import { useState } from "react";

const cardStyle = {
    width: '18rem',
    margin: '0 auto'
}


export default function ItemList(){
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [initial, setInitial] = useState(0);
    const items = getItems.then(res => {
        setTitle(res[0].title);
        setImg(res[0].img);
        setDesc(res[0].desc);
        setPrice(res[0].price);
        setStock(res[0].stock);
        setInitial(res[0].initial);
    });
    return(
        <div>
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={img}/>
                    <Card.Text>{desc}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                    <ItemCount stock={stock} initial={initial}/>
                </Card.Body>
            </Card>

        </div>
    )
}