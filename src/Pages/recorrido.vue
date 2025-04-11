<script setup>
import { ref } from 'vue'

const bienvenida = ref("Bienvenidos a la seccion de condicionales")
const nombre = ref ("Maribel")
const apellidos = ref ("Santiago Bautista" )
// defineProps({
//   msg: String,
// })

</script>

<template>
  <div class="container">
    <h2 class="text-center">{{ bienvenida }}</h2>
    <div class="col-md-6">
      <h6 class="">{{ nombre }}</h6>
      <h6>{{ apellidos }}</h6>
    </div>
  </div>
 


</template>

<style scoped>

</style>
