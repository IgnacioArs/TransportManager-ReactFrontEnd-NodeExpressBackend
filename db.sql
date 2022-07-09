CREATE DATABASE transportmanager;

create table admin(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(50) not null,
    contrasena varchar (9999) not null,
    fecha_creacion timestamp NOT NULL DEFAULT current_timestamp
)

create table bodeguero(
    id_bodeguero INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(50) not null,
    contrasena varchar (9999) not null,
    email varchar (50) not null,
    comuna varchar (50) not null,
    telefono int (50) not null,
    rut varchar (50) not null,
    apellidopaterno varchar (50) not null,
    apellidomaterno varchar (50) not null,
    fecha_creacion timestamp NOT NULL DEFAULT current_timestamp
)



ALTER TABLE admin
  ADD PRIMARY KEY (id);

ALTER TABLE admin
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;


SELECT * FROM admin;

-- LINKS TABLE
CREATE TABLE carga (
  id_carga INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre varchar(250) not null,
  mercaderia varchar(250) not null,
  origen varchar(250) not null,
  horasalida time not null,
  destino varchar(250) not null,
  fecha date not null,
  numerodeguia int(250) not null,
  detallemercaderia varchar(250) not null,
  destinatario varchar(250) not null,
  remitente varchar(250) not null,
  admin_id INT(11) ,
  bodeguero_id INT(11) ,
  fecha_creacion timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_admin FOREIGN KEY(admin_id) REFERENCES admin(id),
  CONSTRAINT fk_bodeguero FOREIGN KEY(bodeguero_id) REFERENCES bodeguero(id_bodeguero)
)




/* aqui realizaremos la tabla estado */
CREATE TABLE estado (
  id_estado INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  estado TINYINT not null,
  id_carga INT(11),
  fecha_creacion timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_carga FOREIGN KEY(id_carga) REFERENCES carga(id_carga)
)


ALTER TABLE links
  ADD PRIMARY KEY (id);

ALTER TABLE links
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;