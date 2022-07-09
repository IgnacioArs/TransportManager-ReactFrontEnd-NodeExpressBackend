import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//no olvidar para poder manejar las rutas de vemos usar el siguiente hooks
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Perfil from './context/Perfil'
import UsuarioLista from './context/UsuarioLista'
//aqui importamos todo el estado de del archivo user state
import UsuarioEstado from './context/usuarios/UsuarioState';
//importamos bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
//para la navegacion importamos el componente de navegacion
import Navegacion from './componentes/Navegacion';
//importamos el cuerpo "/" ruta inicial
import Cuerpo from './componentes/Cuerpo';
/* ******************************************************************** */
//importamos el login para poder realizar el login
import LoginAdministrador from './componentes/LoginAdministrador';
//aqui obtenemos el loginBodeguero
import LoginBodeguero from './componentes/LoginBodeguero';
/* importamos el perfil de acceso */
import PerfilAcceso from './acceso/PerfilAcceso'
/* ********************************************************************** */
/* importamos para crear la carga */
import CrearCargas from './acceso/CrearCargas';
/* importamos carga  */
import Cargas from './acceso/Cargas';
/* llamamos al componente EditarCarga */
import EditarCarga from './acceso/EditarCarga';
/* llamador al componente editar estado */
import EditarEstado from './acceso/EditarEstado';
//crear bodeguero
import CrearBodeguero from './acceso/CrearBodeguero';
//crear administrador
import CrearAdministrador from './acceso/CrearAdministrador';
//PARA EL PROPIETARIO DE LA CARGA
import Propietario from './acceso/Propietario';
//PARA VER A TODOS LOS BODEGUEROS Y REALIZAR ACCIONES POR PARTE DEL ADMINISTRADOR
import Bodegueros from './acceso/Bodegueros';
//LLAMAOS AL COMPONENTE PARA ACTUALIZAR 1 BODEGUERO
import EditarBodeguero from './acceso/EditarBodeguero';

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {

   const [bodeguero,setBodeguero] = useState([]); 

  const guardandoUsuario = () => {
    
    const bodeguero =JSON.parse(localStorage.getItem('usuario'))
    setBodeguero(bodeguero)

  } 

 useEffect(()=> {
  guardandoUsuario();
},[bodeguero]) 


  return (

<UsuarioEstado>
<BrowserRouter>
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

{/* {!bodeguero ? <Navegacion />:<div></div>} */}
<Navegacion/>
<Routes>
{/* <Route path="/" element={<Navegacion/>}/> */}
<Route path="/" element={<Cuerpo/>}/>
<Route path="/loginAdministrador" element={<LoginAdministrador/>} />
<Route path="/loginBodeguero" element={<LoginBodeguero/>} />
{/* rutas de creacion */}
<Route path="/crearCarga" element={<CrearCargas/>} />
<Route path="/usuarios" element={<UsuarioLista/>} />
<Route path="/CrearBodegueros" element={<CrearBodeguero/>} />
<Route path="/CrearAdministrador" element={<CrearAdministrador/>} />
{/* aqui usamos el route para enviar parametros */}
<Route path="/perfilAcceso/:id" element={<PerfilAcceso/>} />
<Route path="/EditarCarga/:id" element={<EditarCarga/>} />
<Route path="/EditarEstado/:id" element={<EditarEstado/>} />
<Route path="/EditarBodeguero/:id" element={<EditarBodeguero/>} />
<Route path="/propietario/:id" element={<Propietario/>} />
{/* para crear subcomponentes y adjuntarlos necesitamos agregar lo siguiente /* */}
<Route path="/cargas/*" element={<Cargas/>} />
<Route path='/bodegueros' element={<Bodegueros/>}/>
{/* PAGINAS QUE NO EXISTEN DENTRO DEL REACT-ROUTER-DOM */}
<Route path="*" element={<div>Error 404 not Found</div>}/>

</Routes>
{/* **************************************************************** */}
{/* relleno para el pie de pagina */}

{/* **************************************************************** */}
{/* <SobrePie/>
<Pie/> */}
</BrowserRouter>
</UsuarioEstado>

);
}

export default App;
