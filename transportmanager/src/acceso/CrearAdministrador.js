import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const CrearAdministrador = () => {

    const inicio = useNavigate();

const [nombre,setNombre] = useState()
const [contrasena,setContrasena] = useState()

const CrearAdministrador = async () => {
console.log("NOMBRE:",nombre,"CONTRASEÑA:",contrasena)
 await axios.post('http://localhost:4000/CrearAdministrador',{nombre,contrasena})
 inicio("/loginAdministrador")

}





  return (
    <div classNameName="container md-2 mt-5 body" >
         
    <div className="container p-4">
 
            <div className="row">
                    <div className="col-md-4 mx-auto">
                    
                        <div className="card text-center">
                        
                                <div className="card-header">
                                        <h3>Registro Administrador</h3>
                                </div>
                               
                                <div className="card-body">
                                    
                                        <div className="form-grup">
                                            <input type="text" name="nombre" placeholder="nombre" className="form-control" onChange={(evento) => {setNombre(evento.target.value)}}  autofocus required></input>                         
                                        </div>
                                         <div className="form-grup">
                                            <input type="password" name="contrasena" placeholder="contraseña" className="form-control" onChange={(evento) => {setContrasena(evento.target.value)}} required></input>                           
                                        </div>    
                                         <div className="form-grup mt-1">
                                             <button className="btn btn-success btn-block" onClick={()=> CrearAdministrador()}> Registrar Administrador </button>
                                        </div>               
                                        <Link to={`/cargas/estado`}><b className='mt-5'>Volver a Cargas</b></Link> 
                                </div>
                        </div>
                    </div>
            </div>
    </div>
        </div>
  )
}

export default CrearAdministrador
