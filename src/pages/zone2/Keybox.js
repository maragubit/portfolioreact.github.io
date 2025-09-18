import { Link} from "react-router-dom";
import { useState,useEffect} from "react";
import Cookies from 'js-cookie';
import { Icon } from "@iconify/react";
function Keybox(){
    const [valores, setValores] = useState(['', '', '']);

    const clave = () => {
        const a =document.getElementById('a').value;
        const b =document.getElementById('b').value;
        const c =document.getElementById('c').value;
        if (a+b+c==="129"){
            Cookies.set('key','on',{expires:7});
            alert("Clave correcta!\nHas obtenido una llave!")
        }
        else{
            alert("clave incorrecta!");
        }

    };

    
    return(
        <>
        <div className="keyBoxImage">
            <Link to="/zone2"><Icon className="close" icon="solar:close-square-bold" width="35px" color="#9c2796ff" /></Link>
            <div>
                <img src="/keybox.png" width="400" alt="keybox"/>
            </div>
            <div className="clave" style={{ display: 'flex', gap: '10px' }}>
                    <input
                    id="a"
                    type="number"
                    min="0"
                    max="9"
                    style={{ width: '40px', textAlign: 'center', fontSize: '18px' }}
                     onInput={(e) => {
                        if (e.target.value.length > 1) e.target.value = e.target.value.slice(0, 1);
                    }}
                    />
                    <input
                    id="b"
                    type="number"
                    min="0"
                    max="9"
                    style={{ width: '40px', textAlign: 'center', fontSize: '18px' }}
                     onInput={(e) => {
                        if (e.target.value.length > 1) e.target.value = e.target.value.slice(0, 1);
                    }}
                    />
                    <input
                    id="c"
                    type="number"
                    maxLength="1"
                    min="0"
                    max="9"
                    style={{ width: '40px', textAlign: 'center', fontSize: '18px' }}
                     onInput={(e) => {
                        if (e.target.value.length > 1) e.target.value = e.target.value.slice(0, 1);
                    }}
                    />
                    
            </div>
            <button className="open" onClick={clave}>open</button> 
        </div>
        
        </>

    );
}

export default Keybox;