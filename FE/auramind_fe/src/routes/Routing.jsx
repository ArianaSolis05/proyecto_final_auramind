import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Inicio from "../pages/Incio"

const Routing = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
            </Routes>
        </Router>
    )
}
export default Routing