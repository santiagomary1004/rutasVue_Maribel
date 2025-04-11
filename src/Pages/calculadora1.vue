<script>
export default{
    data() {
        return {
            numero1:0,
            numero2:0,
            resultado:0,
        }
    },
    methods: {
        sumar(){
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        },
        resta(){
            this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
        },
        multiplicacion(){
            this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
        },
        division(){
            this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
        }
    }
}

</script>
<template>
   <div class="container mt-5">
        <div class="card shadow p-4">
            <h1 class="mt-4">Calculadora V1</h1>
            <div class="mb-3">
                <label for="">Numero 1</label>
                <input type="number" class="form-control" v-model="numero1">
            </div>
            <div class="mb-3">
                <label for="">Numero 2</label>
                <input type="number" class="form-control" v-model="numero2">
            </div>
            <div class="mb-3">
                <label for="">Numero 3</label>
                <input type="number" class="form-control" v-model="numero3">
            </div>
            <div class="mb-3">
                <label for="">Numero 4</label>
                <input type="number" class="form-control" v-model="numero4">
            </div>
            <div class="d-flex justify-content-center gap-2">
                <button @click="sumar" class="btn btn-danger">Sumar</button>
                <button @click="resta" class="btn btn-warning">Resta</button>
                <button @click="resta" class="btn btn-primary">Resta</button>
                <button @click="resta" class="btn btn-danger">Resta</button>
                <!-- <button class="btn btn-danger">Sumar</button> -->
            </div>
            
            <h2 class="text-center mt-4">Resultado: {{ resultado }} </h2>
        </div>
   </div>
</template>
<style scoped>
h1{
    color: black;
    background-color:cornflowerblue;
    border-radius: 15px;
    padding: 10px;
    text-align: center;
}
</style>