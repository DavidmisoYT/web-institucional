import { createBrowserRouter } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Horario } from "../pages/Horario";
import { Docentes } from "../pages/Docente";
import { Asistencia } from "../pages/Asistencia";
import { Ajustes } from "../pages/Ajustes";
import InicioSesion from "../pages/InicioSesion";
import { Registro } from "../pages/Registro";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <InicioSesion/>  
    },
    {
        path: '/Registro',
        element: <Registro/>  
    },
    {
        path: '/Inicio',
        element: <Inicio/>  
    },
    {
        path: '/Horario',
        element: <Horario/>  
    },
    {
        path: '/Docente',
        element: <Docentes/>  
    },
    {
        path: '/Asistencia',
        element: <Asistencia/>  
    },
    {
        path: '/Ajustes',
        element: <Ajustes/>  
    }
]);
