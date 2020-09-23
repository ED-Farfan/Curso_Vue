<template>  
<div>
 
  <v-layout :wrap="true">
    <v-flex xs12>      
      <v-card dark class="mx-auto">
        <v-date-picker v-model="fecha" full-width dark locale="es-mx" :min=minimo :max=hoy @change="getDolar(fecha)"></v-date-picker>
      </v-card>
      <v-card color="error" dark >
        <v-card-text class="display-1 text-center" >
          ${{precio}}   Dia:{{fecha}}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</div>
 
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return{
      fecha:new Date().toISOString().substr(0, 10),
      minimo:"1990",
      hoy: new Date().toISOString().substr(0, 10),
      precio:0.0
    }

  },
  methods: {
    async getDolar(dia){      
      console.log("DIA");
      let fecha =`${dia.slice(8,10)}-${dia.slice(5,7)}-${dia.slice(0,4)}`            
      let datos = await axios.get(`https://mindicador.cl/api/dolar/${fecha}`)      
      this.precio = await datos.data.serie[0].valor
    }
  },
  created() {
    this.getDolar(this.hoy)
  },
  components: {
   
  }
}
</script>
