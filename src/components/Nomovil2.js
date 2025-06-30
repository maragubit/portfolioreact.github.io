import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';
function Nomovil2(){
  
  
  const lock=()=>{
    Cookies.get('key')==="off" ? alert('la puerta está cerrada.\nNecesitas una llave para salir') : alert('Enhorabuena, has conseguido salir!');
  };

  const imagenActual = ()=>{
   if(Cookies.get('luz')==='on'){
    return Cookies.get('luminol')==='on' ? '/conluz2uv.jpg' : '/conluz2.jpg';
   }
   else{
    return Cookies.get('luminol')==='on' ? '/sinluz2luminol.jpg' : '/sinluz2.jpg';
   }
   
  };
  const [cambioImagen,setCambioImagen]=useState(imagenActual());
  const [luminol,setLuminol]=useState(Cookies.get('luminol'));
  const cambioLuminol=()=>{setLuminol((prevLuminol)=>(prevLuminol==='off'?'on':'off'));};
   useEffect(() => {
    Cookies.set('luminol', luminol, { expires: 7 });

    const luminolCookie = Cookies.get('luminol');
    const luz = Cookies.get('luz');

    setCambioImagen(() => {
      if (luz === 'on') {
        return luminolCookie === 'on' ? '/conluz2uv.jpg' : '/conluz2.jpg';
      } else {
        return luminolCookie === 'on' ? '/sinluz2luminol.jpg' : '/sinluz2.jpg';
      }
    });
  }, [luminol]);
  return (
  <div className="portada">
    <div className="title"><img src="/title.png" width="300px"></img></div>
    <div className="dash">
      <div className="align">
        <div className="icon2">
        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 64 64"><path fill="black" d="M63.792 56.913a6.877 6.877 0 0 1-6.878 6.882H6.874A6.88 6.88 0 0 1 0 56.913V6.877A6.876 6.876 0 0 1 6.874 0h50.041a6.876 6.876 0 0 1 6.878 6.877z"/><path fill="#fff" d="M28.04 47.85L9.578 31.958l18.285-15.965c2.563.188 4.582 1.897 4.589 3.986l.018 3.55l16.654-.09a5.083 5.083 0 0 1 5.11 5.05l.031 6.583a5.077 5.077 0 0 1-5.05 5.103l-16.656.087l.018 3.546c.014 2.087-1.973 3.816-4.535 4.04"/></svg></Link>   
        </div>
        <div>
          <img id='imagen' className='center' src={cambioImagen} alt="Portfolio2" width="900px"></img>
          <svg id="luminol" onClick={cambioLuminol} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
          <Link to="/zone2/skills">
            <svg id="habilidades" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
          </Link>
            <svg id="lock" onClick={lock} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
          <Link to="/zone2/microscope">
            <svg id="microscope" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
          </Link>
          <Link to="/zone2/keybox">
            <svg id="keybox" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
          </Link>
        </div>
        
      </div>
    </div>
    <Outlet />
  </div>
        
    );
}
export default Nomovil2;