<script >
import ban1 from '../Pages/imagenes/ban1.png';
import ban2 from '../Pages/imagenes/ban2.png';
import ban3 from '../Pages/imagenes/ban3.png';
import ban4 from '../Pages/imagenes/ban4.png';
const productos = {ban1, ban2, ban3, ban4};
export default {
  data() {
    return {
        ban1, ban2, ban3, ban4
    }
  }
}
</script>
<template>
     <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img :src="ban1" class="d-block w-100" alt="Pizza artesanal">
            </div>
            <div class="carousel-item">
                <img :src="ban4" class="d-block w-100" alt="Pizza doble queso">
            </div>
            <div class="carousel-item">
                <img :src="ban3" class="d-block w-100" alt="Pizza con hierbas">
            </div>
            <div class="carousel-item">
                <img :src="ban2" class="d-block w-100" alt="Pizza de peperoni">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
