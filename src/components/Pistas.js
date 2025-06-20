import Cookies from 'js-cookie';
import { Carousel } from 'react-responsive-carousel';
function Pistas(){
    return (
        <Carousel>
            <div className='pista'>
                <p>Los interruptores de la luz juegan un papel importante!</p>
            </div>
            <div className='pista'>
                <p>En Jerez, se utiliza la medida de volumen arroba para el vino, pero los científicos utilizamos los litros!</p>
            </div>
            <div className='pista'>
                <p>El microscopio puede ser muy útil para un farmacéutico!</p>
            </div>
            <div className='pista'>
                <p>En mis proyectos hay un link interesante!</p>
            </div>
        </Carousel>
    );
}
export default Pistas;