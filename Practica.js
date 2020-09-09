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
                this.tareas.push(this.nuevaTarea)
                this.nuevaTarea=""
            }
        }
    }
})