import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import CartWidget from "./CartWidget"

export default function NavBar(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home" >Mundo Comic</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#marvel">Marvel</Nav.Link>
                <Nav.Link href="#dc">DC</Nav.Link>
                <Nav.Link href="#otros">Otros</Nav.Link>
                <Nav.Link href="#manga">Manga</Nav.Link>
                <Nav.Link href="#carrito"><CartWidget/> Carrito</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}