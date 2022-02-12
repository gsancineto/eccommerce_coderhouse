import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UseCartContext } from "../context/CartContext"
import CartWidget from "./CartWidget"
import LogoWidget from "./LogoWidget"

export default function NavBar(){
    const {Quantity} = UseCartContext();
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="h5"><Link className="text-light text-decoration-none" to='/'><LogoWidget/> Mundo Comic</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="text-light text-decoration-none" style={{ marginRight: 10 }} to="/">Home</Link>
                        <Link className="text-light text-decoration-none" style={{ marginRight: 10 }} to='categoria/marvel'>Marvel</Link>
                        <Link className="text-light text-decoration-none" style={{ marginRight: 10 }} to='categoria/dc'>DC</Link>
                        <Link className="text-light text-decoration-none" style={{ marginRight: 10 }} to='categoria/manga'>Manga</Link>
                        <Link className="text-light text-decoration-none" style={{ marginRight: 10 }} to='/cart'>Carrito {Quantity()===0 ? "" : <CartWidget/> }</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}