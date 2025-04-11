<template>
    <div class="container">
        <div class="row mt-4">
            <div>
                <h4>Evento Click</h4>
                    <button @click="clic" class="btn btn-danger mx-2"type="button">Dale clic</button>   
                    <button @click="soyButon" class="btn btn-warning mx-2"type="button">Dale clic 2</button>
                    <button @click="soyButon2" class="btn btn-info mx-2"type="button">Más información</button>   
            </div>
            <div>
                <h4>Evento Change</h4>
                    <label class="input-group-text" for="">Ingresa tu nombre</label>
                    <input class="form-control mt-2" type="text" id="nombre" @change="nombreE">
                    <p>El nombre ingresado es: <strong>{{ nombre }}</strong></p>
            </div>
            <div>
                <h4>Evento de mouseenter y mouseleave</h4>
                <div class="text-center" style="color: white; width: 300px; height: 200px; background-color: black; text-align: center; padding: 15px; border-radius: 14px;"
                    @mouseenter="mostrarMensaje" @mouseleave="ocultarMensaje">
                    <p>Pase el mouse</p>
                    <p>{{ mensaje }}</p>
                </div>
            </div>
            <div>
                <h4>Evento Doble Click</h4>
                    <button @dblclick="dobleClic" class="btn btn-success mt-2">Haz doble clic aqui</button>
            </div>
            <div>
                <h4>Evento Copy y Paste</h4>
                    <textarea class="form-control" @copy="copiarTexto" @paste="pegarTexto"></textarea>
                    <p>{{ mensajePortapapeles }}</p>
            </div>
            <div>
                <h4>Evento Mousedown y Mouseup</h4>
                <button class="btn btn-secondary" @mousedown="presionarBoton" @mouseup="soltarBoton">
                Mantén presionado
                </button>
                <p>{{ mensajeMouse }}</p>
            </div>


        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nombre: ' ',
            mensaje: ' ',
            mensajePortapapeles: '',
            mensajeMouse: '',
        }
    },
    methods:{
        //metodo para primer boton
        clic(){
            alert("gracias por darle clic")
        },
        //metodo para segundo boton
        soyButon(){
            alert("soy un boton")
        },
        //metodo para tercer boton
        soyButon2(){
            alert("más información sobre el botón 2")
        },
        //metodo para evento change
        nombreE(event){
            this.nombre = event.target.value
        },
        //metodo para evento mouse enter y mouse leave
        mostrarMensaje(){
            this.mensaje="El mouse esta dentro del rectangulo";
        },
        ocultarMensaje(){
            this.mensaje="El mouse esta fuera del rectangulo"
        },
        //metodo para doble click
        dobleClic() {
        alert('le has dado doble click');
        },
        //metodo para copiar y pegar texto
        copiarTexto() {
            this.mensajePortapapeles = 'Texto copiado al portapapeles';
        },
        pegarTexto() {
            this.mensajePortapapeles = 'Texto pegado desde el portapapeles';
        },
        //metodo para presionar y soltar boton
        presionarBoton() {
            this.mensajeMouse = 'Boton presionado';
        },
        soltarBoton() {
            this.mensajeMouse = 'Boton soltado';
        },
    }
}
</script>
<style>
    
</style>