<script>
import combopizz from '../Pages/imagenes/combopizz.jpg'
import buns from '../Pages/imagenes/buns.jpg'
import chorizo from '../Pages/imagenes/chorizo.jpg'
import carnef from '../Pages/imagenes/carnef.jpg'
const productos = {buns, chorizo, carnef, combopizz};
export default {
  data() {
    return {
        buns, chorizo, carnef, combopizz
    }
  }
}
</script>
<template>
    <div class="container-sm">
        <br>
        <h3><center>------------------------------------ Productos destacados ----------------------------------</center></h3>
        <br>
        <div class="row">
            <div class="col-md-3">
                <div class="card mt-4">
                    <div class="card-header"><center>Bombas Pepperoni</center></div>
                    <div class="card-body">
                        <img :src="buns" alt="Bombs" class="img-fluid" style="width: 280px; height: 280px;">
                        <p>Precio: $59 la orden.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card mt-4">
                    <div class="card-header"><center>Pizza Pepperoni con hierbas</center></div>
                    <div class="card-body">
                        <img :src="chorizo" alt="Pizza de peperoni con hierbas" class="img-fluid" style="width: 280px; height: 280px;">
                        <p>Precio: $99 la pizza pequeña.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card mt-4">
                    <div class="card-header"><center>Pizza Barbacoa</center></div>
                    <div class="card-body">
                        <img :src="carnef" alt="Pizza con barcaboa" class="img-fluid" style="width: 280px; height: 280px;">
                        <p>Precio: $89 la pizza pequeña.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card mt-4">
                    <div class="card-header"><center>Combo del día</center></div>
                    <div class="card-body">
                        <img :src="combopizz" alt="Pizzas en oferta" class="img-fluid" style="width: 280px; height: 280px;">
                        <p>Precio: $169, incluye 2 pizzas pequeñas y dos refrescos de 355ml.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

