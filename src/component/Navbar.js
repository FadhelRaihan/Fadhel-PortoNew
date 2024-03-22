import { Container, Nav, Navbar, Image} from "react-bootstrap";
import "../style/Navbar.css"
import Logo from "../asset/Logo.png"

const NavigationBar = () => {
    return (
        <div>
            <Navbar className="Navbar" fixed="top">
                <Container>
                    <Image src={Logo} className="Image"/>
                    <Nav>
                        <Nav.Link className="NavLink">Project</Nav.Link>
                        <Nav.Link className="NavLink">Design</Nav.Link>
                        <Nav.Link className="NavLink">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;