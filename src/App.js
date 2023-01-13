import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="sobremim" element={<SobreMim />}></Route>
        <Route path="*" element={<div><h1>Não encontrada</h1></div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
