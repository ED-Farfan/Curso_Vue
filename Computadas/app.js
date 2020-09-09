const app = new Vue({
    el:"#app",
    data:{
        mensaje: "Hola soy Far",
        contador: 0
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('')
        }
    }
})