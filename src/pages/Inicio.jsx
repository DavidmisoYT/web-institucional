import './Styles/Inicio.css'
import foto from '../img/FotoPerfil.png'
import logo from '../img/logo-.png'
const nom= 'David Aguirre'
const taller='Soluciones informaticas'
const grupo = '10-3'
export const Inicio = () =>{
    const [info, setInfo ] = useState(false)
    const toggleInfo = () =>{
        setInfo(!info)
    }
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
                           
                            <div className={ `mas-info ${ info ? ' isActive' : ''}`}>

                            </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}