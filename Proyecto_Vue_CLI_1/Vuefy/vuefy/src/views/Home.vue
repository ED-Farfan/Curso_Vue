<template>  
<div>
 
  <v-layout :wrap="true">
    <v-flex xs12>      
      <v-card dark class="mx-auto">
        <v-date-picker v-model="fecha" full-width dark locale="es-mx" :min=minimo :max=hoy></v-date-picker>
      </v-card>
      <v-card color="error" dark >
        <v-card-text class="display-1 text-center" >
          $65.00 --- {{fecha}}     {{hoy}}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</div>
 
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data(){
    return{
      fecha:"",
      minimo:"1990",
      hoy: new Date().toISOString().substr(0, 10)
    }

  },
  components: {
   
  }
}
</script>
