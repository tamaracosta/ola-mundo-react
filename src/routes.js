import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "paginas/PaginaPadrao";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu/>
            
      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}></Route>
          <Route path="sobremim" element={<SobreMim />}></Route>         
        </Route>

        <Route path="post/:id/*" element={<Post />}></Route>
        <Route path="*" element={<NaoEncontrada/>}></Route>
        
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
