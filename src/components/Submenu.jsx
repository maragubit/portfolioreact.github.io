import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Submenu(){
    return(<>
    <Navbar expand="lg" className="main-nav tex-center">
        <Nav className="mx-auto">
            <Nav.Item>
            <div className="submenu">
                <Button href="#contact" className="submenuBoton">
                <Link to="/myProjects">Mis proyectos</Link>
                </Button>
            </div>
            </Nav.Item>

            <Nav.Item>
            <div className="submenu">
                <Button href="#contact" className="submenuBoton">
                <Link to="/aboutMe">sobre mí</Link>
                </Button>
            </div>
            </Nav.Item>

            <Nav.Item>
            <div className="submenu">
                <Button href="#contact" className="submenuBoton">
                 <Link to="/zone2/skills">Skills</Link>
                </Button>
            </div>
            </Nav.Item>

            <Nav.Item>
            <div className="submenu">
                <Button href="#contact"  className="submenuBoton">
                <Link to="/contact">Contactar</Link>
                </Button>
            </div>
            </Nav.Item>

        </Nav>
    </Navbar>
    </>)
}
export default Submenu;