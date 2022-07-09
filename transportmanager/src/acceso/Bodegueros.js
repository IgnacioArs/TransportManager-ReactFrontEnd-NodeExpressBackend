import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import alerta from 'sweetalert'
import {faBuildingUser,faUserGroup,faUserPlus,faAdd,faTasks,faEdit,faCircleCheck,faEye,faShoppingBag, faUser,faLocation
  ,faCalendar,faIndent, faMessage,faDatabase,faDeleteLeft} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Bodegueros = () => {

const [bodegueros,setBodegueros] = useState()

const Bodegueros = useNavigate()

const ListadoBodegueros = async () => {
      const respuesta = await axios.get('http://localhost:4000/bodegueros')
              setBodegueros(respuesta.data)
} 

const EliminarBodeguero = async (id) => {
/* alerta("eliminar bodeguero") */
const res = await axios.get('http://localhost:4000/EliminarBodeguero/'+id)
if(res ==='ok'){
  Bodegueros('/Bodegueros')
  window.location.reload()
  alerta("!Usuario eliminado sin carga asignada")
}else if(!res){
  Bodegueros('/Bodegueros')
  window.location.reload()
  alerta("!Usuario con carga asignada")
}
alerta("!Usuario eliminado sin carga asignada")
window.location.reload()
}

useEffect(() => {

        if(!bodegueros){
            ListadoBodegueros()
        }


},[])





  return (
    <div className='container mt-5 col-md-12 margin-auto'>
      <Link to={`/cargas/estado`}><h5>Cargas</h5></Link>
      <div className='card'>
          <div className='card-head bg-dark text-white text-center margin-auto'>
           <h5 className='mt-1'>Listado de bodegueros</h5> 
          </div>
      </div>
      <table class="table table-bordered ">
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
      <th scope="col">Actualizar Bodeguero</th>
      <th scope="col">Eliminar Bodeguero</th>
    </tr>
  </thead>
  {bodegueros? (  <tbody>
  {bodegueros.map(bodeguero => (
    <tr>
    <th scope="row">{`${bodeguero.id_bodeguero}`}</th>
    <th scope="row">{`${bodeguero.nombre}`}</th>
    {/* <th scope="row">{`${bodeguero.contrasena}`}</th> */}
    <th scope="row">{`${bodeguero.email}`}</th>
    <th scope="row">{`${bodeguero.comuna}`}</th>
    <th scope="row">{`${bodeguero.telefono}`}</th>
    <th scope="row">{`${bodeguero.rut}`}</th>
    <th scope="row">{`${bodeguero.apellidopaterno}`}</th>
    <th scope="row">{`${bodeguero.apellidomaterno}`}</th>
    <th scope="row">{`${bodeguero.fecha_creacion}`}</th>
    <th scope="row"><Link to={`/editarBodeguero/${bodeguero.id_bodeguero}`}><b>Editar Bodeguero <FontAwesomeIcon icon={faEdit} /></b></Link></th>
    <th scope="row"><Link  to={"/Bodegueros"}  onClick={()=>EliminarBodeguero(`${bodeguero.id_bodeguero}`)} >Eliminar Bodeguero<FontAwesomeIcon icon={faDeleteLeft} /> </Link></th>
    </tr>
    ))}
  </tbody>):(<div className='alert alert-danger'>No existen bodegueros y/o No se ha cargado la base de datos</div>)}

</table>
    </div>
  )
}

export default Bodegueros
