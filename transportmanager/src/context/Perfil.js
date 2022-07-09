import React,{ useContext } from 'react'
//ahora habiendo obtenido todos los datos del usaurio 
//vamos acorroborar que usuario fue seleccionado
import UsuarioContext from './usuarios/UsuarioContext'

const Perfil = () => {
//entonces para tomar el contexto completo con los datos obtenidos es la siguiente forma
const {seleccionarUsuario} = useContext(UsuarioContext);

  return (
   <>
   {seleccionarUsuario ? (<div className="card card-body text-center">
              <img src={seleccionarUsuario.avatar} className="card-img-top rounded-circle m-auto img-fluid" style={{width:180}}></img>
              <p>Nombre:{`${seleccionarUsuario.first_name}`}</p>
              <p>Email:{`${seleccionarUsuario.email}`}</p>
   </div>):(<h1>No se ha seleccionado ningun usuario</h1>)}
   </>
  )
}

export default Perfil

