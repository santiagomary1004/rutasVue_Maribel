<script>
import logo from '../Pages/imagenes/logo.png';
import Formulario from '../Pages/Formulario.vue';

export default {
  components: {
    Formulario, 
  },
  data() {
    return {
      logo
    };
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-4">
    <div class="container-fluid">
      <div class="row w-100 align-items-center">
        <!-- Logo -->
        <div class="col-md-1">
          <div class="card-body">
            <div align="left">
              <img :src="logo" class="img-fluid" alt="Logo el rincón de las pizzas" />
            </div>
          </div>
        </div>
        <!-- Fin del Logo -->

        <!-- Botón Ordena -->
        <div class="col-auto p-1 m-0">
          <div class="dropdown">
            <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ordena
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">A domicilio</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">En tienda</a></li>
            </ul>
          </div>
        </div>
        <!-- Fin del Botón Ordena -->

        <!-- Botón Menú -->
        <div class="col-auto p-1 m-0">
          <div class="dropdown">
            <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menú
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Pizzas</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Pollo</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Adicionales</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Bebidas</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Postres</a></li>
            </ul>
          </div>
        </div>
        <!-- Fin del Botón Menú -->

        <!-- Botón Promos -->
        <div class="col-auto p-1 m-0">
          <div class="dropdown">
            <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Promos
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">¡2x1 en Pizzas los Martes!</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Pizza Familiar + Bebida Gratis</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Combo de Fin de Semana</a></li>
              <li><a class="dropdown-item" href="#" style="padding-left: 30px;">Pizza mediana + 6 alitas + refresco</a></li>
            </ul>
          </div>
        </div>
        <!-- Fin del Botón Promos -->

        <!-- Título centrado -->
        <div class="col text-center">
          <a class="navbar-brand">EL RINCÓN DE LA PIZZA</a>
        </div>

        <!-- Botones a la derecha -->
        <div class="col-auto ms-auto">
          <!-- Botón para abrir el formulario en un modal -->
          <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#formularioModal">
            Iniciar sesión
          </button>

          <!-- Botón del Carrito -->
          <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#carritoModal">
            Carrito
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Modal con el formulario de inicio de sesión -->
  <div class="modal fade" id="formularioModal" tabindex="-1" aria-labelledby="formularioModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h5 class="modal-title" id="formularioModalLabel">Iniciar sesión</h5> -->
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <Formulario />
        </div>
      </div>
    </div>
  </div>
</template>