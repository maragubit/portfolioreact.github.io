import { Outlet} from "react-router-dom";
import Navegador from "../components/Navegador";
import Luces from "../components/Luces";
import Nomovil2 from "../components/Nomovil2";


function AppLayout2(){
    return(<>
    <Navegador/>
    <Nomovil2/>
    <Outlet/>
    <Luces/>
    </>)
}
export default AppLayout2;