<template>
  <div>
    <form v-on:submit.prevent="login()">
        <label>Email</label>
        <input type="text" class="form-control" v-model="usuario.email">
        <label>Contraseña</label>
        <input type="password" class="form-control" v-model="usuario.password">
        <button class="btn btn-warning">Login</button>
    </form>
  </div>
</template>

<script>
import ServiceManage from '@/services/ServiceManage'

const service = new ServiceManage()

export default {
    name: "LoginComponent",
    data() {
        return{
            usuario: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login(){
            service.login(this.usuario).then((result) => {
                localStorage.setItem('token', result)
                console.log(result)
            })
        }
    }
}
</script>

<style>

</style>