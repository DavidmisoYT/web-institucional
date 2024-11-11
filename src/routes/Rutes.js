import { createBrowserRouter } from "react-router-dom";
import InicioSesion from "../registro/InicioSesion";
import Registro from "../registro/registro";

export const Routes = createBrowserRouter([
    {
        path: '/',
        Component: InicioSesion
    },
    {
        path: '/Registro',
        Component: Registro
    }
])
