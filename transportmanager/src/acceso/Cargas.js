import axios from 'axios'
import React, { Component, useContext, useEffect, useState } from 'react'

import { Routes,Route,useNavigate,Link} from 'react-router-dom'
import Estado from './Estado'

//importamos usuario context ya que ahi esta el contexto de las cargas
import UsuarioContext from '../context/usuarios/UsuarioContext'
//importamos acordeon por parte de bootstrap
import { Accordion,flush,Breadcrumb,ButtonGroup,Button } from 'react-bootstrap'
import {faBuildingUser,faUserGroup,faUserPlus,faAdd,faTasks,faEdit,faCircleCheck,faEye,faShoppingBag, faUser,faLocation
,faCalendar,faIndent, faMessage,faDatabase} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const a = 10

const Cargas = () => {
/* ESTADO PARA BODEGUERO */
  const [bodeguero,setBodeguero] = useState([]);
/* para verificar si el dato es del administrador o no */
const [administrador,setAdmnistrador] = useState("administrador")

 const [cargaDato,setDato]=useState()
  //nos ayudara a llevarlo al estado
   const verEstado = useNavigate()
  
   //creamos el contexto para obtener las cargas 
   const {obtenerCargas,cargas,usuarios,obtenerPerfil,seleccionarUsuario} = useContext(UsuarioContext)
  
const cargarBodeguero = () => {
  return JSON.parse(localStorage.getItem('usuario'))
}

      useEffect(() =>{
          obtenerCargas();
            console.log("MOSTRANDO LAS CARGAS DEL CONTEXTO ahora siiii",cargas)
            setBodeguero(cargarBodeguero())
        
          },[])
/* 
const cargas = async () => {
 await axios.get('http://localhost:4000/cargas').then((response) => {
   setCarga(response.data)
   setNombre(response.data.nombre)
   setMercaderia(response.data.mercaderia)
   setOrigen(response.data.origen)
   setHorasalida(response.data.horasalida)
   setDestino(response.data.destino)
   setFecha(response.data.fecha)
   setNumerodeguia(response.data.numerodeguia)
   setDetallemercaderia(response.data.detallemercaderia)
   setDestinatario(response.data.destinatario)
   setRemitente(response.data.remitente)
   setAdmin_id(response.data.admin_id)
   setBodeguero_id(response.data.bodeguero_id)
 })
console.log("MOSTRANDO CARGA",carga[0])
} 
 */
const Bodegueros = () => {
  verEstado("/bodegueros")
}

const CrearBodegueros = () => {
  verEstado("/CrearBodegueros")
}

const CrearAdministrador = () => {
  verEstado("/CrearAdministrador")
}


const Boton = () => {

  verEstado("/cargas/estado")
}




  return (

    
    <div className='justify-content-center'>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>



{/*   <h2 className='mt-5'>Cargas Actuales</h2> */}
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        
 <div className="btn-toolbar mb-2 mb-md-0">

<hr></hr>

       {/*   <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>  */}

        </div>
        <div className='col-md-4 mt-5'>
        
</div>
        <div className="btn-group me-2">
 {/*        <Breadcrumb>
        <Breadcrumb.Item >{bodeguero.email? (<Link disabled  className="link-success">Bodeguero</Link>):(<Link to={"/bodegueros"} className="link-success">Bodegueros</Link> )}</Breadcrumb.Item>
        <Breadcrumb.Item >
        {bodeguero.email? (<Link disabled  className="link-success">Crear Bodeguero</Link>):(<Link to={"/CrearBodeguero"}className="link-success">Crear Bodeguero</Link>)}
        </Breadcrumb.Item>
        <Breadcrumb.Item >
        {bodeguero.email?(<Link disabled className="link-success">Crear Administrador</Link>):(<Link to={"/CrearAdministrador"} className="link-success">Crear Administrador</Link>)}
        </Breadcrumb.Item>
        <Breadcrumb.Item >
        <Link to={"/cargas/estado"} className="link-success">Ver estados</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Acciones</Breadcrumb.Item>
        </Breadcrumb> */}
        <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">{bodeguero.email? (<Button disabled variant="secondary">Bodegueros <FontAwesomeIcon icon={faUserGroup} /></Button>):(<Button variant="secondary" onClick={() => Bodegueros()}>Bodegueros <FontAwesomeIcon icon={faUserGroup} /></Button>)}</Button>
  <Button variant="secondary">{bodeguero.email? (<Button disabled variant="secondary">Crear bodegueros <FontAwesomeIcon icon={faBuildingUser} /></Button>):(<Button variant="secondary" onClick={() => CrearBodegueros()}>Crear bodegueros <FontAwesomeIcon icon={faBuildingUser} /></Button>)}</Button>
  <Button variant="secondary">{bodeguero.email? (<Button disabled variant="secondary">Crear adminsitrador <FontAwesomeIcon icon={faUserPlus} /></Button>):(<Button variant="secondary" onClick={() => CrearAdministrador()}>Crear adminsitrador <FontAwesomeIcon icon={faUserPlus} /></Button>)}</Button>
  <Button variant="secondary" onClick={() => Boton()}>Estados Carga <FontAwesomeIcon icon={faTasks} /></Button>
</ButtonGroup>
        </div>

      </div> 

     <div className='container col-md-6'>
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
                            {bodeguero.fecha_creacion? (<i class="glyphicon glyphicon-gift">Fecha Creacion: {bodeguero.fecha_creacion} <FontAwesomeIcon icon={faCalendar} /><br></br><Link to={`/perfilAcceso/${bodeguero.nombre}`}><b>Volver a perfil</b></Link></i>):(<div>
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
      <div className='container col-md-12'>
      <div className="table-responsive margin-absolute mt-5 form-group col-md-12">
      
      <h2 className='mt-5 text-center'>Cargas Actuales </h2>
        <table className="table table-striped table-sm boder-1">
          <thead>
            <tr>
              <th scope="col"># id</th>
              <th scope="col">Nombre Creador</th>
              <th scope="col">Mercaderia</th>
              <th scope="col">Origen</th>
              <th scope="col">Hora De Salida</th>
              <th scope="col">Destino</th>
              <th scope="col">Fecha</th>
              <th scope="col">Numero De Guia</th>
              <th scope="col">Detalle Mercaderia</th>
              <th scope="col">Destinatario</th>
              <th scope="col">Remitente</th>
              <th scope="col">Admin</th>
              <th scope="col">Bodeguero</th>
              <th scope="col">Fecha Creacion</th>
              <th scope="col">Estados Actuales</th>
              <th scope="col">Editar La Carga</th>
            </tr>
          </thead>
          <tbody>
        {cargas.map(carga => (<tr>
          <th scope="col d-flex">{`${carga.id_carga}`}</th>
          <th scope="col d-flex">{`${carga.nombre}`}</th>
          <th scope="col d-flex">{`${carga.mercaderia}`}</th>
          <th scope="col d-flex">{`${carga.origen}`}</th>
          <th scope="col d-flex">{`${carga.horasalida}`}</th>
          <th scope="col d-flex">{`${carga.destino}`}</th>
          <th scope="col d-flex">{`${carga.fecha}`}</th>
          <th scope="col d-flex">{`${carga.numerodeguia}`}</th>
          <th scope="col d-flex">{`${carga.detallemercaderia}`}</th>
          <th scope="col d-flex">{`${carga.destinatario}`}</th>
          <th scope="col d-flex">{`${carga.remitente}`}</th>
          <th scope="col d-flex">{`${carga.admin_id}`}<th>{carga.nombre==administrador?(<div className='alert alert-success'>Propietario</div>):(<div className='alert alert-danger'>No Propietario</div>)}</th></th>
          <th scope="col d-flex">{`${carga.bodeguero_id}`}<th>{carga.nombre==administrador?(<div className='alert alert-danger'>No Propietario</div>):(<div className='alert alert-success'>Propietario <Link to={`/propietario/${carga.bodeguero_id}`}>Ver</Link> <FontAwesomeIcon icon={faEye}/></div>)}</th></th>
          <th scope="col d-flex">{`${carga.fecha_creacion}`}</th>
          <th><Link to={`/crearCarga`} className="link-success">Crear Carga </Link><FontAwesomeIcon icon={faAdd} /></th>
          <th><a href='/cargas/estado' onClick={Boton} className="link-primary">Estados de cargas</a><FontAwesomeIcon icon={faCircleCheck}/></th>
           <th><Link to={`/EditarCarga/${carga.id_carga}`} className="link-secondary">Editar carga</Link> <FontAwesomeIcon icon={faEdit} /></th> 
          </tr>))}
      </tbody>
      </table>
      </div>
      </div>
      <Routes>
        {/* SUBCOMPONENTES */}
    {/*     para poder entrar y ver que aparescan estos dos es asi de la siguiente forma
        http://localhost:3000/cargas/estado */}
        {/* http://localhost:3000/cargas */} {/* ---> solo mostrara la carga nada mas */}
        <Route path='/estado' element={<Estado></Estado>}></Route>
      </Routes>
    </div>
  )
}

export default Cargas
