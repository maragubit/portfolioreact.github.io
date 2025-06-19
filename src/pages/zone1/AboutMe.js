import {Link} from "react-router-dom";
function AboutMe(){
    return(
    <div className="aboutMe">
    <div>
        <div className="leftAlign"><Link to="/"><img className="closeAboutMe" id="close" src="close.svg" alt="close"/></Link></div>
        <img className="aboutMeImage"src="aboutMe.jpg" alt="mifoto" width="600"></img>
    </div>
    </div>
    );
}
export default AboutMe;