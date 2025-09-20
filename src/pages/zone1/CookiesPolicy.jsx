import { Container } from "react-bootstrap";

function CookiesPolicy(){
return(
<Container className="cookiePolicy" style={{minHeight:"700px", color:"white"}}>
<h1>Política de Cookies</h1>
<p>
En <strong>maragubit.es</strong> solo utilizamos tres cookies básicas para el
funcionamiento y la personalización del sitio:
</p>


<ul>

<li>
<strong>luz</strong> para activar o desactivar la luz general
</li>
<li>
<strong>key</strong> para tener o no la llave de salida
</li>
<li>
<strong>luminol</strong> para activar o desactivar la luz ultravioleta
</li>
</ul>


<p>
Puede gestionar o eliminar estas cookies desde la configuración de su navegador.
</p>
</Container>);

}
export default CookiesPolicy;