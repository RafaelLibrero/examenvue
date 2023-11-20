import { createRouter, createWebHistory } from "vue-router"
import HomeComponent from './components/HomeComponent.vue'
import CubosMarca from './components/CubosmarcaComponent.vue'
import DetallesCubo from './components/DetallescuboComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import LoginComponent from './components/LoginComponent.vue'

const routes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/cubos/:marca", component: CubosMarca
    },
    {
        path: "/detalles/:id", component: DetallesCubo
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/register", component: RegisterComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router