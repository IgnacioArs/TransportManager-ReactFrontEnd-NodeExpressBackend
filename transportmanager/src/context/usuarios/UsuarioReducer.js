//aqui importamos los tipos de acciones de types
import {OBTENER_USUARIOS,OBTENER_PERFIL,OBTENER_CARGAS,OBTENER_ESTADOS,OBTENER_CARGA,OBTENER_BODEGUERO} from '../types'

/* esta funcion nos ayudara a saber como funciona los types */
export default (state,action) => {

    //realizamos la acciones y sus propiedades
    const {payload,type} = action; 
    //ahora usaremos el type para realizar dicha accion y poder llenar un estado de la siguiente dorma
        switch (type) {
            //mientras sea tipo y el caso sea obtener a los usuarios entonces..
            case OBTENER_USUARIOS:
                   //se llenara el estado de la siguiente con forma con la propiedad payload
                   return{
                       ...state,
                       usuarios:payload
                   }
                   
            case OBTENER_PERFIL:
                //aqui realizamos lo mismo llenar el estado de la siguiente forma
                return{
                    ...state,
                    seleccionarUsuario:payload
                }


                //OBTENDREMOS TODAS LAS CARGAS
            case OBTENER_CARGAS:
                    //aqui realizamos lo mismo llenar el estado de la siguiente forma
                return{
                    ...state,
                    cargas:payload
                }
              
                  //OBTENDREMOS TODAS LAS CARGAS
            case OBTENER_CARGA:
                    //aqui realizamos lo mismo llenar el estado de la siguiente forma
                return{
                    ...state,
                    seleccionarCarga:payload
                }
            
             //OBTENDREMOS TODOS LOS ESTADOS
            case OBTENER_ESTADOS:
                //aqui realizamos lo mismo llenar el estado de la siguiente forma
                return{
                    ...state,
                    estados:payload
            }

                //OBTENDREMOS UN SOLO BODEGUERO PARA SU LOGEO
            case OBTENER_BODEGUERO:
                    //aqui realizamos lo mismo llenar el estado de la siguiente forma para el bodeguero
                    return{
                        ...state,
                        seleccionarBodeguero:payload
                }

                //y al final si no cumple con ninguna de las anteriores que solo  envie el estado
                default:
                     return state;
        
        }



}