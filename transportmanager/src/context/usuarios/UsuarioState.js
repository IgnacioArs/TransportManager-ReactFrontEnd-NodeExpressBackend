import React,{useReducer} from "react"
//importamos el UsuarioReducer
import UsuarioReducer from './UsuarioReducer'
// aqui importamos el contexto 
import UsuarioContext from "./UsuarioContext"
//aqui importaremos axios para ver los datos que estan el la api
import axios from 'axios'

const UsuarioEstado = (props) => {

      //iniciamos una constante la cual cuenta con dos propiedades  
      const iniciarStado = {
            usuarios:[],
            seleccionarUsuario:null,
            seleccionarCarga:null,
            cargas:[],
            estados:[]
        }
        const [state, dispatch] =useReducer(UsuarioReducer,iniciarStado)
       /* USUARIOS ************************************************************************** */
        //aqui obtendremos a todos los usuario
        const obtenerUsuarios= async () => {
                const todosLosUsuarios = await axios.get('https://reqres.in/api/users')
                dispatch({
                    type: 'OBTENER_USUARIOS',
                    payload:todosLosUsuarios.data.data
                })
             console.log("obteniendo los usuarios",todosLosUsuarios)
        }

        
        //aqui obtendremos solo 1 usuario con el parametro id que se le va asignar
        const obtenerPerfil = async (id) => {
            const unUsuario = await axios.get('https://reqres.in/api/users/'+id)
            dispatch({
                type:'OBTENER_PERFIL',
                payload:unUsuario.data.data
            })
        
        }


        const obtenerBodeguero = async (nombre,contrasena) => {
            nombre = nombre
            contrasena = contrasena
            const unUsuario = await axios.get('http://localhost:4000/loginBodeguero/'+nombre+"/"+contrasena)
            dispatch({
                type:'OBTENER_PERFIL',
                payload:unUsuario.data.data
            })
        
        }

 /* USUARIOS ************************************************************************** */

/***********************CARGAS **************************************************************************/
        const obtenerCargas = async () => {
          const cargas =  await axios.get('http://localhost:4000/cargas')
            dispatch({
                type:'OBTENER_CARGAS',
                payload:cargas.data
            })
                    console.log("obteniendo las cargas",cargas.data)
                    //hay que mostrarlos por pantalla
        }

        //aqui estamos obteniendo una carga
        const obtenerCarga = async (id) => {
            const carga = await axios.get('http://localhost:4000/editarCarga/'+id)
            dispatch({
                type:'OBTENER_CARGA',
                payload:carga.data
            })
            console.log("obteniendo una carga",carga.data)

        }


   /*  CIERRE CARGAS ******************************************************************************* */
/* ESTADOS********************************************************************************************************/
        const obtenerEstados = async () => {
            const estados =  await axios.get('http://localhost:4000/estados')
              dispatch({
                  type:'OBTENER_ESTADOS',
                  payload:estados.data
              })
                      console.log("obteniendo los estados",estados.data)
                      //hay que mostrarlos por pantalla
          }
/****ESTADOS***************************************************************************************************************/

        return(
        <UsuarioContext.Provider value={{usuarios: state.usuarios,
            seleccionarUsuario: state.seleccionarUsuario,
            seleccionarCarga:state.seleccionarCarga,
            cargas:state.cargas,
            estados:state.estados,
            obtenerUsuarios,
            obtenerPerfil,
            obtenerCargas,
            obtenerBodeguero,
            obtenerCarga,
            obtenerEstados
        }}>
            {props.children}
        </UsuarioContext.Provider>
        )
}

export default UsuarioEstado