<script >

</script>

<template>
  <div id="app">
<div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Proyectos</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/about">About</router-link>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/sistema">Sistema</router-link>
          </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">
            Card
          </a>
          <ul class="dropdown-menu">
            <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/card1">Card</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/card">Card1</router-link>
          </a>
        </li>
      </ul>
    </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/pagina">Pizzas</router-link>
          </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">
            Datos
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                <router-link to="/recorrido">Recorrido</router-link>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <router-link to="/recorrido1">Recorrido1</router-link>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/horario">Horario</router-link>
          </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">
            Props
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                <router-link to="/padre">Props</router-link>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/eventos">Eventos</router-link>
          </a>
        </li>
            
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">
            Calculadora
          </a>
          <ul class="dropdown-menu">
            <li class="nav-link">
              <a class="dropdown-item" href="#">
                <router-link to="/calculadora1">Calculadora</router-link>
              </a>
            </li>
            <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/calculadora">Calculadora1</router-link>
          </a>
        </li>
          </ul>
        </li>
        
        
        
        
        
        
        

        

        
      </ul>
    </div>
  </div>
</nav>
  </div>
</div>
</template>

<style >

</style>
