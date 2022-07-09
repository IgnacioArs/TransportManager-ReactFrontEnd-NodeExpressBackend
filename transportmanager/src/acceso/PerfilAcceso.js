import React, { useEffect, useState } from 'react'
import './css/perfil.css'
//tomamos los datos con el siguiente hook que nos entrega react-router-dom
import {Navigate, useParams, useNavigate } from 'react-router-dom'
import { Alert, Button } from 'react-bootstrap'
import {faBuildingUser,faUserGroup,faUserPlus,faAdd,faTasks,faEdit,faCircleCheck,faEye,faShoppingBag, faUser,faLocation
  ,faCalendar,faIndent, faMessage,faDatabase, faVoicemail} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const PerfilAcceso = () => {



const [bodeguero,setBodeguero] = useState([]);

  // el id del parametro o del params es el encargado de guardar los datos
/* asi se utiliza los parametros en la nueva version 6 */
const parametro = useParams();
/* console.log("VIENDO EL PARAMETRO",parametro) */

//ahora para navegar de forma simple existe otro hook llamado useNavigate()
const navegacion = useNavigate()



const guardandoUsuario = () => {
  return JSON.parse(localStorage.getItem('usuario'))
}


 useEffect(() => {
      setBodeguero(guardandoUsuario());
   
},[]) 


//usamos el boton para realizar un ruta y encontrarla
const Boton = () => {
  navegacion("/cargas")
}

  return (
    <div className='container mt-5'>
{/* <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script> */}


<div class="container">
<Alert variant="success">
  <Alert.Heading>Bienvenido, estas dentro del sistema de carga</Alert.Heading>
  <p>
    Sistema de creacion de cargas, podras gestionar todas las cargas necesarias.
  </p>
  <hr />
  <p className="mb-0">
    Acontinuacion los datos obtenidos del acceso.
  </p>
  <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-12">
  
                <div class="row">
                    <div class="col-sm-6 col-md-8 ">
                        <img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
                    </div>
                      <div className='card'>
                            <div className='card-body'>
                            <div class="col-md-6 col-md-12">
                        <h4>
                           Nombre: {bodeguero.nombre} <FontAwesomeIcon icon={faUser} /></h4>

                        {bodeguero.comuna? (<small><cite title="San Francisco, USA">{bodeguero.comuna} <FontAwesomeIcon icon={faLocation} /><i class="glyphicon glyphicon-map-marker">
                        </i></cite></small>):(<div class="alert alert-info" role="alert">
                         Acciones del administrador
                          </div>)}
                        <p>
                            {bodeguero.email? (<i class="glyphicon glyphicon-envelope"> {bodeguero.email} <FontAwesomeIcon icon={faVoicemail} /></i>):(<div>
                          </div>)}
                            <br />
                            {bodeguero.rut? (<i class="glyphicon glyphicon-globe"> {bodeguero.rut} <FontAwesomeIcon icon={faIndent} /></i>):(<div >
                       
                          </div>)}
                       
                             
                            <br />
                            {bodeguero.fecha_creacion? (<i class="glyphicon glyphicon-gift"> {bodeguero.fecha_creacion} <FontAwesomeIcon icon={faCalendar} /></i>):(<div>
                 
                          </div>)}
                        </p>
                        <div class="btn-group">
                        <Button onClick={() => Boton()} variant="outline-success">
                         Ingresar al sistema
                          </Button>
                         {/*    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                <span class="caret"></span><span class="sr-only">Social</span>
                            </button> */}
                       {/*      <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Twitter</a></li>
                                <li><a href="https://plus.google.com/+Jquery2dotnet/posts">Google +</a></li>
                                <li><a href="https://www.facebook.com/jquery2dotnet">Facebook</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Github</a></li>
                            </ul> */}
                        </div>
                    </div>
                            </div>
                      </div>
                </div>
            
        </div>
    </div>
</Alert>

</div>
    {/* <h1>hola soy el perfil</h1>
    <h1>Obteniendo el parametro {`${parametro.id}`}</h1> */}
    {/* <button className='btn-success btn' onClick={Boton}>Ir a las cargas actuales</button> */}
{/*       esto nos ayudara a bloguear las rutas basicamente Navigate es un redirect */}
      {/* {parametro.id ? (<Navigate to="/perfilAcceso/{`${parametro.id}`}"></Navigate>):(<Navigate to="/"></Navigate>)} */}
  </div>
  )
}

export default PerfilAcceso
