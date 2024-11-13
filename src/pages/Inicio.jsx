import './Styles/Inicio.css'
import foto from '../img/FotoPerfil.png'
import logo from '../img/logo-.png'

export const Inicio = () =>{
    return(
        <>
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
                        <p></p>
                    
                </div>
            </div>
        </>
    ) 
}