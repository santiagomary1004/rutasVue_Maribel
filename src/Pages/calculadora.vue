<script>
import { toHandlers } from 'vue';

export default {
    data(){ 
        return{ //retorna un objeto que tiene propiedades de datos
            display:'', //muestra la pantalla de la calculadora inicializada como vacio
            currentValue:0, //almacena el reultado pero esta inicializado en 0
        }
    },
    methods:{
        agregarNumero(numero){ //toma un numero ejemplo un digito y lo manda a display, simula presionar un boton
            this.display += numero; //concatena el numero a la cadena de texto
        },
        calculo(){ //realiza el calculo dependiendo la expresion en display
            try { //el try catch es para posibles errores
                this.currentValue = eval(this.display); //evalua la cadena 
                this.display = this.currentValue.toString(); //lo convierte de numero a texto y se muestra en pantalla
                
            } catch (error) {
                this.display = "Error";  //si ocurre un error se muestra el error
            }
        },
        limpiarDisplay(){ //limpia la pantalla
            this.display = '';
        },
        eliminarNumero(){ //elimina el ultimo caracter
            this.display = this.display.slice(0,-1);
        },
        metodoPorcentaje(){ //calcula el porcentaje del numero en la pantalla
            this.display = eval(this.display + "/100").toString();
        }
    }
}
</script>
<template>
    <div class="container d-flex justify-content-center mt-4" style="height: 400px;">
        <div class="card p-3" style="width:300px; background-color: #c1e0e0; border-radius: 25px;">
            <div class="card-body">
                <h6 class="text-center">Calculadora V2</h6>
                <!-- DISPLAY DE LA CALCULADORA -->
                 <div class="mb-3">
                    <!-- disable es para que en el input no se puedan ingresar valores -->
                 <input type="text" class="form-control" v-model="display" disabled> 
                </div>
            <!-- BOTONES DE LA CALCULADORA -->
            <div class="d-flex justify-content-between mt-2">
                <button class="btn btn-primary" @click="metodoPorcentaje('%')">%</button>
                <button class="btn btn-primary" @click="limpiarDisplay">CE</button>
                <button class="btn btn-primary" @click="limpiarDisplay">C</button>
                <button class="btn btn-primary" @click="eliminarNumero">B</button>

             </div>

             <div class="d-flex justify-content-between mt-2">
                <button class="btn btn-light" @click="agregarNumero(7)">7</button>
                <button class="btn btn-light" @click="agregarNumero(8)">8</button>
                <button class="btn btn-light" @click="agregarNumero(9)">9</button>
                <button class="btn btn-secondary" @click="agregarNumero('/')">/</button>

             </div>

             <div class="d-flex justify-content-between mt-2">
                <button class="btn btn-light" @click="agregarNumero(4)">4</button>
                <button class="btn btn-light" @click="agregarNumero(5)">5</button>
                <button class="btn btn-light" @click="agregarNumero(6)">6</button>
                <button class="btn btn-secondary" @click="agregarNumero('*')">x</button>

             </div>

             <div class="d-flex justify-content-between mt-2">
                <button class="btn btn-light" @click="agregarNumero(1)">1</button>
                <button class="btn btn-light" @click="agregarNumero(2)">2</button>
                <button class="btn btn-light" @click="agregarNumero(3)">3</button>
                <button class="btn btn-secondary" @click="agregarNumero('-')">-</button>

             </div>

             <div class="d-flex justify-content-between mt-2">
                <button class="btn btn-info" @click="calculo">=</button>
                <button class="btn btn-light" @click="agregarNumero(0)">0</button>
                <button class="btn btn-light" @click="agregarNumero('.')">.</button>
                <button class="btn btn-secondary" @click="agregarNumero('+')">+</button>

             </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h6{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
button{
width: 50px;
height:45px ;
border-radius: 18px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: large;
}
input{
    border-radius: 15px;
}
</style>
