import './Styles/Inicio.css'
import foto from '../img/FotoPerfil.png'
import logo from '../img/logo-.png'
const nom= 'David Aguirre'
const taller='Soluciones informaticas'
const grupo = '10-3'
export const Inicio = () =>{
  
    return(
        <>
            <div className='contenedori'>
                <img src={logo} alt="Escudo y nombre de la institucion" className='Logo'/>
                <img src={foto} alt="Foto del estudiante fondo" className='Fondo-i' /> 
                <div className='Contenedor-i'>
                    
                    <div className=''>
                        <form>
                        <textarea className='Novedades' rows='31' cols='25'/>
                        </form>
                    </div>
                    <div className='Informacion-g'>
                            <img src={foto} alt="Foto del estudiante" className='Perfil'/>
                            <p>Nombre: {nom}<br/>Taller: {taller}<br/> Grupo: {grupo}</p>
                            <button className='info-button'>
                                <svg className='svg-info' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </button>
                          
                    </div>
                </div>
            </div>
        </>
    ) 
}