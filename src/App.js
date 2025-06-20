import './App.css';
import { useState,useEffect} from "react";
import Nomovil from './components/Nomovil';
import Nomovil2 from './components/Nomovil2';
import Movil from './components/Movil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/zone1/AboutMe";
import Proyectos from "./pages/zone1/Proyectos";
import Habilidades from './pages/zone2/Habilidades';
import Luces from "./components/Luces"
import Cookies from 'js-cookie';
import Microscopio from './pages/zone2/Microscopio';
import Keybox from './pages/zone2/Keybox';
import CookieConsent from './components/CookieConsent';



function App() {
 
  
  if (!Cookies.get('luz')) {
    Cookies.set('luz', 'on', { expires: 7 }); // Expira en 7 días
  }
  
  if (!Cookies.get('luminol')) {
    Cookies.set('luminol', 'off', { expires: 7 }); // Expira en 7 días
  }//checks if the cookie has been created if not it creates it.

  if (!Cookies.get('key')) {
    Cookies.set('key', 'off', { expires: 7 }); // Expira en 7 días
  }
  return (
    <>
    <div className='cookies'></div>
    <div><CookieConsent /></div>
    <div className="App">
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nomovil />}>
            <Route path="aboutMe" element={<AboutMe />} />
            <Route path="myProjects" element={<Proyectos/>} />
          </Route>
        
          <Route path="/zone2" element={<Nomovil2/>}>
            <Route path="/zone2/skills" element={<Habilidades/>}/>
            <Route path="/zone2/microscope" element={<Microscopio/>}/>
            <Route path="/zone2/keybox" element={<Keybox/>}/>

          </Route>
        </Routes>
      </BrowserRouter>     
    </div>
    <Luces/>
    </>
  );
}

export default App;
