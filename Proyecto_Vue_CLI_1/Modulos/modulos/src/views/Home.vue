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
      <Contador></Contador>

       <v-container class="">
          <v-layout row wrap>
            <v-flex xs6>
              <h1>Contador Inerno: {{n}}</h1>
              <span>{{valor}}</span>
              <br>
                  <v-btn color="blue" @click="Aumentar(1)"> +1</v-btn>
              
            </v-flex>
          </v-layout>
        </v-container>
            <v-btn to="/about">click</v-btn>
        
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Contador from '@/components/Contador.vue'
import {mapMutations, mapState} from "vuex"
export default {
  name: 'Home',
  data(){
      return{
        nombre:"Hola",
        n:-10
      }    
  },
  computed: {
    ...mapState('lista',['listas']),
    valor(){
      return (this.n >=0 ?'Positivo':'Negativo')
    }
  },
  methods: {
    ...mapMutations('lista',['Agregar']),
    Aumentar(sum){
      this.n += sum
    }
  },
  components:{
    Contador
  }
}
</script>
