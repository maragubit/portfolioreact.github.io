import { Icon } from "@iconify/react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Contacto(){
    return (
        <Container>
        <div className="contact">
        <Link to="/"><Icon className="close" icon="solar:close-square-bold" width="35px" color="#9c2796ff" /></Link>
        <h2>Contacto <i className='fa fa-address-book' ></i></h2>
        <div className="contacto">
        <p><i className='fa fa-envelope' ></i> Email: <a href="mailto:maragubit@gmail.com">maragubit@gmail.com</a></p>
        <p><i className='fa fa-phone' ></i> <a href="tel:+34630457830">Teléfono: +34 630457830</a></p>
        <p><i className='fa fa-whatsapp' ></i> <a href="https://wa.me/34630457830">Whatsapp: +34 630457830</a></p>
        </div>
        </div>
        </Container>
    );
}

export default Contacto;