import { Icon } from "@iconify/react";
import { Link} from "react-router-dom";
function Microscopio(){
    return(
        <>
        <div className="microscopeImage">
        <Link to="/zone2"><Icon className="close" icon="solar:close-square-bold" width="35px" color="#9c2796ff" /></Link>
        <div>
            <img src="/microscopio.jpg" alt="microscope"/>
        </div> 
        </div>
        
        </>

    );
}

export default Microscopio;
