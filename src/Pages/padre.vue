<script setup>
import { ref } from 'vue'
import Hijo1 from './Hijo1.vue';
import Hijo2 from './Hijo2.vue';
</script>

<template>
    <div class="container">
    <h1>Lista de alumnos</h1>
    <Hijo1 class="mt-4" nombrecomp="Maribel Santiago Bautista" carrera="ISC" grupo="6BS" nc="22620262"/>
    <Hijo2 class="mt-4" nombrecomp="Ana Lopez Hernandez" carrera="ISC" grupo="2BS" nc="24620117"/>   
    </div>
</template>

<style scoped>
h1{
    font-family: Arial, Helvetica, sans-serif;
    color:darkslateblue;
}
</style>

