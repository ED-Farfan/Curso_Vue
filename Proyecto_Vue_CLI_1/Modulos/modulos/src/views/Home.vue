<template>
  <div class="home">    
    
    <v-list>
      <v-list-item v-for="(item, index) in listas" :key="index">{{item}} </v-list-item>      
    </v-list>
      <v-form>
        <v-text-field type="text" v-model="nombre" outlined color></v-text-field>
        
      </v-form>
        <v-btn small  color="red" @click="Agregar(nombre); nombre='hola'"> agregar</v-btn>
        <h3>{{nombre}}</h3>
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {mapMutations, mapState} from "vuex"
export default {
  name: 'Home',
  data(){
      return{
        nombre:"Hola"
      }    
  },
  computed: {
    ...mapState('lista',['listas'])
  },
  methods: {
    ...mapMutations('lista',['Agregar'])
  },
}
</script>
