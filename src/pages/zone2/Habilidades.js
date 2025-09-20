import { Link, Outlet } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Icon } from "@iconify/react";
import { Card, CardBody, CardFooter, Col, Container, Row } from "react-bootstrap";
function Habilidades(){
    return(
        <div className="mySkillsBody">
            <Link to="/zone2"><Icon className="close" icon="solar:close-square-bold" width="35px" color="var(--primary)" /></Link>
             <Carousel>
                <div>
                    <div className="tablaSkills mt-2">
                        <h2>Front-end <i className='fa fa-eye'></i></h2>
                        <Container className="mx-auto mt-4">
                        <Row>
                        
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 361"><path fill="#E44D26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"/><path fill="#F16529" d="m128 337.95l84.417-23.403l19.86-222.49H128z"/><path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"/><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"/><path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"/></svg>
                            </CardBody>
                            <CardFooter>HTML</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <Icon icon="skill-icons:css" width="50px" />
                            </CardBody>
                            <CardFooter>CSS 3</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <Icon icon="logos:javascript" width="50px" />
                            </CardBody>
                            <CardFooter>JS</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody>
                                <Icon icon="skill-icons:jquery" width="50px"/>
                            </CardBody>
                            <CardFooter>JQuery</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody style={{height:"82px"}}>
                                <Icon icon="logos:bootstrap" width="50px"/>
                            </CardBody>
                            <CardFooter><span style={{fontSize:"0.9em"}}>Bootstrap</span></CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody>
                                <Icon icon="skill-icons:react-dark" width="50px"/>
                            </CardBody>
                            <CardFooter>React</CardFooter>
                        </Card>
                        </Col>
                       
                        </Row>
                        </Container>
                        
                    </div>
                </div>
                <div>
                    <div className="tablaSkills mt-2">
                        <h2>Backend <i className='fa fa-eye-slash'></i></h2>
                        <Container className="mx-auto mt-4">
                        <Row>
                        
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <Icon icon="logos:django-icon" width="50px"/>
                            </CardBody>
                            <CardFooter>Django</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <Icon icon="material-icon-theme:python" width="50px" />
                            </CardBody>
                            <CardFooter>Python</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <Icon icon="material-icon-theme:laravel" width="50px" />
                            </CardBody>
                            <CardFooter>Laravel</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody style={{height:"82px"}}>
                                <Icon icon="logos:php" width="50px"/>
                            </CardBody>
                            <CardFooter>PHP</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody>
                                <Icon icon="devicon:java" width="50px"/>
                            </CardBody>
                            <CardFooter>Java</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody>
                                <Icon icon="simple-icons:springboot" width="50px"/>
                            </CardBody>
                            <CardFooter><span style={{fontSize:"0.7em"}}>SpringBoot</span></CardFooter>
                        </Card>
                        </Col>
                       
                        </Row>
                        </Container>

                        
                    </div>
                </div>
                <div>
                    <div className="tablaSkills mt-3">
                        <h2>Ciberseguridad <i className='fa fa-shield'></i></h2>
                        <Container className="mx-auto mt-4">
                        <Row>
                        
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <Icon icon="file-icons:nmap" width="50px"/>
                            </CardBody>
                            <CardFooter>Nmap</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <Icon icon="simple-icons:burpsuite" width="50px" />
                            </CardBody>
                            <CardFooter>Burpsuit</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <Icon icon="simple-icons:metasploit" width="50px" />
                            </CardBody>
                            <CardFooter style={{fontSize:"0.85em", height:"42px"}}>Metasploit</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody >
                                <Icon icon="file-icons:nessus" width="50px"/>
                            </CardBody>
                            <CardFooter>Nesus</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody>
                                <Icon icon="simple-icons:wireshark" width="50px"/>
                            </CardBody>
                            <CardFooter style={{fontSize:"0.8em" , height:"42px"}}>Wire Shark</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody>
                                <Icon icon="mdi:security" width="50px"/>
                            </CardBody>
                            <CardFooter><span style={{fontSize:"0.7em"}}>Mod security</span></CardFooter>
                        </Card>
                        </Col>
                       
                        </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="tablaSkills mt-3">
                        <h2>Others <i className='fa fa-certificate'></i></h2>
                        <Container className="mx-auto mt-4">
                        <Row>
                        
                        <Col xs={4}>
                        <Card>
                            <CardBody style={{height:"82px"}}>
                                <Icon icon="logos:mysql" width="50px"/>
                            </CardBody>
                            <CardFooter>SQL</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <Icon icon="devicon:git" width="50px" />
                            </CardBody>
                            <CardFooter>Git</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card>
                            <CardBody>
                                <Icon icon="devicon:linux" width="50px" />
                            </CardBody>
                            <CardFooter style={{fontSize:"0.85em", height:"42px"}}>Linux</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody style={{height:"82px"}}>
                                <Icon icon="logos:aws" width="50px"/>
                            </CardBody>
                            <CardFooter>AWS</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody>
                                <Icon icon="skill-icons:photoshop" width="50px"/>
                            </CardBody>
                            <CardFooter style={{fontSize:"0.8em" , height:"42px"}}>PhotoShop</CardFooter>
                        </Card>
                        </Col>
                        <Col xs={4}>
                        <Card className="mt-3">
                            <CardBody>
                                <Icon icon="arcticons:ia-mobile" width="50px"/>
                            </CardBody>
                            <CardFooter>R.A.G</CardFooter>
                        </Card>
                        </Col>
                       
                        </Row>
                        </Container>
                        
                    </div>
                </div>
            </Carousel>
        </div>
        
    );
}
export default Habilidades;