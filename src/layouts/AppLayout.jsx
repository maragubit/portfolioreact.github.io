import { Outlet} from "react-router-dom";
import Navegador from "../components/Navegador";
import Luces from "../components/Luces";
import Nomovil from "../components/Nomovil";


function AppLayout(){
    return(<>
    <Navegador/>
    <Nomovil/>
    <Outlet/>
    <Luces/>
    </>)
}
export default AppLayout;