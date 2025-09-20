import { Icon } from "@iconify/react";
import { Card, CardBody, CardFooter, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function Contacto(){
    return (
        <Container>
        <div className="contact mx-auto">
        <Link to="/"><Icon className="close" icon="solar:close-square-bold" width="35px" color="var(--primary)" /></Link>
        <h2 className="mb-2 mt-2">Contacto <i className='fa fa-address-book' ></i></h2>
        <Container>
            <Row className="mb-2">
                <Col xs={4}>
                <Card>
                    <CardBody><a href="mailto:maragubit@gmail.com"><Icon icon="uiw:mail" width="40" color="black !important" /></a></CardBody>
                    <CardFooter style={{fontSize:"0.9em", height:"55.38px"}}>maragubit@gmail.com</CardFooter>
                </Card>
                </Col>
                <Col xs={4}>
                <Card>
                    <CardBody ><a href="tel:+34630457830"><Icon icon="fa7-solid:phone" width="40" /></a></CardBody>
                    <CardFooter style={{fontSize:"0.8em", height:"55.38px"}}>+34 630457830</CardFooter>
                </Card>
                </Col>
                <Col xs={4}>
                <Card>
                    <CardBody><a href="https://wa.me/34630457830"><Icon icon="logos:whatsapp-icon" width="40" /></a></CardBody>
                    <CardFooter style={{height:"55.38px"}}>whatsapp</CardFooter>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
        </Container>
    );
}

export default Contacto;