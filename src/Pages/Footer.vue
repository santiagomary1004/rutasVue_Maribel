<script setup>
import PoliticaPrivacidad from '../Pages/PoliticaPrivacidad.vue';
const components ={
    PoliticaPrivacidad,
};

// export default {
//     data (){
//          return{
//              PoliticaPrivacidad
//          }
//      }
//  }
</script>
<template>
     <footer>
        <div style="text-align: center; background-color:#AD2E05; padding: 20px; margin-top: 20px; font-family: arial; color:white; font-size: 10px" class="row">
            <div class="col-md-3">
                <div class="card-header" style="background-color:#AD2E05 ; font-family: arial; color: white;" >LEGALES:</div>
                <div class="card-body">
                    <p style="text-align: center; padding: 20px; margin-top: 20px; font-family: arial; color:white; font-size: 14px">
                        <a href="#" class="text-white text-decoration-underline" data-bs-toggle="modal" data-bs-target="#politicaModal">
                            Política de privacidad
                        </a>
                    </p>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card-header" style="background-color:#AD2E05 ; font-family: arial; color: white;" >REDES SOCIALES:</div>
                <div class="card-body">
                    <p style="text-align: center; padding: 20px; margin-top: 20px; font-family: arial; color:white; font-size: 14px">
                        <a href="https://es-la.facebook.com/login/" target="_blank" style="color: white; text-decoration: underline;">
                            Facebook
                        </a>
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card-header" style="background-color:#AD2E05 ; font-family: arial; color: white;">DIRECCIÓN:</div>
                <p style="text-align: center; padding: 20px; margin-top: 20px; font-family: arial; color:white; font-size: 14px">
                    <a href="https://www.google.com.mx/maps/place/69800+Tlaxiaco,+Oax./@17.266522,-97.680835,16.38z/data=!4m6!3m5!1s0x85c62ec1f70b7fdd:0x5bf555f747e65636!8m2!3d17.2661075!4d-97.676773!16s%2Fg%2F11c5qpk920?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="color: white; text-decoration: underline;">
                        Colonia Centro número 17
                    </a>
                </p>
            </div>

            <div class="col-md-12">
                <br>
                <div class="card-header" style="background-color:#AD2E05 ; font-family: arial; color: white;"><center>©2025 EL RINCÓN DE LA PIZZA. TODOS LOS DERECHOS RESERVADOS</center></div>
                <br>
            </div>
            </div>
        </footer>
            <!-- Modal con el formulario de inicio de sesión -->
            <div class="modal fade" id="politicaModal" tabindex="-1" aria-labelledby="politicaModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                         <h5 class="modal-title" id="politicaModalLabel">Politica de privacidad</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div class="modal-body">
          <PoliticaPrivacidad/>
        </div>
      </div>
    </div>
  </div>
</template>
