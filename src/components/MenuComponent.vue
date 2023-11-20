<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Examen</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Cubos</router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Marcas
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="marca in marcas" :key="marca">
                <router-link class="dropdown-item" :to="'/cubos/' +
                marca">{{marca}}</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Seguridad
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/login">Login</router-link></li>
            <li><router-link class="dropdown-item" to="/register">Registro</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos'

const service = new ServiceCubos()

export default {
    name: "MenuComponent",
    data() {
        return {
            marcas: []
        }
    },
    mounted(){
        service.getMarcasCubos().then(result => {
            this.marcas = result
        })
    }
}
</script>

<style>

</style>