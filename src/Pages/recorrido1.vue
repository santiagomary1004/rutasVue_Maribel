<script>
    export default {
        data(){
            return{
                //DATOS DE ALUMNOS
                datalum1:[
                    {id:1230, nombre: 'Rodrigo', apaterno: 'Hernandez', amaterno: 'Martinez', musica:'Rock', actividad:'Futbol'},
                    {id:1231, nombre: 'Esther', apaterno: 'Sanchez', amaterno: 'Lopez', musica:'Pop', actividad:'Dibujar'},
                    {id:1232, nombre: 'Alberto', apaterno: 'Rojas', amaterno: 'Cruz', musica:'Jazz', actividad:'Trotar'},
                    {id:1233, nombre: 'Daniela', apaterno: 'Gonzalez', amaterno: 'Vasquez', musica:'Electronica', actividad:'Lectura'},
                    {id:1234, nombre: 'Christian', apaterno: 'Jimenez', amaterno: 'Perez', musica:'Cumbia', actividad:'Natacion'},
                    {id:1235, nombre: 'Lisbeth', apaterno: 'Marroquin', amaterno: 'Garcia', musica:'Rap', actividad:'Senderismo'},
                    {id:1236, nombre: 'Juan', apaterno: 'Rodriguez', amaterno: 'Velasco', musica:'Punk', actividad:'Basquetbol'},
                    {id:1237, nombre: 'Cynthia', apaterno: 'Alvarez', amaterno: 'Fernandez', musica:'Country', actividad:'Pintar'},
                    {id:1238, nombre: 'Alex', apaterno: 'Diaz', amaterno: 'Mendoza', musica:'Blues', actividad:'Cocina'},
                    {id:1239, nombre: 'Yolanda', apaterno: 'Gutierrez', amaterno: 'Reyes', musica:'Salsa', actividad:'Jardineria'},

                ]
            }
        }
    }
</script>
<template>
    <div class="container">
    <h3 class="mt-4">Datos de los alumnos</h3>
    <ul>
        <li v-for="datalum in datalum1" :key="datalum.id">
            <strong>{{ datalum.nombre }} {{ datalum.apaterno }} {{ datalum.amaterno }} </strong> -
            <strong>{{ datalum.musica }} </strong> -
            <strong>{{ datalum.actividad }} </strong>
        </li>
    </ul>
</div>
</template>
<style scoped>
h3{
    color:white;
    background-color: #fc8a80;
    border-radius: 15px;
    padding: 10px;
    text-align: center;
}
ul{
    list-style-type: none;
    padding: 0px;
}
li{
    color:white;
    background-color: #efb0a9 ;
    border-radius: 15px;
    padding:10px 15px;
    margin: 10px;
    text-align:justify;
}
</style>