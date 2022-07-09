# TransportManager-ReactFrontend-NodeExpressBackend
Stack Mysqlern

para realizar este context hay que instalar algunos modulos como por ejemplo
********************************FRONTEND*************************************
-npm install bootstrap para stilizar la aplicacion

//para poder manejar las rutas y enrutar los componentes gracias a este paquete
-npm i react-router-dom
//para encriptar las contraseña de los administradores y otros usuarios para su acceso se instalo el repositorio brcrypt
-npm install bcryptjs
//para instalar time.ago hay que instalar el siguiente repositorio que nos interpretara la hora o fechas de creacion etc.
-npm install timeago.js
//para instalar el modulo de conexion base de datos que en este caso sera mariadb php mysql// solo si el frontend sera configurado para tener el backend
-npm install mysql 
//PARA REALIZAR LA CONEXION A LA BASE DE DATOS DEBEMOS CREAR NUESTROBACKEND HACER CONEXION DESDE AQUI // ayuda a obtener respuesta de nuestra api para el acceso y acciones.
-npm install axios
//PARA LOS ICONOS DEVEMOS REALIZAR LO SIGUIENTE
-npm install font-awesome
alertas que se pueden visualizar despues de dichas acciones obteniendolas de sus repositorios
-npm install sweetalert 
-npm install react-hook-form //ayudara a poder trabajar mejor con los formularios
-npm install react-bootstrap // bootstrap para los estilos

***********************BACKEND***************************************************
//comandos para el servidor

MODULO PARA CREAR NUESTRO ARCHIVO DE CONFIGURACION
-npm init --yes
MODULO PARA LA CREACION Y LA OPERATIVIDAD DE NUESTRO SERVIDOR
-npm install express 
MODULO PARA LA CONFIGURACION Y CREACION Y CONEXION A NUESTRA BASE DE DATOS CON LA INTERFACE O SERVIDOR WEB DE NUESTRA BASE DE DATOS XAMP
(Apache, MariaDB/MySQL, PHP, Perl.)
-npm install mysql

-npm install morgan ---> asi podemos gestionar mejor los cambios o realiza registro de las solicitudes
-CREAMOS UN ARCHIVO index en la carpeta principal y sera nuestro archivo servidor
AL MOMENTO DE REALIZAR LAS PETICIONES CON AXIOS DESDE NUESTRO FRONTEND HACIA NUESTRO BACKEND NECESITAMOS INSTALAR EL SIGUIENTE MODULO
-npm install cors
ESTE MODULO NOS AYUDARA DE FORMA DE DESARROLLO 
-npm install nodemon -D
EN EL CASO DE BCRYPTJS EN EL FRONTEND SIRVE PARA AL MOMENTO DE RECIBIR NUESTRA RESPUESTA DEL BACKEND COMPARAR NUESTRA 
-npm install bcryptjs
