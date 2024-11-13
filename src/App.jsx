/*import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
export const App = () => {
  return <RouterProvider router={router}/>
}*/

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navegador } from "./components/Navegador";
import { InicioSesion } from "./pages/InicioSesion";
import { Registro } from "./pages/Registro";
import { Inicio } from "./pages/Inicio";
import { Horario } from "./pages/Horario";
import { Docentes } from "./pages/Docente";
import { Asistencia } from "./pages/Asistencia";
import { Ajustes } from "./pages/Ajustes";


export const App = ()=>{
  return (
    <>
      <BrowserRouter>
        <Navegador/>
        <Routes>
          <Route  path="/" element={<InicioSesion/>}/>
          <Route  path="/Inicio" element={<Inicio/>}/>
          <Route  path="/Horario" element={<Horario/>}/>
          <Route  path="/Docentes" element={<Docentes/>}/>
          <Route  path="/Asistencia" element={<Asistencia/>}/>
          <Route  path="/Ajustes" element={<Ajustes/>}/>
          <Route  path="/Registro" element={<Registro/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}