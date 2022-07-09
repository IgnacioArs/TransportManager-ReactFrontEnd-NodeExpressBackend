import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
//importar css
import './body.css'
import axios from 'axios'
import alerta from 'sweetalert'
import bcryptjs from 'bcryptjs'
const Login = () => {

localStorage.clear()
        const [nombre,setNombre] = useState()
        const [contrasena,setContrasena] = useState()

        const perfilAcceder = useNavigate()




const refrescar = () => {
        window.location.reload()
}


 const AccesoAdministrador = async () => {

             try{
   /* 
                        console.log("DATOS DE ACCESO",nombre,contrasena) */
                        const usuario = await axios.get('http://localhost:4000/loginAdministrador/'+nombre+"/"+contrasena)
                        console.log("RECIBIENDO RESPUESTA DEL USUARIO",usuario,"CONTRASEÑA PLANA",contrasena)
                 
                        //luego de tener al usuario ahora comparamos la contraseña
                  
                        await bcryptjs.compare(contrasena,usuario.data.contrasena,function (error,resultado){
                         if(resultado){
                                const user = {
                                 id:usuario.data.id,
                                 nombre:usuario.data.nombre,
                                 contrasena:usuario.data.contrasena,
                                }
                                console.log("VIENDO LOS DATOS DE LA CONSTANTE",user)
                                localStorage.setItem('usuario',JSON.stringify(user))
                                console.log("DATOS DEL LOCAL STORAGE",localStorage.getItem('usuario')) 
                                
                                  perfilAcceder("/perfilAcceso/"+usuario.data.nombre) 
                              /*    profile() */

                                refrescar()
                                alerta("!los datos del administrador son correctos");
                         }else if(!resultado){
                              alerta("los datos del administrador son incorrectos");
                              console.log("localstorage vacio")
                         }else{
                                alerta("los datos del administrador son incorrectos");
                         }
                         alerta("DATOS DEL ADMINISTRADOR INCORRECTOS") 
                 })
                 alerta("DATOS DEL ADMINISTRADOR INCORRECTOS") 
             }catch(e){
                alerta("ERROR AL INGRESAR LOS DATOS")
                console.log(e)
             }
                

}

  return (
    <div classNameName="container md-2 mt-5 body" >
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"></link>
<div className="container p-4">
        <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card text-center">
                            <div className="card-header">
                                    <h3>Login Administrador</h3>
                            </div>
                            <div className="card-body">
                                    <div className="form-grup">
                                        <input type="text" name="nombre" placeholder="nombre" onChange={(evento) => {setNombre(evento.target.value)}} className="form-control" autofocus required></input>                         
                                    </div>
                                     <div className="form-grup">
                                        <input type="password" name="contrasena" placeholder="contraseña" onChange={(evento) => {setContrasena(evento.target.value)}} className="form-control" required></input>                           
                                    </div>    
                                     <div className="form-grup mt-2">
                                         <button className="btn btn-success btn-block" onClick={()=> AccesoAdministrador()}>Acceder</button>
                                    </div>               
                            </div>
                    </div>
                </div>
        </div>
</div>
    </div>
  )
}

export default Login
