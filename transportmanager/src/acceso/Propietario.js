import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import alerta from 'sweetalert'
const Propietario = () => {

const id = useParams()

const [usuario,setUsuario] = useState();



const propietario = async () => {
  const respuesta = await axios.get('http://localhost:4000/propietario/'+id.id)
  setUsuario(respuesta.data)
  console.log(respuesta.data)
}

useEffect(() => {
/* propietario() */
console.log("IDDDD======>",id.id)
if(!usuario){
  propietario()
}
},[])


  return (
    
    <div className='container mt-5 align-center col-md-12'>
        
<div class="card">
  <div class="card-body bg-dark text-white">
    Datos del responsable de la carga
  </div>
  {usuario? (  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
  {/*     <th scope="col">Contrasena</th> */}
      <th scope="col">Email</th>
      <th scope="col">Comuna</th>
      <th scope="col">Telefono</th>
      <th scope="col">Rut</th>
      <th scope="col">Apellido Paterno</th>
      <th scope="col">Apellido Materno</th>
      <th scope="col">Fecha Creacion</th>
    </tr>
  </thead>
  <tbody>
  {usuario.map(usua => (
  <tr>
  <th scope="row">{`${usua.id_bodeguero}`}</th>
  <th scope="row">{`${usua.nombre}`}</th>
  {/* <th scope="row">{`${usua.contrasena}`}</th> */}
  <th scope="row">{`${usua.email}`}</th>
  <th scope="row">{`${usua.comuna}`}</th>
  <th scope="row">{`${usua.telefono}`}</th>
  <th scope="row">{`${usua.rut}`}</th>
  <th scope="row">{`${usua.apellidopaterno}`}</th>
  <th scope="row">{`${usua.apellidomaterno}`}</th>
  <th scope="row">{`${usua.fecha_creacion}`}</th>
  </tr>
  ))}
  </tbody>
</table>):(<div className='alert alert-danger'>!Click obtener propietario</div>)}

</div>
<Link to={'/cargas'}>Volver</Link>
    </div>
  )
}

export default Propietario
