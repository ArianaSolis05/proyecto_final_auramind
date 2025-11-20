import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Inicio from "../pages/Inicio";
import PagRegistro from "../pages/PagRegistro";
import PagPrincipal from "../pages/PagPrincipal";
import Personal from "../pages/Personal";
import Usuario from "../pages/Usuario";
import EditarPerfil from "../pages/EditarPerfil";
import PerfilProfesional from "../pages/PerfilProfesional";
import Actividades from "../pages/Actividades";
<<<<<<< HEAD
import CronogramaCitas from "../pages/CronogramaCitas";
import InfoAuramind from "../pages/InfoAuramind";


=======
import PerfilAdmin from "../pages/PerfilAdmin";
>>>>>>> 5bdea4c2266b024327ecd2cb8156952913fe974f

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/crear-usuario" element={<PagRegistro />} />
        <Route path="/PagPrincipal" element={<PagPrincipal />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/EditUsuario" element={<EditarPerfil />} />
        <Route path="/CardProfesional" element={<PerfilProfesional />} />
        <Route path="/CardActividades" element={<Actividades />} />
<<<<<<< HEAD
        <Route path="/Cronograma" element={<CronogramaCitas />} />
        <Route path="/AcercaAuramind" element={<InfoAuramind />} />

=======
        <Route path="/Admin" element={<PerfilAdmin />} />
>>>>>>> 5bdea4c2266b024327ecd2cb8156952913fe974f

      </Routes>
    </Router>
  );
};

export default Routing;
