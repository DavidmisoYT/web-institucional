import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navegador } from './componentes/navegador'
import InicioSesion from './registro/InicioSesion'
import Registro from './registro/registro'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>

    </React.StrictMode>
)