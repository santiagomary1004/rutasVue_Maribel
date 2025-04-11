import {createRouter, createWebHashHistory} from 'vue-router';

//agregando paginas de la aplicacion
import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import calculadora from "../Pages/calculadora.vue";
import card from '../Pages/card.vue';
import card1 from '../Pages/card1.vue';
import card2 from '../Pages/card2.vue';
import recorrido from '../Pages/recorrido.vue';
import recorrido1 from '../Pages/recorrido1.vue';
import horario from '../Pages/horario.vue';
import eventos from '../Pages/eventos.vue';
import calculadora1 from '../Pages/calculadora1.vue';
import padre from '../Pages/padre.vue';
import hijo1 from '../Pages/hijo1.vue';
import hijo2 from '../Pages/hijo2.vue';
import BarraNavegacion from '../Pages/BarraNavegacion.vue';
import Banner from '../Pages/Banner.vue';
import Bienvenida from '../Pages/Bienvenida.vue';
import Carrito from '../Pages/Carrito.vue';
import Footer from '../Pages/Footer.vue';
import Formulario from '../Pages/Formulario.vue';
import PoliticaPrivacidad from '../Pages/PoliticaPrivacidad.vue';
import ProductosDestacados from '../Pages/ProductosDestacados.vue';
import pagina from '../Pages/pagina.vue';
import sistema from '../Pages/sistema.vue';


const routes = [
    {
        path: "/",
        name: 'home',
        component: Home,
    },
    {
        path: "/calculadora",
        name: 'calculadora',
        component: calculadora,
    },
    {
        path: "/calculadora1",
        name: 'calculadora1',
        component: calculadora1,
    },
    {
        path: "/about",
        name: 'about',
        component: About,
    },
    {
        path: "/card",
        name: 'card',
        component: card,
    },
    {
        path: "/card1",
        name: 'card1',
        component: card1,
    },
    {
        path: "/card2",
        name: 'card2',
        component: card2,
    },
    {
        path: "/recorrido",
        name: 'recorrido',
        component: recorrido,
    },
    {
        path: "/recorrido1",
        name: 'recorrido1',
        component: recorrido1,
    },
    {
        path: "/horario",
        name: 'horario',
        component: horario,
    },
    {
        path: "/eventos",
        name: 'eventos',
        component: eventos,
    },
    {
        path: "/padre",
        name: 'padre',
        component: padre,
    },
    {
        path: "/hijo1",
        name: 'hijo1',
        component: hijo1,
    },
    {
        path: "/hijo2",
        name: 'hijo2',
        component: hijo2,
    },
    {
        path: "/BarraNavegacion",
        name: 'BarraNavegacion',
        component: BarraNavegacion,
    },
    {
        path: "/Banner",
        name: 'Banner',
        component: Banner,
    },
    {
        path: "/Bienevenida",
        name: 'Bienvenida',
        component: Bienvenida,
    },
    {
        path: "/Carrito",
        name: 'Carrito',
        component: Carrito,
    },
    {
        path: "/Footer",
        name: 'Footer',
        component: Footer,
    },
    {
        path: "/Formulario",
        name: 'Formulario',
        component: Formulario,
    },
    {
        path: "/PoliticaPrivacidad",
        name: 'PoliticaPrivacidad',
        component: PoliticaPrivacidad,
    },
    {
        path: "/ProductosDestacados",
        name: 'ProductosDestacados',
        component: ProductosDestacados,
    },
    {
        path: "/pagina",
        name: 'pagina',
        component: pagina,
    },
    {
        path: "/sistema",
        name: 'sistema',
        component: sistema,
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;




