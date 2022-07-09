import React,{useEffect} from 'react'
import { useContext } from 'react'
import UsuarioContext from './usuarios/UsuarioContext'


const UsuarioLista = () => {
  /*  mandamos a llamar el contexto para utilizar un contexto creado y con las propiedades establecidas */

        const {seleccionarUsuario,usuarios,obtenerUsuarios,obtenerPerfil,cargas,obtenerCargas} = useContext(UsuarioContext)

  //importamos el metodo de estado useEfecct ayuda a inicar un estado
useEffect(() => {
            obtenerUsuarios();
            obtenerCargas()
            
            console.log("los usuarios",usuarios,"LAS CARGAS",cargas)
    },[])

  return (
    <div className="list-group h-100">
        {
          usuarios.map(usuario => (<a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" href="#!" key={usuario.id} onClick={() => obtenerPerfil(usuario.id)+console.log("DATOS DEL USUARIO",seleccionarUsuario)}>
            <img src={usuario.avatar} className="img-fluid mr-4 rounded-circle" width="70"></img>
            <p>
            {`${usuario.first_name}`}
            </p>
          </a>))
        }
    </div>
  )
}

export default UsuarioLista

