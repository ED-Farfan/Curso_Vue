import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:{
      titulo: '',
      estado: false,
      color: ""
    }
  },
  mutations: {
    mostrarloading(state,payload){
      state.loading.titulo = payload.titulo
      state.loading.estado = true
      state.loading.color = payload.color
    },
    ocultarloding(state){
      state.loading.estado=false
    }
  },
  actions: {
  },
  modules: {
  }
})
