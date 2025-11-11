import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Inicio from "../pages/Incio"
import PagRegistro from "../pages/PagRegistro"

const Routing = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/crear-usuario" element={<PagRegistro/>}/>
            </Routes>
        </Router>
    )
}
export default Routing