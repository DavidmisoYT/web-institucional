import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navegador } from './componentes/navegador'
import InicioSesion from './registro/inicio'
import Registro from './registro/registro'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navegador/>
        <InicioSesion/>  
        <Registro/>


    </React.StrictMode>
)