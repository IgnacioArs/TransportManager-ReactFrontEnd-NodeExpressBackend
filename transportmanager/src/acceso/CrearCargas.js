import React, { useEffect, useState } from 'react'
//para realizar peticiones usamos el modulo axios
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'
import alerta from 'sweetalert'
import {Accordion} from 'react-bootstrap'
import {faBuildingUser,faUserGroup,faUserPlus,faAdd,faTasks,faEdit,faCircleCheck,faEye,faShoppingBag, faUser,faLocation
  ,faCalendar,faIndent, faMessage,faDatabase} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const CrearCargas = () => {

  /* ESTADO PARA BODEGUERO */
  const [bodeguero,setBodeguero] = useState([]);

  const VolverCargas = useNavigate();


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


   const [IdAdmin,setIdAdmin] = useState(1)



//creamos el metodo que nos ayudara a crear la carga
const CrearCarga = async () => {
  setBodeguero_id(bodeguero.id)  
  /* setAdmin_id(bodeguero.id)  */
  setNombre(bodeguero.nombre)
  if(!bodeguero_id){
       alerta("!Ingresando responsable de carga, Click en crear carga")
       
  }else{
    console.log("DATOS DE LOS CAMPOS",nombre,mercaderia,origen,horasalida,destino,fecha,numerodeguia,detallemercaderia,destinatario,remitente,admin_id,bodeguero_id)

  //AQUI YA EMPEZAMOS A REALIZAR LA PETICION HTTP
  await axios.post('http://localhost:4000/crearCarga',{nombre:nombre,mercaderia:mercaderia,origen:origen,horasalida:horasalida,destino:destino,fecha:fecha,numerodeguia:numerodeguia,detallemercaderia:detallemercaderia,destinatario:destinatario,remitente:remitente,admin_id:admin_id,bodeguero_id:bodeguero_id}
  ).then(() => {
     console.log("!Creando carga FRONTEND");
     VolverCargas("/cargas/");
   })  

  }


}

const cargarBodeguero = () => {
  return JSON.parse(localStorage.getItem('usuario'))
  
}


useEffect(() => {
  setBodeguero(cargarBodeguero())
    setIdAdmin(1)
},[IdAdmin])


  return (
    <div classNameName='container'>
<html lang="es">
  <head>
    <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <meta name="description" content=""></meta>
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"></meta>
    <meta name="generator" content="Hugo 0.88.1"></meta>
    <title>Formulario De Carga</title>

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
  
<div className="container">
  <main>
    <div className="py-5 text-center">

      <h2>Crear Carga</h2>

      <p className="lead">Gestion de ingreso de carga, Asegurese de ingresar los datos correspondiente para realizar una carga.</p>
  <div className='col-md-4'>
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
</div> 
    </div>

    <div className="row g-5">
      <div className="col-md-7 col-lg-8">
      <Link to={`/cargas/estado`}><h5>Volver</h5></Link>
        <h4 className="mb-3">Formulario De Carga</h4>
       {/*  <form className="needs-validation" action="" method="post"> */}
          <div className="row g-3">
          <div className="col-12">
              <label for="address2" className="form-label">Nombre Creador<span className="text-muted"> (Detalle Nombre Creador)</span></label>
               <input type="text" className="form-control" name="nombre" placeholder="Creador de carga" onChange={(evento) => {setNombre(evento.target.value)}} required disabled value={bodeguero.nombre}></input>
            </div>

            <div className="col-12">
              <label for="Mercaderia" className="form-label">Mercaderia<span className="text-muted"> (Detalle Mercaderia)</span></label>
               <input type="text" className="form-control" name="mercaderia" placeholder="mercaderia" onChange={(evento) => {setMercaderia(evento.target.value)}} required></input>
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
              <label for="horasalida" className="form-label">Horario de salida<span className="text-muted">(Obligatorio)</span></label>
              <input type="time" className="form-control" name="horasalida" placeholder="Hora/Salida" onChange={(evento) => {setHorasalida(evento.target.value)}} required></input>
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
              <label for="fecha" className="form-label">Fecha actual<span className="text-muted"> (Elegir fecha actual)</span></label>
               <input type="date" className="form-control" name="fecha" placeholder="Fecha" onChange={(evento) => {setFecha(evento.target.value)}} required></input>
            </div>

        <h4 className="mb-3">Dato Mercaderia</h4>
            <div className="col-12">
              <label for="address2" className="form-label">numero de guia<span className="text-muted"> (n° de guia)</span></label>
               <input type="number" className="form-control" name="numerodeguia" placeholder="N° Guia" onChange={(evento) => {setNumerodeguia(evento.target.value)}} required></input>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">Detalle de mercaderia<span className="text-muted"> (Detalle Mercaderia)</span></label>
               <input type="text" className="form-control" name="detallemercaderia" placeholder="detalle mercaderia" onChange={(evento) => {setDetallemercaderia(evento.target.value)}} required></input>
            </div>
         
           <div className="col-12">
              <label for="address2" className="form-label">Destinatario<span className="text-muted"> (Destinario)</span></label>
               <input type="text" className="form-control" name="destinatario" placeholder="destinatario" 
               onChange={(evento) => {setDestinatario(evento.target.value)}} required></input>
            </div>

              <div className="col-12">
              <label for="address2" className="form-label">Remitente<span className="text-muted"> (Ingresar remitente)</span></label>
               <input type="text" className="form-control" name="remitente" placeholder="Remitente" onChange={(evento) => {setRemitente(evento.target.value)}} required></input>
            </div>

  
         


            {bodeguero.email? (<div className="col-12">
              <label for="address2" className="form-label">Id bodeguero <span className="text-muted"></span></label>
             <input type="text" className="form-control" name="bodeguero_id" placeholder="" onChange={(evento) => {setBodeguero_id(evento.target.value)}} value={bodeguero.id}  disabled  /* value="{{user.id}}" */></input>
            </div>):(  <div className="col-12">
              <label for="address2" className="form-label">Id bodeguero <span className="text-muted"></span></label>
             <input type="text" className="form-control" name="bodeguero_id" placeholder="" onChange={(evento) => {setBodeguero_id(evento.target.value)}}   value={bodeguero.id}    disabled  /* value="{{user.id}}" */></input>
            </div>)}

          

          


          </div>
<hr></hr>

           <button className="btn btn-success btn-block" onClick={CrearCarga} >Agregar Carga</button>
    {/*     </form> */}
      </div>
    </div>
  </main>


</div>


    <script src="/docs/5.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

      <script src="form-validation.js"></script>
  </body>
</html>
    </div>
  )
}

export default CrearCargas
