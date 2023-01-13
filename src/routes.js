import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/sobremim" element={<SobreMim />}></Route>
        <Route path="*" element={<div><h1>Não encontrada</h1></div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
