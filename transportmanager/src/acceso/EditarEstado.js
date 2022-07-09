import React, { useEffect, useState } from 'react'
/* usamos el hook para obtener el parametro del estado */
import { Link, useNavigate, useParams } from 'react-router-dom'
//AXIOS PARA las peticiones http
import axios from 'axios'
import alerta from 'sweetalert'
import { Accordion } from 'react-bootstrap'
import {faBuildingUser,faUserGroup,faUserPlus,faAdd,faTasks,faEdit,faCircleCheck,faEye,faShoppingBag, faUser,faLocation
  ,faCalendar,faIndent, faMessage,faDatabase} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const EditarEstado = () => {
/* ESTADO PARA BODEGUERO */
const [bodeguero,setBodeguero] = useState([]);

  const cargas = useNavigate();


  const IdEditarEstado = useParams()
  console.log("idEstadoActualizar",IdEditarEstado)
  
   const [estado,setEstado] = useState()

   const cargarBodeguero = () => {
    return JSON.parse(localStorage.getItem('usuario'))
  }

  useEffect(() => {
    setBodeguero(cargarBodeguero())
  })



const actualizarEstado = async () => {
    const id = IdEditarEstado.id 
  //AQUI YA EMPEZAMOS A REALIZAR LA PETICION HTTP

const respuesta = await axios.post('http://localhost:4000/editarEstado/'+id,{estado:estado})

   if(respuesta ==='ok'){
        cargas("/cargas/estado")
        alerta("!Carga actualizada")
   }else{
    alerta("!Estado de carga actualizada")
    cargas("/cargas/estado")
   }
   



}



  return (
    <div>
          <div className='container col-md-6 mt-5'>
     {bodeguero ? (
      
      <div class="card border-secondary mb-3 bg-dark"/*  style="max-width: 18rem;" */>
      <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0" >
          <Accordion.Header >Datos del usuario</Accordion.Header>
          <Accordion.Body>
          <div class="card-header bg-dark text-white"></div>
<h4 className='mt-1 form-group'>
                   Nombre: {bodeguero.nombre} <FontAwesomeIcon icon={faUser} /></h4>

                {bodeguero.comuna? (<small><cite title="San Francisco, USA">Comuna: {bodeguero.comuna} <FontAwesomeIcon icon={faLocation} /><i class="glyphicon glyphicon-map-marker">
                </i></cite></small>):(<div class="alert alert-info" role="alert">
                 Acciones del administrador
                  </div>)}
                <p>
                    {bodeguero.email? (<i class="glyphicon glyphicon-envelope">Email: {bodeguero.email} <FontAwesomeIcon icon={faMessage} /></i>):(<div>
                  </div>)}
                    <br />
                    {bodeguero.rut? (<i class="glyphicon glyphicon-globe">Rut: {bodeguero.rut} <FontAwesomeIcon icon={faIndent} /></i>):(<div >
               
                  </div>)}
               
              
                    <br />
                    {bodeguero.fecha_creacion? (<i class="glyphicon glyphicon-gift">Fecha Creacion: {bodeguero.fecha_creacion} <FontAwesomeIcon icon={faCalendar} /></i>):(<div>
                                              <Link to={`/perfilAcceso/${bodeguero.nombre}`}><b>Volver a perfil</b></Link>
                                           </div>)}
                </p>
          </Accordion.Body>
          </Accordion.Item>
      </Accordion>

</div>

):(<div class="alert alert-danger" role="alert">
  !Bodeguero o Administrador no se encuentra logueado
</div>)}
     </div>
    <div className="col-md-4 mt-4 mx-auto">
    <div className="card">
    <div className="card-body">
    
            <div classNameName="form-group">
               {/*  <p>{{!-- {{estado.id_estado}} --}}</p> */}
                     <select className="alert alert-dark" name="estado" id="estado" onChange={(evento) => {setEstado(evento.target.value)}} required>
                         {/*     {{!--            <option value="0" selected="selected">Regiones</option> --}} */}
                                        <option  /* value="1" */>Seleccionar Estado de carga</option>
                                        <option className="alert alert-success" value="1">Entregado</option>
                                        <option className="alert alert-danger" value="0">No entregado</option>
                                        </select>
            </div>
 {/*            {{!-- <div className="form-group">
                <input type="url" name="url" className="form-control" placeholder="URL" value="{{link.url}}">
            </div> --}}
            {{!-- <div className="form-group">
                <textarea name="description" rows="2" className="form-control" placeholder="Description">{{link.description}}</textarea>
            </div> --}} */}
            <div className="form-group">
                <button className="btn btn-success btn-block"  onClick={() => actualizarEstado()}>
                    Editar estado de mercaderia
                </button>
                
            </div>
            <div className='mt-2 container'>
            <Link to={`/cargas/estado`} ><b>Volver a cargas</b></Link> 
            </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default EditarEstado
