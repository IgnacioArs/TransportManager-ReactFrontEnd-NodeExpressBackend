import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import UsuarioContext from '../context/usuarios/UsuarioContext'
import bcryptjs from 'bcryptjs'
import alerta from 'sweetalert'
import PerfilAcceso from '../acceso/PerfilAcceso'
/* import Navegacion from './Navegacion' */

const LoginBodeguero = () => {

 /*   const {seleccionarBodeguero,obtenerBodeguero} = useContext(UsuarioContext) */
     localStorage.clear()
    const [nombre,setNombre] = useState()
    const [contrasena,setContrasena] = useState()
    const perfilAcceder = useNavigate()


//viendo el estado del bodeguero para obtenerlo y generar sesion
/* useEffect(() => {
    obtenerBodeguero()
   console.log("AQUI VEMOS LA RESPUES DEL SERVIDOR SI OBTENEMOS UN USUARIO",seleccionarBodeguero) 
},[])
 */


const refrescar = () => {
        window.location.reload()
}

 const AccesoBodeguero = async () => {

/* 
        console.log("DATOS DE ACCESO",nombre,contrasena) */
       const usuario = await axios.get('http://localhost:4000/loginBodeguero/'+nombre+"/"+contrasena)
       console.log("RECIBIENDO RESPUESTA DEL USUARIO",usuario,"CONTRASEÑA PLANA",contrasena)

       //luego de tener al usuario ahora comparamos la contraseña
 
       await bcryptjs.compare(contrasena,usuario.data.contrasena,function (error,resultado){
       
       try{
        if(resultado){
                const user = {
                 id:usuario.data.id_bodeguero,
                 nombre:usuario.data.nombre,
                 contrasena:usuario.data.contrasena,
                 email:usuario.data.email,
                 comuna:usuario.data.comuna,
                 telefono:usuario.data.telefono,
                 rut:usuario.data.rut,
                 apellidopaterno:usuario.data.apellidopaterno,
                 apellidomaterno:usuario.data.apellidomaterno,
                 fecha_creacion:usuario.data.fecha_creacion
                }
                console.log("VIENDO LOS DATOS DE LA CONSTANTE",user)
                localStorage.setItem('usuario',JSON.stringify(user))
                console.log("DATOS DEL LOCAL STORAGE",localStorage.getItem('usuario')) 
                
                 perfilAcceder("/perfilAcceso/"+usuario.data.nombre) 
                 refrescar()
                alerta("!los datos del bodeguero son correctos");
         }else if(!resultado){
              alerta("los datos del bodeguero son incorrectos");
              console.log("localstorage vacio")
         }else{
                alerta("los datos del bodeguero son incorrectos");
         }
         alerta("los datos del bodeguero son incorrectos");
       }catch(e){
        alerta("ERROR AL INGRESAR LOS DATOS")
        console.log(e)
       }
       alerta("BODEGUEROS NO EXISTEN");
})

   


    }



  return (
    <div classNameName="container md-2 mt-5">
    <div className="container p-4">
            <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="card text-center">
                                <div className="card-header">
                                        <h3>Login Bodeguero</h3>
                                </div>
                                <div className="card-body">
                         
                                        <div className="form-grup">
                                            <input type="text" name="nombre"  onChange={(evento) => {setNombre(evento.target.value)}} placeholder="nombre" className="form-control" autofocus required></input>                         
                                        </div>
                                         <div className="form-grup">
                                            <input type="password" name="contrasena" placeholder="contraseña" onChange={(evento) => {setContrasena(evento.target.value)}} className="form-control" required></input>                           
                                        </div>    
                                         <div className="form-grup mt-2">
                                             <button className="btn btn-success btn-block" onClick={AccesoBodeguero}>Acceder</button>
                                        </div>
                                       {/*  esta es la forma para navegar entre las rutas */}
                                        <Link to="/">Inicio</Link>               
                               
                                </div>
                        </div>
                    </div>
            </div>
    </div>
        </div>
  )
}

export default LoginBodeguero
