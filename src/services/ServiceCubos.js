import Global from "@/Global";
import axios from "axios";

export default class ServiceCubos {

    getCubos() {
        return new Promise(function(resolve){
            var request = "api/cubos"
            var url = Global.urlApiTiendaCubos + request
            var cubos= []
            axios.get(url).then(response => {
                cubos = response.data
                resolve(cubos)
            })
        })
    }

    getMarcasCubos() {
        return new Promise(function(resolve){
            var request = "api/cubos/marcas"
            var url = Global.urlApiTiendaCubos + request
            var marcas = []
            axios.get(url).then(response => {
                marcas = response.data
                resolve(marcas)
            })
        })
    }

    getCubosByMarca(marca) {
        return new Promise(function(resolve){
            var request = "api/cubos/cubosmarca/" + marca
            var url = Global.urlApiTiendaCubos + request
            var cubos = []
            axios.get(url).then(response => {
                cubos = response.data
                resolve(cubos)
            })
        })
    }

    getDetalleCubo(id) {
        return new Promise(function(resolve){
            var request = "api/cubos/" + id
            var url = Global.urlApiTiendaCubos + request
            var cubo = {}
            axios.get(url).then(response => {
                cubo = response.data
                resolve(cubo)
            })
        })
    }

    getComentariosCubo(id) {
        return new Promise(function(resolve){
            var request = "api/comentarioscubo/getcomentarioscubo/" + id
            var url = Global.urlApiTiendaCubos + request
            var comentarios = []
            axios.get(url).then(response => {
                comentarios = response.data
                resolve(comentarios)
            })
        })
    }
}