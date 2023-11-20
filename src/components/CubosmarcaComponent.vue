<template>
  <div>
    <h1>Cubos</h1>
    <table v-if="cubos" class="table table-info table-hover">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Detalles</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cubo in cubos" :key="cubo">
                <td>{{cubo.nombre}}</td>
                <td>{{cubo.precio}}€</td>
                <td><img :src="cubo.imagen"
                    style="height: 150px; width: auto;">
                </td>
                <td> 
                    <router-link :to="'/detalles/'+cubo.idCubo"
                    class="btn btn-success">Detalles</router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos'

const service = new ServiceCubos()

export default {
    name: "CubosmarcaComponent",
    data() {
        return{
            cubos: []
        }
    },
    mounted(){
        var marca = this.$route.params.marca
        service.getCubosByMarca(marca).then(result => {
            this.cubos = result
            console.log(result)
        })
    }
}
</script>

<style>

</style>