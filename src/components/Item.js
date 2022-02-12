import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import ItemDetail from "./ItemDetail"

export default function Item({element}){
    return (
        <div>
            <Card style={{width:'15rem',margin:'0 auto'}}>
                <Card.Body>
                    <ItemDetail product ={element}/>
                    <Card.Text><Link to={`/detalle/${element.id}`}>(Detalles)</Link></Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}