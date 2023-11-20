<template>
  <div v-if="!token">
    <form v-on:submit.prevent="register()">
        <label>Nombre</label>
        <input type="text" class="form-control" v-model="usuario.nombre">
        <label>Email</label>
        <input type="text" class="form-control" v-model="usuario.email">
        <label>Contraseña</label>
        <input type="password" class="form-control" v-model="usuario.pass">
        <button class="btn btn-warning">Registrarse</button>
    </form>
  </div>
  <div v-if="token">
    <h1>Ya estas logueado</h1>
  </div>
</template>

<script>
import ServiceManage from '@/services/ServiceManage'

const service = new ServiceManage()

export default {
    name: "RegisterComponent",
    data() {
        return {
            usuario: {
                idUsuario: 0,
                nombre: "",
                email: "",
                pass: ""
            },
            token: localStorage.getItem('token')
        }
    },
    methods: {
        register(){
            service.register(this.usuario).then(result=> {
                this.$router.push("/login")
                console.log(result)
            })
        }
    }
}
</script>

<style>

</style>