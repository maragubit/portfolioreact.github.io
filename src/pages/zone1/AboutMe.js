import { Icon } from "@iconify/react";
import {Link} from "react-router-dom";
function AboutMe(){
    return(
    <div className="aboutMe">
    <div>
        <div className="leftAlign"><Link to="/"><Icon className="close" icon="solar:close-square-bold" width="35px" color="#9c2796ff" /></Link></div>
        <img className="aboutMeImage"src="aboutMe.jpg" alt="mifoto" width="600"></img>
    </div>
    </div>
    );
}
export default AboutMe;