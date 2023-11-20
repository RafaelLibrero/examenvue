import Global from "@/Global";
import axios from "axios";

export default class ServiceManage {
    register(usuario){
        return new Promise(function(resolve){
            var request = "api/manage/registrousuario"
            var url = Global.urlApiTiendaCubos + request
            axios.post(url, usuario).then(response => {
                resolve(response)
            })
        })
    }

    login(usuario){
        return new Promise(function(resolve){
            var request = "api/manage/login"
            var url = Global.urlApiTiendaCubos + request
            axios.post(url, usuario).then(response => {
                resolve(response.data.response)
            })
        })
    }
}