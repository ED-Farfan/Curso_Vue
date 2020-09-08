const app = new Vue({
    el: '#app', // 'el' es propio de Vue, '#app' es el id del contenedor
    data:{ // Trabajamos con los datos
        titulo: 'Hola mundo con Vue', // Titulo es un objeto y el texto es su propiedad
        frutas: [
            {nombre:"Manzana", cantidad:1},
            {nombre:'Pera', cantidad:2},
            {nombre:'Mango', cantidad:0},
            {nombre:'Uva', cantidad:10}        
        ],
        nuevaFruta:""
    },
    methods:{
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
            this.nuevaFruta = ""
        },
        otroMetodo(){
            console.log("Diste Click");
        }
    }
})