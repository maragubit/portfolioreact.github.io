import { Icon } from "@iconify/react";
import { Container, Row } from "react-bootstrap";
import Submenu from "./Submenu";
import { useState } from "react";

function Navegador(){
  const [submenu,setSubmenu]=useState(false);
    return(<>
    <Container className="title">
      <div className="menu d-inline">
        <Icon icon={submenu ? "maki:cross" :"entypo:menu"} color="var(--primary)" width="30" onClick={()=>setSubmenu(!submenu)} />
      </div>
      <div className="d-inline">
        <span className="titleLogo">Martín Agüera</span>
        <Row><span className="subtitleLogo">React & Django Developer</span></Row>
      </div>
      {submenu && <Submenu/>}
    </Container>

    </>)
}
export default Navegador;