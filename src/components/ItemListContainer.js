import { Card } from "react-bootstrap"
import ItemCount from "./ItemCount"

const cardStyle = {
    width: '18rem',
    margin: '0 auto'
}

export default function ItemListContainer(){
    return (
        <div>
            {/* <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>OFERTAS DE VERANO</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Los mejores precios!</Card.Subtitle>
                    <Card.Text>
                        Encontra los mejores comics de Marvel y DC junto a los ultimos mangas en Mundo Comic.
                    </Card.Text>
                    <Card.Link href="#sale">Explorar</Card.Link>
                </Card.Body>
            </Card> */}
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>SUSCRIPCION SEMANAL</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Un comic por semana</Card.Subtitle>
                    <Card.Text>
                        Suscribite a la entrega semanal y recibi en tu domicilio un comic todos los lunes (3 series disponibles).
                    </Card.Text>
                    <ItemCount stock="3" initial="0"/>
                </Card.Body>
            </Card>
        </div>
    )
}