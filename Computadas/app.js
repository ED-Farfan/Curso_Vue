const app = new Vue({
    el:"#app",
    data:{
        mensaje: "Hola soy Far"
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('')
        }
    }
})