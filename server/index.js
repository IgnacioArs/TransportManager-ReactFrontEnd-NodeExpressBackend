//importamos express para crear nuestro servior
const express = require("express")

//importamos mysql para importar 
const db = require("./database")
//ahora para poder establecer conexion con el otro servidor del frontend
//necesitamos instalar el siguiente repositorio
const cors = require("cors");

//tenemos que encriptar y decifrar las contraseñas de los usuarios creados
const bcrypt = require('bcryptjs')
//importaremos los metodos de bcrypt creador en el archivo encriptarContra
const {encriptarContra,decifrarContra} = require('./lib/encriptarContra')



const app = express();

app.use(cors());
app.use(express.json());

/* 
//configuramos la conexion de la base de datos
const db = mysql.createConnection({
    user:'root',
    connectionLimit: 10,
    host:'localhost',
    password:'',
    port:3306,
    database:'transportmanager'
}) */

//bueno aqui ya vemos la conexion de la base de datos
/* db.connect((error,conexion)=> {
    if(conexion){
        console.log("conexion exitosa");
    }else{
        console.log("error ------>",error);
    }
})
 */
//************************************************************************************************************** */
//aqui con el servidor ya creamos las peticiones de  para crear,eliminar,listar,actualizar,acronimo

//OBTENIENDO TODAS LAS CARGAS
app.get('/cargas', async (req,res) => {
    await db.query('SELECT * FROM carga',(error,resultado) => {
            if(resultado){
                res.send(resultado)
                console.log([resultado])
            }else{
                console.log(error)
            }

    })

 
})

//CREAR CARGA COMPLETA CON SU ESTADO
app.post('/crearCarga',async (req,res) => {
   /*  https://youtu.be/re3OIOr9dJI */

   const {nombre,mercaderia,origen,horasalida,destino,fecha,numerodeguia,detallemercaderia,destinatario,remitente,admin_id,bodeguero_id} = req.body;
   const nuevaCarga = {
     nombre,
     mercaderia,
     origen,
     horasalida,
     destino,
     fecha,
     numerodeguia,
     detallemercaderia,
     destinatario,
     remitente,
     admin_id:1,
     bodeguero_id  
   }

   console.log("DATOS DEL OBJETO CREADO",nuevaCarga)
 const cargaInsertada = await db.query('INSERT INTO carga set ?',[nuevaCarga]); 

//aqui tomamos el id de la caga para poder insertar un estado la misma carga
console.log("CAPTURANDO EL ID",cargaInsertada)

const id = cargaInsertada.insertId

const nuevoEstado = {
    estado:false,
    id_carga:id
}

/* console.log("CAPTURANDO EL ID DE INSERTACION DE CARGA PARA AGREGARSELO AL ESTADO",id) */
 await db.query('INSERT INTO estado set ?',[nuevoEstado]) 
res.send("Creando carga y estado")

})

//BASICAMENTE AQUI OBTENEMOS UNA CARGA CON EL PARAMETRO RECIBIDO Y ENVIADO DESDE
//EL FRONTEND
app.get('/editarCarga/:id',async (req,res) => {
    const {id} = req.params;  //aqui da igual como tomas el dato ya que en el boton actualizar ya envias un parametro
                             //y aqui lo sacas de params
    console.log("RECIBIENDO EL ID PARAMETRO PARA ACTUALIZAR",id)
    const carga = await db.query('SELECT * FROM carga WHERE id_carga = ?',[id]);
    console.log("CARGA",carga[0])
    res.send(carga)
 })

//Y AQUI YA ENVIAMOS LOS DATOS ACTUALIZADO DE LA CARGA
app.post('/editarCarga/:id',async(req,res) => {
    const {id} = req.params
    const {nombre,mercaderia,origen,horasalida,destino,fecha,numerodeguia,detallemercaderia,destinatario,remitente,admin_id,bodeguero_id} = req.body;
    const nuevoProducto = {
      nombre,
      mercaderia,
      origen,
      horasalida,
      destino,
      fecha,
      numerodeguia,
      detallemercaderia,
      destinatario,
      remitente,
      admin_id:1,
      bodeguero_id
    }
    console.log("OBTENIENDO EL ID DE LA CARGA PARA ASI ACTUALIZAR LA CARGA",id)
    await db.query('UPDATE carga set ? WHERE id_carga = ?', [nuevoProducto,id],(error,respuesta) => {
        if(respuesta){
            res.send(respuesta)
            console.log("!carga actualizada")
        }else{
            console.log(error)
        }
    })

})
    

/* ****************************************************************************************************************** */
/* ESTADO ACTUALIZAR Y LISTAR BASICAMENTE */
app.get('/estados', async (req,res) => {
    await db.query('SELECT * FROM estado',(error,resultado) => {
            if(resultado){
                res.send(resultado)
                console.log([resultado])
            }else{
                console.log(error)
            }

    })

 
})
/******************************************************************************************/

//AQUI ELIMINAREMOS EL ESTADO Y SU CARGA YA QUE EL ESTADO PERTENECE A LA TABLA CARGA
app.get('/eliminarEstado/:id',async(req,res) => {
    //req.params.id ---> quiere decir que a la hora de realizar o manipular esta ruta /eliminarProducto/:id
    //nos vaa mostrar un parametro es decir el id ={1,2,3} etc
   const {id} = req.params
  /*     const estadoEliminado = */ await db.query('DELETE FROM estado WHERE id_carga = ?',[id]);
                                    await db.query('DELETE FROM carga WHERE id_carga = ?',[id]);
       /*  if(estadoEliminado){
            await pool.query('DELETE FROM carga WHERE id_carga = ?',[id]);
        } */
      //aqui mostramos despues de eliminar los datos un mensaje
         res.send('borrado');
         console.log("carga y estado eliminado")

})
/* ****************************************************************************************************************** */


//ahora ya enviado y obtenido los datos de 1 producto lo editamos con el metodo post que 
//entrega router
app.post('/editarEstado/:id',async(req,res) => {
    const {id} = req.params
    const {estado} = req.body;
    console.log("TOMANDO CAMPO ESTADO PARA ACTUALIZAR ESTADO",estado)
    const nuevoEstado = {
      estado,
    }
    console.log("OBTENIENDO EL ID DEL ESTADO PARA ASI ACTUALIZAR EL ESTADO",id)
   const respuesta = await db.query('UPDATE estado set ? WHERE id_estado = ?', [nuevoEstado,id])
    console.log("POS PARA ACTUALIZAR Y SUS DATOS",nuevoEstado)
/*     req.flash('cargamento','Estado de carga actualizado!'); */
 /*    res.redirect('/transportmanager') */
            if(respuesta){
                res.send('ok')
            }else{
                console.log("no se ha actualizado el estado")
            }

})
/* **********************************************************************************************************************************************************************/

/* SECCION PARA CREAR USUARIO BODEGUERO CON CONTRASEÑA ENCRIPTADA */

app.post('/CrearBodeguero', async (req,res) => {

        //tomamos los datos enviados del formulario del frontend
        const {nombre,contrasena,email,comuna,telefono,rut,apellidopaterno,apellidomaterno} = req.body
        const nuevoBodeguero = {
            nombre,
            contrasena,
            email,
            comuna,
            telefono,
            rut,
            apellidopaterno,
            apellidomaterno
        }

        nuevoBodeguero.contrasena = await encriptarContra(contrasena);
        

        console.log("RECIVIENDO EL NUEVO BODEGUERO",nuevoBodeguero)

        await db.query('INSERT INTO bodeguero set ?',[nuevoBodeguero],(error,resultado) => {
            if(resultado){
                    console.log("!bodeguero creado")
                    res.send('!bodeguero creado')
            }else{
                console.log(error)
            }
        }); 


}) 


/* **********************************************************************************************/

/* SECCION PARA VERIFICAR Y LOGUEAR UN USUARIO */

 app.get('/loginBodeguero/:nombre/:contrasena', async (req,res) => {
  

         
         const nombre = req.params.nombre
         const contrasena = req.params.contrasena
/*         contraEncriptada = await encriptarContra(contrasena) */

        const rows  =  await db.query('SELECT * FROM bodeguero WHERE nombre = ?',[nombre])
       try{
        if(rows.length > 0){
            const user = rows[0];
            res.send(user)
            console.log("VIENDO LA CONTRASEÑA DEL USUARIO",user.contrasena);
            const validandoContra =  await bcrypt.compare(contrasena,user.contrasena);
            if(validandoContra){
                   console.log("CONTRASEÑA CORRECTA")
                  /*  res.send(user) */
            }else{
               console.log("ERROR EN LA CONTRASEÑA")
            }
       }else{
           console.log("USUARIO NO ENCONTRADO")
       }
    }catch(e){
                console.log(e)
    }
 
        

})

/* ********************************************************************************* */

/*****************CREADO ADMINITRADOR******************************/

app.post('/CrearAdministrador', async (req,res) => {

    //tomamos los datos enviados del formulario del frontend
    const {nombre,contrasena} = req.body
    const nuevoAdministrador = {
        nombre,
        contrasena,
    }

    nuevoAdministrador.contrasena = await encriptarContra(contrasena);
    

    console.log("RECIVIENDO EL NUEVO ADMINISTRADOR",nuevoAdministrador)

    await db.query('INSERT INTO admin set ?',[nuevoAdministrador],(error,resultado) => {
        if(resultado){
                console.log("!administrador creado")
                res.send('!administrador creado')
        }else{
            console.log(error)
        }
    });   


}) 

/***************************LOGIN ADMINISTRADOR****************/
app.get('/loginAdministrador/:nombre/:contrasena', async (req,res) => {
  

         
    const nombre = req.params.nombre
    const contrasena = req.params.contrasena
/*         contraEncriptada = await encriptarContra(contrasena) */

   const rows  =  await db.query('SELECT * FROM admin WHERE nombre = ?',[nombre])

   console.log("RESULTADO DEL LOGIN DEL ADMINISTRADOR",rows)

   try{
   if(rows.length > 0){
       const user = rows[0];
       res.send(user)
       console.log("VIENDO LA CONTRASEÑA DEL ADMINISTRADOR",user.contrasena);
       const validandoContra =  await bcrypt.compare(contrasena,user.contrasena);
       if(validandoContra){
              console.log("CONTRASEÑA CORRECTA")
      /*         res.send(user) */
       }else{
          console.log("ERROR EN LA CONTRASEÑA")
       }
  }else{
      console.log("ADMINISTRADOR NO ENCONTRADO")
  }
}catch(e){
           console.log(e)
} 

   

})


/* ESTA SIGUIENTE SENTENCIA ES PARA ENCONTRAR A UN RESPONSABLE O PROPIETARIO */

app.get('/propietario/:id',async (req,res) => {
    const id = req.params.id
 console.log("ID DEL PROPIETARIO",id)
/*         contraEncriptada = await encriptarContra(contrasena) */

const propietario = await db.query('SELECT * FROM bodeguero WHERE id_bodeguero = ?',[id])
console.log(propietario)

res.send(propietario)

})

/* **************************************************************************************************/

/* SECCION PARA TODAS LAS ACCIONES DEL BODEGUERO */
/* OBTENER UN BODEGUERO */
app.get('/bodegueros',async (req,res) => {

await db.query('select * from bodeguero',(error,respuesta) => {
                    if(respuesta){
                        console.log("BODEGUERO LISTADO",respuesta)
                        res.send(respuesta)
                    }else{
                            console.log(error)
                    }
})

})


app.get('/EditarBodeguero/:id',async (req,res) => {

    const id = req.params.id
 console.log("ID DEL PROPIETARIO",id)
/*         contraEncriptada = await encriptarContra(contrasena) */

const propietario = await db.query('SELECT * FROM bodeguero WHERE id_bodeguero = ?',[id])
console.log(propietario)

res.send(propietario)
})



app.post('/EditarBodeguero/:id',async(req,res) => {
    const id = req.params.id
    const {nombre,contrasena,email,comuna,telefono,rut,apellidopaterno,apellidomaterno} = req.body;

    const nuevoBodeguero = {
      nombre,
      contrasena,
      email,
      comuna,
      telefono,
      rut,
      apellidopaterno,
      apellidomaterno
    }
    nuevoBodeguero.contrasena = await encriptarContra(contrasena);

    console.log("OBTENIENDO EL ID para actualizar el bodeguero",id,"LOS DATOS DEL BODEGUERO",nuevoBodeguero)
    await db.query('UPDATE bodeguero set ? WHERE id_bodeguero = ?', [nuevoBodeguero,id],(error,respuesta) =>{
        if(respuesta){
            res.send('ok')
                console.log("Bodeguero actualizado con el id",id)
        }else{
                console.log("ERROR ==>",error)
        }
    }) 
  
})



app.get('/EliminarBodeguero/:id',async(req,res) => {
    //req.params.id ---> quiere decir que a la hora de realizar o manipular esta ruta /eliminarProducto/:id
    //nos vaa mostrar un parametro es decir el id ={1,2,3} etc
   const id = req.params.id
  /*     const estadoEliminado = */ 
  await db.query('DELETE FROM bodeguero WHERE id_bodeguero = ?',[id],(error,respuesta)=>{
        if(respuesta){
                console.log("bodeguero eliminado con el id",id)
                res.send('ok')
        }else{
                console.log("ERRO AL ELIMINAR BODEGUERO",error)
        }
  });
                          /*           await db.query('DELETE FROM carga WHERE id_carga = ?',[id]); */
       /*  if(estadoEliminado){
            await pool.query('DELETE FROM carga WHERE id_carga = ?',[id]);
        } */
      //aqui mostramos despues de eliminar los datos un mensaje
      

})
/* **************************************************************************************************/



//AQUI DONDE EL SERVIDOR ESTA CORRIENDO
app.listen(4000, () => {
    console.log("SERVER CORRIENDO EN EL PUERTO 4000","LA CONEXION DE LA BASE DE DATOS => ")
})


