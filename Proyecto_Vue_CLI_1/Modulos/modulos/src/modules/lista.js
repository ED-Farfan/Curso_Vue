export default{
    namespaced: true,
    state:{
        listas:["Tarea 1","Tarea 2"],        
    },

    mutations:{
        Agregar(state,nuevo){
            state.listas.push(nuevo)
        }
    }
}