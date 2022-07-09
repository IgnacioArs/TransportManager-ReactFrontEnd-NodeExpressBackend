import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import  Carousel  from 'react-bootstrap/Carousel'
import Carrusel from './Carrusel'



const a = 10

const Cuerpo = () => {



  return (


    <html lang="es" class="h-100">
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
      <body class="d-flex h-200 text-center text-white bg-dark">
        
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          {/* <h3 class="float-md-start mb-0">Cover</h3> */}
      {/*     <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
            <a class="nav-link fw-bold py-1 px-0" href="#">Features</a>
            <a class="nav-link fw-bold py-1 px-0" href="#">Contact</a>
          </nav> */}
        </div>
      </header>
    
      <main class="px-3">
        <h1>Sistema gestion de cargas</h1>
        <p class="lead">Se debe de analizar los tiempos en las operaciones de carga y descarga, tránsito local, involucrar el ejercicio de las entregas de reparto, ya que son interrogantes que no se deben escapar cuando se pretende hablar o trabajar con la carga en el contexto del Comercio.</p>
        <p class="lead">
      {/*     <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a> */}
        </p>
      </main>
    
{/*       <footer class="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
      </footer> */}
    {/* <Link to={`/perfilAcceso/${a}`}>Ir a perfilAcceso con un dato</Link>    */}
    </div>

 

      </body>
  <Carrusel/>
      <main class="px-3 bg-dark">
      
        <p class="lead text-center">
        <div className='text-center'>
        <footer className='cover-container d-flex w-200 h-200 p-3 mx-auto flex-column bg-dark text-white'>
        <p><a href="www.inacap.cl" className="text-white"></a>Matias Maldonado Benjamin Arcos David Medina<p className='className="text-white"'>@TransportManager 2022</p></p>
      </footer> 
   </div>
        </p>
        <p class="lead">
      {/*     <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a> */}
        </p>
      </main>

    
           {/*  para enviar parametros es de esta forma asi se envian los parametros  */}

      

{/*       <Pie/> */}
 
    </html>
    


  
  )
}

export default Cuerpo
