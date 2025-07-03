import { useState, useEffect, Component } from "react";
import {Link, Outlet } from "react-router-dom";
import Swal from 'sweetalert2';

import Cookies from 'js-cookie';


function Nomovil(){
    
  const luz = ()=>{
    const luz=Cookies.get('luz');
    const luminol=Cookies.get('luminol');
    if (luz==='on'){
      return 'conluz1.png';
    }
    else if (luz==='off' && luminol ==='off'){
      return 'sinluz1.png';
    }
    else {
      return 'sinluz1luminol.png';
    }

  };

  
  
  const [imagen,setImagen]=useState(luz);
    
    const cambioImagen = () => {
        setImagen((prevImagen) => {
          if (prevImagen === 'conluz1.png' && Cookies.get('luminol')==='on'){
            return 'sinluz1luminol.png';
          }
          else if (prevImagen==='sinluz1.png' || prevImagen==='sinluz1luminol.png'){
            return 'conluz1.png';
          }
          else{
            return 'sinluz1.png';
          }
    });
    };
    

    useEffect(() => {
      if (imagen) {
        Cookies.set('luz', imagen==='conluz1.png'?'on':'off', { expires: 7 }); // Expira en 7 días
      }
    }, [imagen]);

    const fast = () => {
    Swal.fire({
      title: '¿Activar modo rápido?',
      text: 'Verás los menús del portafolio saltándote una parte del escape-room',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.set('luminol', 'on', { expires: 7 });
        Cookies.set('luz', 'off', { expires: 7 });
        setImagen('sinluz1luminol.png');
        Swal.fire('Hecho', 'Luces fuera!', 'success');
      }
    });
  };


    return (
        <div className="portada">
          <div className="title">
            <img src="/title.png" width="300px" ></img>
            <div className="menu">
              <svg onClick={()=>fast()} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 1025 1024"><path fill="#de3be8" d="M896.428 640h-768q-53 0-90.5-37.5T.428 512t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-384h-768q-53 0-90.5-37.5T.428 128t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m-768 512h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5h-768q-53 0-90.5-37.5T.428 896t37.5-90.5t90.5-37.5"/></svg>
            </div>
          </div>
          <div className="dash">
            <div className="align">              
              <img id='imagen' className='center'src={imagen} alt="Portfolio" width="900px"></img>
              <div className="icon">
                  <Link to="/zone2"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 64 64"><path fill="black" d="M63.666 56.802a6.863 6.863 0 0 1-6.862 6.868H6.86A6.864 6.864 0 0 1 0 56.802V6.864A6.863 6.863 0 0 1 6.86 0h49.943a6.86 6.86 0 0 1 6.862 6.864z"/><path fill="#fff" d="m35.719 15.915l18.428 15.858l-18.25 15.936c-2.56-.189-4.57-1.893-4.582-3.979l-.018-3.541l-16.625.09a5.074 5.074 0 0 1-5.096-5.04l-.031-6.572a5.067 5.067 0 0 1 5.04-5.092l16.622-.086l-.02-3.54c-.009-2.087 1.974-3.809 4.53-4.03"/></svg></Link>
              </div>
            </div>
            <Link to="/aboutMe"><svg id="aboutMe" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#000000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg></Link>
            <Link to="/myProjects"><svg id="myProjects" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#000000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg></Link>
            <svg onClick={cambioImagen} id="light" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
            <a href="https://github.com/maragubit" target="_blank" ><svg id="github" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#000000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg></a>
            
          </div>
          <Outlet />
           
        </div>
        
    );
}
export default Nomovil;