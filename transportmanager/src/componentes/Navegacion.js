import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
//importamos el color de activo al momento de elegir una ruta o un a href --> la cual estamos usando navlink 
//son su clase nav-link
import './activo.css'
import axios from 'axios'
import alerta from 'sweetalert'
import { render } from '@testing-library/react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import {faUser,faDoorClosed,faUserCircle,faBuildingUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Navegacion = () => {
   

  
  const [bodeguero,setBodeguero] = useState([]);

  const navegacion = useNavigate()



  const guardandoUsuario = () => {
    
    const bodeguero =JSON.parse(localStorage.getItem('usuario'))
    setBodeguero(bodeguero)
/*     console.log("LOCALSTORAGE EN NAVEGACION!!",bodeguero) */

  }
  
const Perfil = () => {
  navegacion("/perfilAcceso/"+bodeguero.nombre)
}
  
  useEffect(() => {
       
    guardandoUsuario();

          
  },[bodeguero])


  /* if(bodeguero){
    this.render
  } */

 

const cerrarSession = () => {
  localStorage.clear()
  setBodeguero(null)
  navegacion("/loginBodeguero")
}







  return (
 
    <html lang="es" className="h-100">
      <head>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content=""></meta>
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"></meta>
        <meta name="generator" content="Hugo 0.98.0"></meta>
        <title>TRANSPORTMANAGER</title>
    
        <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/cover/"></link>
    
        
    
        
    
    <link href="/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
    

    <link rel="apple-touch-icon" href="/docs/5.2/assets/img/favicons/apple-touch-icon.png" sizes="180x180"></link>
    <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png"></link>
    <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png"></link>
    <link rel="manifest" href="/docs/5.2/assets/img/favicons/manifest.json"></link>
    <link rel="mask-icon" href="/docs/5.2/assets/img/favicons/safari-pinned-tab.svg" color="#712cf9"></link>
    <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon.ico"></link>
    <meta name="theme-color" content="#712cf9"></meta>
    
    
        <style>
       
        </style>
    
        

        <link href="cover.css" rel="stylesheet"></link>
      </head>
      <body className="d-flex h-100 text-center text-white bg-dark">
        
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        {bodeguero? (<div className='container'>
        <h3 className="float-md-start mb-0">TRANSPORTMANAGER</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
                <tr>
                  <td>
                  <p className='text-white'>{bodeguero.nombre}  <FontAwesomeIcon icon={faUser} />
</p>
                  </td>
                  <td>
                  <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Menu"
          menuVariant="dark"
        >
     {/*      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item> */}
          <NavDropdown.Item onClick={() => Perfil()}>Perfil <FontAwesomeIcon icon={faUserCircle} /></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => cerrarSession()}>Cerrar Session <FontAwesomeIcon icon={faDoorClosed} /></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
                  </td>
                </tr>
                <tr>
                  <td>
                    <hr></hr>

                  </td>
                </tr>
          </nav>
        </div>):(<div>
          <h3 className="float-md-start mb-0">TRANSPORTMANAGER</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
          <NavLink className="navbar-brand" to="/">
            <i className="material-icons">
                 </i>Inicio
        </NavLink>
         <NavLink to="/CrearAdministrador" className={({isActive}) => isActive ? 'activo':''+'nav-link'}>Crear Administrador</NavLink> 
        <NavLink to="/loginAdministrador" className={({isActive}) => isActive ? 'activo':''+'nav-link'}>Login Administrador</NavLink>
        <NavLink to="/loginBodeguero" className={({isActive}) => isActive ? 'activo':''+'nav-link'}>Login Bodeguero</NavLink>
          </nav>
        </div>)}
      </header>
    </div>
      </body>
    </html>

  )
}

export default Navegacion
