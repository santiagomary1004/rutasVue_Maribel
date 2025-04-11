<template>
    <div class="container">
        <b><br><h3 class="mt-4" style="text-align: center;">HORARIO DE CLASES DEL 6BS</h3><br></b>

        <!-- PRIMERA TABLA -->
        <div class="table-responsive">
      <table class="table table-hover table-bordered custom-table">
        <!-- ENCABEZADO DE LA TABLA -->
  <thead class="table table-success table-striped">
    <tr>
      <th scope="col" style="text-align: center;">No de Control</th>
      <th scope="col" style="text-align: center;">Nombre</th>
      <th scope="col" style="text-align: center;">Grado</th>
      <th scope="col" style="text-align: center;">Periodo</th>
    </tr>
  </thead>
  <!-- CUERPO DE LA TABLA -->
  <tbody>
    <!-- CICLO V-FOR -->
    <tr v-for="(cargag, index) in carg" :key="index">
        <td>{{ cargag.control }}</td>
        <td>{{ cargag.nombre }}</td>
        <td>{{ cargag.grado }}</td>
        <td>{{ cargag.periodo }}</td>
    </tr>
  </tbody>
    </table>
      </div>

      <!-- SEGUNDA TABLA -->
        <div class="table-responsive">
      <table class="table table-hover table-bordered custom-table">
        <!-- ENCABEZADO DE LA TABLA -->
  <thead class="table table-success table-striped">
    <tr>
      <th scope="col" style="text-align: center;">Carrera</th>
      <th scope="col" style="text-align: center;">Especialidad</th>
      <th scope="col" style="text-align: center;">Creditos</th>
      <th scope="col" style="text-align: center;">Plan de Estudios</th>
    </tr>
  </thead>
  <!-- CUERPO DE LA TABLA -->
  <tbody>
    <!-- CICLO V-FOR -->
    <tr v-for="(datos, index) in dat" :key="index">
        <td>{{ datos.carrera }}</td>
        <td>{{ datos.especialidad }}</td>
        <td>{{ datos.creditos }}</td>
        <td>{{ datos.plan }}</td>
    </tr>
  </tbody>
      </table>
        </div>

      <!-- TERCERA TABLA -->
        <div class="table-responsive">
      <table class="table table-hover table-bordered custom-table">
        <!-- ENCABEZADO DE LA TABLA -->
  <thead class="table table-success table-striped">
    <tr>
      <th scope="col" style="text-align: center;">Materia</th>
      <th scope="col" style="text-align: center;">Rep</th>
      <th scope="col" style="text-align: center;">Cr</th>
      <th scope="col" style="text-align: center;">Lunes</th>
      <th scope="col" style="text-align: center;">Martes</th>
      <th scope="col" style="text-align: center;">Miercoles</th>
      <th scope="col" style="text-align: center;">Jueves</th>
      <th scope="col" style="text-align: center;">Viernes</th>
    </tr>
  </thead>
  <!-- CUERPO DE LA TABLA -->
  <tbody>
    <!-- CICLO V-FOR -->
    <tr v-for="(horariobs, index) in horario" :key="index">
        <td>{{ horariobs.materia }}</td>
        <td>{{ horariobs.rep }}</td>
        <td>{{ horariobs.cr }}</td>
        <td>{{ horariobs.lunes }}</td>
        <td>{{ horariobs.martes }}</td>
        <td>{{ horariobs.miercoles }}</td>
        <td>{{ horariobs.jueves }}</td>
        <td>{{ horariobs.viernes }}</td>
    </tr>
  </tbody>
      </table>
         </div>

</div>
</template>

<script setup>
import {ref} from 'vue';

const carg = ref ([
    {control:'22620262', nombre:'SANTIAGO BAUTISTA MARIBEL', grado:'6', periodo:'ENE-JUN 25'},
])

const dat = ref ([
    {carrera:'INGENIERIA EN SISTEMAS COMPUTACIONALES', especialidad:'', creditos:'33', plan:'ISIC-2010-224'},
])

const horario = ref ([
    {materia:'SCD1015 / 6BS / LENGUAJES Y AUTOMATAS I / SOLANO HERNANDEZ MIGUEL ANGEL', rep:'N', cr:'5', lunes:'11:00- 13:00 / LC3', martes:'', miercoles:'11:00- 13:00 / 4', jueves:'', viernes:'12:00- 13:00 / RDS'},
    {materia:'SCD1021 / 6BS / REDES DE COMPUTADORAS / SANCHEZ VASQUEZ LUCIA', rep:'N', cr:'5', lunes:'', martes:'13:00- 15:00 / RDS', miercoles:'', jueves:'13:00- 15:00 / LDS', viernes:'16:00- 17:00 / LDS'},
    {materia:'AEB1055 / 6BS / PROGRAMACION WEB / VASQUEZ MARTINEZ JOSUE ISRAEL', rep:'N', cr:'5', lunes:'', martes:'17:00- 19:00 / ACS', miercoles:'', jueves:'17:00- 19:00 / ACS', viernes:'13:00- 14:00 / ACS'},
    {materia:'SCA1026 / 6BS / TALLER DE SISTEMAS OPERATIVOS / CRUZ PEREZ JORGE', rep:'N', cr:'4', lunes:'13:00- 15:00 / LDS', martes:'', miercoles:'13:00- 15:00/LDS', jueves:'', viernes:''},
    {materia:'SCB1001 / 6BS / ADMINISTRACION DE BASES DE DATOS / GARCIA HERNANDEZ HILARIO VIDAL', rep:'N', cr:'5', lunes:'', martes:'15:00- 17:00 / RDS', miercoles:'15:00- 17:00 / LDS', jueves:'', viernes:'14:00- 15:00 / LDS'},
    {materia:'SCC1014 / 6BS / LENGUAJES DE INTERFAZ / SANCHEZ VASQUEZ LUCIA', rep:'N', cr:'4', lunes:'', martes:'11:00- 13:00 / LC3', miercoles:'17:00- 19:00 / RDS', jueves:'', viernes:''},
    {materia:'SCD1011 / 6BS / INGENIERIA DE SOFTWARE / ROMAN CRUZ JOSE ALFREDO', rep:'N', cr:'5', lunes:'15:00- 17:00 / LDS', martes:'', miercoles:'', jueves:'15:00- 17:00 / LDS', viernes:'15:00- 16:00 / RDS'},
])
</script>

<style scoped >
h3{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}
tr{
    color:black;
    margin: 10px;
    text-align:justify;
    font-family: Arial, Helvetica, sans-serif;
} 
</style>

/* h3{
    color:white;
    background-color: #82bda7;
    border-radius: 25px;
    padding: 20px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
} */
/* thead{
    list-style-type: none;
    padding: 0px;
} */
/* th{
    color:white;
    background-color: #71927e;
    border-radius: 30px;
    padding:15px;
    margin: 10px;
    text-align:justify;
} */
/* td{
    color:black;
    background-color: #a6cab4;
    border-radius: 35px;
    padding:10px;
    margin: 10px;
    text-align:center;
} */

 