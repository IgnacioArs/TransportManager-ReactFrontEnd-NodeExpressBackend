-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2022 a las 06:38:55
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transportmanager`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `contrasena` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`id`, `nombre`, `contrasena`) VALUES
(1, 'admin', '$2a$10$H2SwZCW74ScrC3LKIzKx5ukkZbL3ZGrAunuyMVYsQ0Jfb/xo/If1m');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodeguero`
--

CREATE TABLE `bodeguero` (
  `id_bodeguero` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `contrasena` varchar(999) NOT NULL,
  `email` varchar(50) NOT NULL,
  `comuna` varchar(50) NOT NULL,
  `telefono` int(50) NOT NULL,
  `rut` varchar(50) NOT NULL,
  `apellidopaterno` varchar(50) NOT NULL,
  `apellidomaterno` varchar(50) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bodeguero`
--

INSERT INTO `bodeguero` (`id_bodeguero`, `nombre`, `contrasena`, `email`, `comuna`, `telefono`, `rut`, `apellidopaterno`, `apellidomaterno`, `fecha_creacion`) VALUES
(1, 'benjamin', '$2a$08$KWBirMId2oAmaZKu4edDiOlTHx2mBFGvoOYMisU4WhNz7z9g.j1ie', 'benjamin@gmail.com', 'Los Lagos', 921940007, '19.399.340-0', 'arcos', 'santana', '2022-05-16 04:36:17'),
(2, 'cristobal', '$2a$08$6LnwU.9aBcg0cZfYUNs9uOjkCK5I294mvz.A/5z8RtnVggPl/y2Qe', 'cristobal@gmail.com', 'Los Lagos', 921940007, '19.399.340-0', 'arcos', 'santana', '2022-05-16 04:39:27'),
(3, 'andres', '$2a$08$DbhqXoIDFTlCY.QamaK4WemV/ioSO4tldYu04yPmaiMHDysUVN0su', 'andres@gmail.com', 'Los Lagos', 921940007, '19.399.340-0', 'mansilla', 'mora', '2022-05-16 04:42:19'),
(4, 'joel', '$2a$08$XIGUqo4sjPR1j7mtJ.sJJ.J/f4W3.qpzvgdNrzhNwFMfYOdQgBu6C', 'joel@gmail.com', 'Araucania', 999999999, '19.399.340-0', 'Paredes', 'Fernández ', '2022-05-17 03:57:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carga`
--

CREATE TABLE `carga` (
  `id_carga` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `mercaderia` varchar(250) NOT NULL,
  `origen` varchar(250) NOT NULL,
  `horasalida` varchar(250) NOT NULL,
  `destino` varchar(250) NOT NULL,
  `fecha` date NOT NULL,
  `numerodeguia` int(250) NOT NULL,
  `detallemercaderia` varchar(250) NOT NULL,
  `destinatario` varchar(250) NOT NULL,
  `remitente` varchar(250) NOT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `bodeguero_id` int(11) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carga`
--

INSERT INTO `carga` (`id_carga`, `nombre`, `mercaderia`, `origen`, `horasalida`, `destino`, `fecha`, `numerodeguia`, `detallemercaderia`, `destinatario`, `remitente`, `admin_id`, `bodeguero_id`, `fecha_creacion`) VALUES
(8, 'admin', '255 pales', 'Los Lagos', '01:51', 'Arica y Parinacota', '2022-05-14', 333333, 'papas', 'pepe', 'lalo', 1, NULL, '2022-05-14 03:50:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id_estado` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `id_carga` int(11) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id_estado`, `estado`, `id_carga`, `fecha_creacion`) VALUES
(8, 0, 8, '2022-05-14 03:50:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('G1FElBGksWu1CyweUuhevNsxKeqOSdAu', 1652762699, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{}}'),
('o-li6iPBSUc5Z9R4VG2_jY4vOUK-3Q7P', 1652848653, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{}}');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bodeguero`
--
ALTER TABLE `bodeguero`
  ADD PRIMARY KEY (`id_bodeguero`);

--
-- Indices de la tabla `carga`
--
ALTER TABLE `carga`
  ADD PRIMARY KEY (`id_carga`),
  ADD KEY `fk_admin` (`admin_id`),
  ADD KEY `fk_bodeguero` (`bodeguero_id`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id_estado`),
  ADD KEY `fk_carga` (`id_carga`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `bodeguero`
--
ALTER TABLE `bodeguero`
  MODIFY `id_bodeguero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `carga`
--
ALTER TABLE `carga`
  MODIFY `id_carga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id_estado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carga`
--
ALTER TABLE `carga`
  ADD CONSTRAINT `fk_admin` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`),
  ADD CONSTRAINT `fk_bodeguero` FOREIGN KEY (`bodeguero_id`) REFERENCES `bodeguero` (`id_bodeguero`);

--
-- Filtros para la tabla `estado`
--
ALTER TABLE `estado`
  ADD CONSTRAINT `fk_carga` FOREIGN KEY (`id_carga`) REFERENCES `carga` (`id_carga`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
