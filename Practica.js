const app = new Vue ({
    el:"#app",
    data:{
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: ""
    },
    methods:{
        agregarTarea(){
            if(this.nuevaTarea !== ''){
                this.tareas.push({
                    nombre: this.nuevaTarea,
                    estado: false
                })
                this.nuevaTarea=""
            }
        },
        editarTarea: function(index){
            this.tareas[index].estado = true
        },
        eliminarTarea: function(index){
            this.tareas.splice(index,1)
        }
    },
    created: function(){
        let datosL = JSON.parse(localStorage.getItem('gym-vue'))
        if(datosL == null){
            this.tareas=[]
        }
        else{
            this.tareas = datosL
        }
    }
})