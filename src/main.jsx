import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navegador } from './componentes/navegador'
import Inicio from './registro/inicio'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navegador/>
        <Inicio/>  


    </React.StrictMode>
)