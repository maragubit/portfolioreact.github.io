
import {Link, Outlet} from "react-router-dom";
import ProjectList from "../../components/ProjectList";
import React, { useState, useEffect, Component } from 'react';

function Proyectos(){
    const [showCarousel, setShowCarousel] = useState(false); //defnimos variable showCarousel como false
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCarousel(true);
        }, 1500); // Cambia a true cuando pasan 3 segundos y se enseña el carousel en el JSX.

        return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
    }, []);

    
    
    return (
        <>
            <audio autoPlay>
            <source src="start.mp3" type="audio/mp3" />
            </audio>
            <div className="misProyectos">
                <div className="pcImage">
                    <div className="off">
                    <Link to="/"> <img className="offImage" id="offImage" src="off.png" alt="close"/></Link>
                    <Outlet/>
                    </div>
                    <img  className="pcOff" src="pcOff.png" alt="pc"></img>
                    
                    {showCarousel && 
                        <div className="info"><ProjectList/></div>
                    }
                </div>
            </div>
        </>
    );
}
export default Proyectos;