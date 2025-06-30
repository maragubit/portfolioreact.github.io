import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function ProjectList(){
    return(
        <div>
            <Carousel>
                <div>
                    <img src="webguardian.png" alt="webguardian" />
                    <div className="legend">
                        <h3>Web Guardian</h3>
                        <p>Aplicacion web para realizar informes de ciberseguridad</p>
                        <p>Back-end: Laravel (php)</p>
                        <p> <a href="https://webguardian.es" target="_blank">webguardian.es</a></p>
                    </div>
                </div>
                <div>
                    <img src="celita.png" alt="celita" />
                    <div className="legend">
                        <h3>Celita</h3>
                        <p>Aplicacion web para controlar las raciones de HC de mi sobrina diabética.</p>
                        <p>Back-end: Django (python)</p>
                    </div>
                </div>
                
                
                <div>
                    <img src="futbol7.png" alt="futbol7" />
                    <div className="legend">
                        <h3>Futbol 7 la granja</h3>
                        <p>Aplicacion web para gestionar los partidos de los jueves</p>
                        <p>Back-end: Django (Python)</p>
                    </div>
                </div>
                <div>
                    <img src="ahorroDiario.png" alt="ahorrodiario" />
                    <div className="legend">
                        <h3>Ahorro Diario</h3>
                        <p>Aplicacion web para gestionar lo que quieres ahorrar</p>
                        <p>Back-end: PHP (Laravel)</p>
                    </div>
                    
                </div>
                <div>
                    <img src="mymdental.png" alt="mymdental" />
                    <div className="legend">
                        <h3>M&M Dental</h3>
                        <p>Aplicación web clínica dental</p>
                        <p>Back-end: Python (Django) </p>
                    </div>
                </div>
                <div>
                    <img src="laboratorio.png" alt="laboratorio" />
                    <div className="legend">
                        <h3>Laboratorio nutrición</h3>
                        <p>Aplicación web gestión muestras laboratorio</p>
                        <p>Back-end: Python (Django)</p>
                    </div>
                </div>
                <div>
                    <img src="fitomanager.png" alt="fitomanager" />
                    <div className="legend">
                        <h3>Fitomanager</h3>
                        <p>Aplicación web plantas medicinales</p>
                        <p>Back-end: Python (Django)</p>
                    </div>
                </div>
                <div>
                    <img src="encrypt.jpeg" alt="encrypt"/>
                    <div className="legend">
                        <h3>Link para desencriptar</h3>
                        <p>Convierte de arrobas a litros</p>
                        <p> <a href="https://www.convert-me.com/es/convert/history_volume/esarroba/esarroba-to-liter.html" target="_blank">Link</a></p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
    
};
export default ProjectList