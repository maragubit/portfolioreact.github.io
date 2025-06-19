import { Link} from "react-router-dom";
function Microscopio(){
    return(
        <>
        <div className="microscopeImage">
        <Link to="/zone2"><img className="close" src="/close.svg" alt="close"/></Link>
        <div>
            <img src="/microscopio.jpg" alt="microscope"/>
        </div> 
        </div>
        
        </>

    );
}

export default Microscopio;
