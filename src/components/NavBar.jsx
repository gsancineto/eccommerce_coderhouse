import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import LogoWidget from "./LogoWidget"

export default function NavBar(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav.Item ><Link to='/'><LogoWidget/> Mundo Comic</Link></Nav.Item>
                    <Nav className="me-auto">
                        <Nav.Item ><Link to="/">Home</Link></Nav.Item>
                        <Nav.Item ><Link to='/marvel'>Marvel</Link></Nav.Item>
                        <Nav.Item ><Link to='/dc'>DC</Link></Nav.Item>
                        <Nav.Item ><Link to='/manga'>Manga</Link></Nav.Item>
                        <Nav.Item ><Link to='/cart'><CartWidget/> Carrito</Link></Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}