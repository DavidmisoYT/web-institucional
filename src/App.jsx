import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navegador } from "./components/Navegador";
import { InicioSesion } from "./pages/InicioSesion";
import { Registro } from "./pages/Registro";
import { Inicio } from "./pages/Inicio";
import { Horario } from "./pages/Horario";
import { Docentes } from "./pages/Docente";
import { Asistencia } from "./pages/Asistencia";
import { Ajustes } from "./pages/Ajustes";
import { PrivateRoute } from "./services/PrivateRoute";

export const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path="/web-institucional" element={<InicioSesion />} />
          <Route path="/web-institucional/Inicio" element={<PrivateRoute><Inicio /></PrivateRoute>} />
          <Route path="/web-institucional/Horario" element={<PrivateRoute><Horario /></PrivateRoute>} />
          <Route path="/web-institucional/Docentes" element={<PrivateRoute><Docentes /></PrivateRoute>} />
          <Route path="/web-institucional/Asistencia" element={<PrivateRoute><Asistencia /></PrivateRoute>} />
          <Route path="/web-institucional/Ajustes" element={<PrivateRoute><Ajustes /></PrivateRoute>} />
          <Route path="/web-institucional/Registro" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
