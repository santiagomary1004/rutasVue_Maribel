<script setup>
import { ref } from 'vue'

defineProps({
  nombrecomp: String,
  carrera: String,
  grupo: String,
  nc: String,
})
</script>

<template>
<h5><b>Alumno 2:</b></h5>
<p>{{ nombrecomp }}</p>
<p>{{ carrera }}</p>
<p>{{ grupo }}</p>
<p>{{ nc }}</p>
</template>

<style scoped>
h5{
font-family: Arial, Helvetica, sans-serif;
color: darkmagenta;
}
p{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
}
</style>

