import React, { useContext, useEffect,useState } from 'react'
//para tomar los datos de la carga que hay que editar
//llamamos al hooks
import {Link, useNavigate, useParams} from 'react-router-dom'
import UsuarioContext from '../context/usuarios/UsuarioContext'
import axios from 'axios'
import alerta from 'sweetalert'
import { Accordion } from 'react-bootstrap'
import {faBuildingUser,faUserGroup,faUserPlus,faAdd,faTasks,faEdit,faCircleCheck,faEye,faShoppingBag, faUser,faLocation
  ,faCalendar,faIndent, faMessage,faDatabase} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const EditarCarga = () => {




   const {obtenerCarga,seleccionarCarga} = useContext(UsuarioContext) 
  
  const EditarCarga = useParams()

 /*  console.log("IdCarga",EditarCarga.id) */
  const VolverCargas = useNavigate();

 /* ESTADO PARA BODEGUERO */
 const [bodeguero,setBodeguero] = useState([]);
//este estado es para mostrar la carga que vamos actualizar
const [cargaUpdate,setCargaUpdate] = useState()


  const [nombre,setNombre] = useState("")
  const [mercaderia,setMercaderia] = useState("")
  const [origen,setOrigen] = useState("")
  const [horasalida,setHorasalida] = useState("")
  const [destino,setDestino] = useState("")
  const [fecha,setFecha] = useState("")
  const [numerodeguia,setNumerodeguia] = useState(0)
  const [detallemercaderia,setDetallemercaderia] = useState("")
  const [destinatario,setDestinatario] = useState("")
  const [remitente,setRemitente] = useState("")
  const [admin_id,setAdmin_id] = useState(0)
  const [bodeguero_id,setBodeguero_id] = useState(0)


  const cargarBodeguero = () => {
    return JSON.parse(localStorage.getItem('usuario'))
  }

  //metodo para mostrar la carga a actualizar
const cargaActualizar = async () => {
         const carga = await axios.get('http://localhost:4000/editarCarga/'+EditarCarga.id)
         setCargaUpdate(carga.data)
}

useEffect( () => {
  /*  obtenerCarga(EditarCarga.id) */
/*   obtenerCarga(EditarCarga.id) */
/*    console.log("OBTENIENDO LA CARGA PARA ACTUALIZAR",seleccionarCarga)  */
 setBodeguero(cargarBodeguero())
 if(!cargaUpdate){
      cargaActualizar()
   /*    console.log("LA CARGA ES ========>",cargaUpdate) */
 }
},[])






//creamos el metodo que nos ayudara a crear la carga
const CargaEditar = async () => {

  setBodeguero_id(bodeguero.id)
/*   setAdmin_id(bodeguero.id) */
  setNombre(bodeguero.nombre)
  if(!bodeguero_id){
      alerta("!Ingresando dato del responsable para editar la carga, Click en editar la carga")
  }else{
    console.log("DATOS DE LOS CAMPOS",nombre,mercaderia,origen,horasalida,destino,fecha,numerodeguia,detallemercaderia,destinatario,remitente,admin_id,bodeguero_id)

    const id = EditarCarga.id 
  //AQUI YA EMPEZAMOS A REALIZAR LA PETICION HTTP
   await axios.post('http://localhost:4000/editarCarga/'+id,{nombre:nombre,mercaderia:mercaderia,origen:origen,horasalida:horasalida,destino:destino,fecha:fecha,numerodeguia:numerodeguia,detallemercaderia:detallemercaderia,destinatario:destinatario,remitente:remitente,admin_id:admin_id,bodeguero_id:bodeguero_id}
   ).then(() => {
      console.log("!Editando carga FRONTEND");
      VolverCargas("/cargas/")
    }) 
  }



/*  const CargaNueva = {nombre:nombre,mercaderia:mercaderia,origen:origen,horasalida:horasalida,destino:destino,fecha:fecha,numerodeguia:numerodeguia,detallemercaderia:detallemercaderia,destinatario:destinatario,remitente:remitente,admin_id:admin_id,bodeguero_id:bodeguero_id}  */

}





  return (
    <div>
          <div classNameName='container'>
            
<html lang="es">
  
  <head>
    <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <meta name="description" content=""></meta>
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"></meta>
    <meta name="generator" content="Hugo 0.88.1"></meta>
    <title>Editar carga seleccionada</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/checkout/"></link>

    


<link href="/docs/5.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>


<link rel="apple-touch-icon" href="/docs/5.1/assets/img/favicons/apple-touch-icon.png" sizes="180x180"></link>
<link rel="icon" href="/docs/5.1/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png"></link>
<link rel="icon" href="/docs/5.1/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png"></link>
<link rel="manifest" href="/docs/5.1/assets/img/favicons/manifest.json"></link>
<link rel="mask-icon" href="/docs/5.1/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3"></link>
<link rel="icon" href="/docs/5.1/assets/img/favicons/favicon.ico"></link>
<meta name="theme-color" content="#7952b3"></meta>
<link href="form-validation.css" rel="stylesheet"></link>

</head>
  <body className="bg-light">
{/*   <Link to={`/cargas/estado`}><h4>Volver</h4></Link> */}
<div className="container">
  <main>
    <div className="py-5 text-center">

      <h2>Editar carga </h2>
   {/*      <p>{`${seleccionarCarga[0].nombre}`}</p> */}
      <p className="lead"></p> 
  
    </div>

    <div className="row g-5">

      <div className="col-md-7 col-lg-8">

        
      <div className='col-md-5'>
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
    
    </div>):(<div class="alert alert-danger" role="alert">
  !Bodeguero no se encuentra logueado
</div>)}
<hr></hr>
{cargaUpdate? (

<table class="table table-dark table-striped">
{cargaUpdate.map(carga => (
      <table class="table">
      <thead className='thead-dark'>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">nombre</th>
          <th scope="col">mercaderia</th>
          <th scope="col">origen</th>
          <th scope="col">horasalida</th>
          <th scope="col">destino</th>
          <th scope="col">fecha</th>
          <th scope="col">n° de guia</th>
          <th scope="col">detallemercaderia</th>
          <th scope="col">destinatario</th>
          <th scope="col">remitente</th>
          <th scope="col">fecha creacion</th>
        </tr>
      </thead>
      <tbody>
      <tr>
<th scope="row"><p>{`${carga.id_carga}`}</p></th>
<th scope="row"><p>{`${carga.nombre}`}</p></th>
<th scope="row"><p>{`${carga.mercaderia}`}</p></th>
<th scope="row"><p>{`${carga.origen}`}</p></th>
<th scope="row"><p>{`${carga.horasalida}`}</p></th>
<th scope="row"><p>{`${carga.destino}`}</p></th>
<th scope="row"><p>{`${carga.fecha}`}</p></th>
<th scope="row"><p>{`${carga.numerodeguia}`}</p></th>
<th scope="row"><p>{`${carga.detallemercaderia}`}</p></th>
<th scope="row"><p>{`${carga.destinatario}`}</p></th>
<th scope="row"><p>{`${carga.remitente}`}</p></th>
<th scope="row"><p>{`${carga.fecha_creacion}`}</p></th>
</tr>
      </tbody>
    </table>
))}
</table>):(<div className='alert alert-danger'>!No se ha podido cargar la carga actualizar</div>)}
</div> 
<Link to={`/cargas/estado`}><h4>Volver</h4></Link>
        <h4 className="mb-3">Formulario para la actualizacion de la carga</h4>

      {/*   <form className="needs-validation" action="" method="post"> */}
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">Nombre Creador</label>
              <input type="text" className="form-control" onChange={(evento) => {setNombre(evento.target.value)}} id="firstName"  name="nombre" placeholder="Nombre creador" disabled value={bodeguero.nombre} required></input>
              <div className="invalid-feedback">
                Nombre creador requerido!
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Mercaderia</label>
              <input type="text" className="form-control" onChange={(evento) => {setMercaderia(evento.target.value)}} placeholder="Mercaderia" id="lastName" name="mercaderia"  required></input>
              <div className="invalid-feedback">
                Nombre de mercaderia requerida!
              </div>
            </div>

            <div className="col-12">
              <label for="username" className="form-label">Origen</label>
              <div className="input-group has-validation">
                <span className="input-group-text"><i className="fa-solid fa-compass">
                                       <div className="form-group" aria-placeholder="Origen">
                                            <select name="origen" id="region" onChange={(evento) => {setOrigen(evento.target.value)}} required>
                            {/*      {{!--            <option value="0" selected="selected">Regiones</option> --}} */}
                                            <option value="Tarapaca">1 Tarapaca</option>
                                            <option value="Antofagasta">2 Antofagasta</option>
                                            <option value="Atacama">3 Atacama</option>
                                            <option value="Coquimbo">4 Coquimbo</option>
                                            <option value="Valparaiso">5 Valparaiso</option>
                                            <option value="O'Higgins">6 O'Higgins</option>
                                            <option value="Maule">7 Maule</option>
                                            <option value="Bio - Bio">8 Bio - Bio</option>
                                            <option value="Araucania">9 Araucania</option>
                                            <option value="Los Lagos">10 Los Lagos</option>
                                            <option value="Aisen">11 Aisen</option>
                                            <option value="Magallanes Y Antartica">12 Magallanes Y Antartica</option>
                                            <option value="Metropolitana">13 Metropolitana</option>
                                            <option value="Los Rios">14 Los Rios</option>
                                            <option value="Arica y Parinacota">15 Arica y Parinacota</option>
                                            </select>
                                        </div>
                </i></span>
              <div className="invalid-feedback">
                    Por favor se requiere Origen
                </div>
              </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">Horario de salida<span className="text-muted">(Obligatorio)</span></label>
              <input type="time" className="form-control" onChange={(evento) => {setHorasalida(evento.target.value)}}  name="horasalida" placeholder="Hora/Salida" required></input>
              <div className="invalid-feedback">
              Por favor ingrese horario de salida!
              </div>
            </div>

           <div className="col-12">
              <label for="username" className="form-label">Destino</label>
              <div className="input-group has-validation">
                <span className="input-group-text"><i className="fa-solid fa-compass">
                                       <div className="form-group" aria-placeholder="Origen">
                                            <select name="destino" id="region" onChange={(evento) => {setDestino(evento.target.value)}} required>
                               {/*   {{!--            <option value="0" selected="selected">Regiones</option> --}} */}
                                            <option value="Tarapaca">1 Tarapaca</option>
                                            <option value="Antofagasta">2 Antofagasta</option>
                                            <option value="Atacama">3 Atacama</option>
                                            <option value="Coquimbo">4 Coquimbo</option>
                                            <option value="Valparaiso">5 Valparaiso</option>
                                            <option value="O'Higgins">6 O'Higgins</option>
                                            <option value="Maule">7 Maule</option>
                                            <option value="Bio - Bio">8 Bio - Bio</option>
                                            <option value="Araucania">9 Araucania</option>
                                            <option value="Los Lagos">10 Los Lagos</option>
                                            <option value="Aisen">11 Aisen</option>
                                            <option value="Magallanes Y Antartica">12 Magallanes Y Antartica</option>
                                            <option value="Metropolitana">13 Metropolitana</option>
                                            <option value="Los Rios">14 Los Rios</option>
                                            <option value="Arica y Parinacota">15 Arica y Parinacota</option>
                                            </select>
                                        </div>
                </i></span>
              <div className="invalid-feedback">
                    Por favor se requiere destino
                </div>
              </div>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">Fecha actual<span className="text-muted"> (Elegir fecha actual)</span></label>
               <input type="date" className="form-control" onChange={(evento) => {setFecha(evento.target.value)}} name="fecha" placeholder="Fecha"  required></input>
            </div>

        <h4 className="mb-3">Dato Mercaderia</h4>
            <div className="col-12">
              <label for="address2" className="form-label">numero de guia<span className="text-muted"> (n° de guia)</span></label>
               <input type="number"  className="form-control" onChange={(evento) => {setNumerodeguia(evento.target.value)}} name="numerodeguia" placeholder="N° Guia" required></input>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">Detalle de mercaderia<span className="text-muted"> (Detalle Mercaderia)</span></label>
               <input type="text"  className="form-control" onChange={(evento) => {setDetallemercaderia(evento.target.value)}} name="detallemercaderia" placeholder="detalle mercaderia" required></input>
            </div>
         
           <div className="col-12">
              <label for="address2" className="form-label">Destinatario<span className="text-muted"> (Destinario)</span></label>
               <input type="text" className="form-control" onChange={(evento) => {setDestinatario(evento.target.value)}} name="destinatario" placeholder="destinatario" required></input>
            </div>

              <div className="col-12">
              <label for="address2" className="form-label">Remitente<span className="text-muted"> (Ingresar remitente)</span></label>
               <input type="text" className="form-control"  onChange={(evento) => {setRemitente(evento.target.value)}} name="remitente" placeholder="Remitente" required></input>
            </div>

  
         


            {bodeguero.email? (<div className="col-12">
              <label for="address2" className="form-label">Id bodeguero <span className="text-muted"></span></label>
             <input type="text" className="form-control" name="bodeguero_id" placeholder="" onChange={(evento) => {setBodeguero_id(evento.target.value)}} value={bodeguero.id}  disabled  /* value="{{user.id}}" */></input>
            </div>):(  <div className="col-12">
              <label for="address2" className="form-label">Id bodeguero <span className="text-muted"></span></label>
             <input type="text" className="form-control" name="bodeguero_id" placeholder="" onChange={(evento) => {setBodeguero_id(evento.target.value)}}   value={bodeguero.id}    disabled  /* value="{{user.id}}" */></input>
            </div>)}

          </div>
          <div className='container col-md-6'>
         
          </div>
<hr></hr>

           <button className="btn btn-success btn-block" onClick={CargaEditar}>Editar carga</button>
     {/*    </form> */}
      </div>
    </div>
  </main>


</div>


    <script src="/docs/5.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

      <script src="form-validation.js"></script>
  </body>
</html>
    </div>
    </div>
  )
}

export default EditarCarga
