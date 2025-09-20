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
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './layouts/AppLayout';
import AppLayout2 from './layouts/AppLayout2';
import Contacto from './pages/zone1/Contacto';
import CookiesPolicy from './pages/zone1/CookiesPolicy';




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
    <div><CookieConsent /></div>
    <div className="App">
   
      
        <Routes>

          <Route path="/" element={<AppLayout/>}>
            <Route path="aboutMe" element={<AboutMe />} />
            <Route path="myProjects" element={<Proyectos/>} />
            <Route path="contact" element={<Contacto/>} />
            
          </Route>
          <Route path="/cookies" element={<CookiesPolicy/>} />
          <Route path="zone2/" element={<AppLayout2/>}>
            <Route path="skills" element={<Habilidades/>}/>
            <Route path="microscope" element={<Microscopio/>}/>
            <Route path="keybox" element={<Keybox/>}/>
          </Route>
          
        </Routes>  
    </div>
    </>
  );
}

export default App;
