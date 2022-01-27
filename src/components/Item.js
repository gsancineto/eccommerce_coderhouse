import { Card } from "react-bootstrap"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const cardStyle = {
    width: '15rem',
    margin: '0 auto',
}

export default function Item({element}){
    return (
        <div>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Img variant="top" src={element.img}/>
                        <Card.Text>{element.desc}</Card.Text>
                        <Card.Text>${element.price}</Card.Text>
                        <Card.Text><Link to={`/detalle/${element.id}`}>(Detalles)</Link></Card.Text>
                        <ItemCount stock={element.stock} initial={element.initial}/>
                    </Card.Body>
                </Card>
        </div>
    )
}



