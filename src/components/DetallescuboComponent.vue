<template>
  <div>
    <div v-if="cubo">
      <h1>{{ cubo.nombre }}</h1>
      <ul>
        <li>Modelo: {{ cubo.modelo }}</li>
        <li>Marca: {{ cubo.marca }}</li>
        <li>Color: {{ cubo.color }}</li>
        <li><img :src="cubo.imagen" style="height: 300px; width: auto" /></li>
        <li>Precio: {{ cubo.precio }}€</li>
        <li>Valoracion: {{ cubo.valoracion }}</li>
      </ul>
    </div>
    <div v-if="comentarios.length">
      <h1>Comentarios</h1>
      <ul v-for="comentario in comentarios" :key="comentario">
        <li>{{ comentario.comentario }}</li>
        <li>{{ comentario.fechaComentario }}</li>
      </ul>
    </div>
    <router-link class="btn btn-warning" to="/">Volver</router-link>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";

const service = new ServiceCubos();

export default {
  name: "DetallescuboComponent",
  data() {
    return {
      cubo: {},
      comentarios: [],
    };
  },
  mounted() {
    var id = this.$route.params.id;
    service.getDetalleCubo(id).then((result) => {
      this.cubo = result;
    });
    service.getComentariosCubo(id).then((result) => {
      this.comentarios = result;
    });
  },
};
</script>

<style></style>
