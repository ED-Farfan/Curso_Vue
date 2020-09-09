const app = new Vue({
    el:"#app",
    data:{
        mensaje: "Hola soy Far",
        contador: 0,
        porcentaje: 0
    },
    methods:{
        aumentar(){
            this.contador ++
            this.porcentaje += 10
        },
        disminuir(){
            this.contador --
            this.porcentaje -= 10
        }
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('')
        }
    }
})