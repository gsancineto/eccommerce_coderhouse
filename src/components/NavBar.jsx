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
                    <Nav.Link ><Link to='/'><LogoWidget/> Mundo Comic</Link></Nav.Link>
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link to='categoria/marvel'>Marvel</Link></Nav.Link>
                        <Nav.Link ><Link to='categoria/dc'>DC</Link></Nav.Link>
                        <Nav.Link ><Link to='categoria/manga'>Manga</Link></Nav.Link>
                        <Nav.Link ><Link to='/cart'>Carrito {Quantity()===0 ? "" : <CartWidget/> }</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}