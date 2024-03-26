import { Container, Nav, Navbar, Image} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../style/Navbar.css"
import Logo from "../asset/Logo.png"

const NavigationBar = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Navbar className="Navbar" fixed="top">
                <Container>
                    <Image onClick={() => navigate('/')} src={Logo} className="Image"/>
                    <Nav>
                        <Nav.Link onClick={() => navigate('/myproject')} className="NavLink">Project</Nav.Link>
                        <Nav.Link onClick={() => navigate('/mydesain')} className="NavLink">Design</Nav.Link>
                        <Nav.Link onClick={() => navigate('/mycontact')} className="NavLink">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;