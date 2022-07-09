import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UsuarioContext from '../context/usuarios/UsuarioContext'
import alerta from 'sweetalert'
import axios from 'axios'
import Alert from 'react-bootstrap'
import {faShoppingBag,faEdit,faDeleteLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const a = 10



const Estado = () => {


  const [bodeguero,setBodeguero] = useState([]);

      const cargas = useNavigate();



    //aqui empezamos a usar el contexto encargado de cumplir en consumir los datos del estado o los estados creados actualmente
    const {estados,obtenerEstados} = useContext(UsuarioContext)



    const guardandoUsuario = () => {
      return JSON.parse(localStorage.getItem('usuario'))
    }
    


    const soloAdmnistrador = () => {
      alerta("!Opcion solo para el adminsitrador")

    }

    useEffect(() => {
      setBodeguero(guardandoUsuario())
                obtenerEstados()
              console.log("viendo los estados",estados)
    },[])


const eliminarCargaEstado = async (id) => {
/*    alerta("eliminando la estado y carga"+id) */
   //aqui ya realizamos la peticion http a nuestro servidor para eliminar la carga y el estado
await axios.get('http://localhost:4000/eliminarEstado/'+id).then(() => {
  cargas('/cargas/estado')
  window.location.reload()
alerta("eliminando la estado y carga:"+id)

})

  
}
    
  return (
    <div className='container col-md-12'>
         <div className="table-responsive mt-5 form-group col-md-10">
      <h2 className='mt-5 text-center'>Estados de cargas</h2>
        <table className="table table-striped table-sm ">
          <thead>
            <tr>
            <th scope="col">#id_estado</th>
            <th scope="col">estado</th>
            <th scope="col">id_carga</th>
            <th scope="col">fecha de creacion</th>
            </tr>
          </thead>
          <tbody>
          {estados.map(estado => (<tr>
          <th scope="col d-flex">{`${estado.id_estado}`}</th>
          <th scope="col d-flex">{`${estado.estado}` >= 1? (<div class="alert alert-success" role="alert">
                                                        Carga entregada</div>):(<div class="alert alert-danger" role="alert">Carga no entregada</div>)}</th>
          <th scope="col d-flex">{`${estado.id_carga}`}</th>
          <th scope="col d-flex">{`${estado.fecha_creacion}`}</th>
          <th>{bodeguero.email?(<Link to='/cargas/estado' onClick={() => soloAdmnistrador()} className="link-danger">Eliminar carga</Link>):(<Link to={`/cargas/`} className="link-danger" onClick={() => eliminarCargaEstado(`${estado.id_carga}`)}>Eliminar carga estado </Link>)} <FontAwesomeIcon icon={faDeleteLeft} />
          </th>
          <th><Link to={`/EditarEstado/${estado.id_estado}`} class="link-secondary">Editar estado <FontAwesomeIcon icon={faEdit} /></Link></th>
          </tr>))}
      </tbody>
      </table>
      </div>
    </div>
  )
}

export default Estado
