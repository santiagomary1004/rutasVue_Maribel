<script >
import BarraNavegacion from '../Pages/BarraNavegacion.vue';
import Bienvenida from '../Pages/Bienvenida.vue';
import Carrito from '../Pages/Carrito.vue';
import Banner from '../Pages/Banner.vue';
import ProductosDestacados from '../Pages/ProductosDestacados.vue';
import Footer from '../Pages/Footer.vue';

export default {
  components: {
    BarraNavegacion,
    Bienvenida,
    Carrito,
    Banner,
    ProductosDestacados,
    Footer
  }
};
</script>

<template>
  <BarraNavegacion/>
  <Bienvenida/>
  <Carrito/>
  <Banner/>
  <ProductosDestacados/>
  <Footer/>
</template>

<style scoped>
</style>

