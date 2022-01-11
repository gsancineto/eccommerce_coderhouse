import { Card } from "react-bootstrap"

const cardStyle = {
    width: '18rem',
    margin: '0 auto'
}

export default function ItemListContainer(){
    return (
        <div>
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>OFERTAS DE VERANO</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Los mejores precios!</Card.Subtitle>
                    <Card.Text>
                        Encontra los mejores comics de Marvel y DC junto a los ultimos mangas en Mundo Comic.
                    </Card.Text>
                    <Card.Link href="#sale">Explorar</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}