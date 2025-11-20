import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Inicio from "../pages/Inicio";
import PagRegistro from "../pages/PagRegistro";
import PagPrincipal from "../pages/PagPrincipal";
import Personal from "../pages/Personal";
import Usuario from "../pages/Usuario";
import EditarPerfil from "../pages/EditarPerfil";
import PerfilProfesional from "../pages/PerfilProfesional";
import Actividades from "../pages/Actividades";
import PerfilAdmin from "../pages/PerfilAdmin";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/crear-usuario" element={<PagRegistro />} />
        <Route path="/PagPrincipal" element={<PagPrincipal />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/editar-usuario" element={<EditarPerfil />} />
        <Route path="/CardProfesional" element={<PerfilProfesional />} />
        <Route path="/CardActividades" element={<Actividades />} />
        <Route path="/Admin" element={<PerfilAdmin />} />

      </Routes>
    </Router>
  );
};

export default Routing;
