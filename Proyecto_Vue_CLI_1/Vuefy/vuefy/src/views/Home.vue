<template>  
<div>
 
  <v-layout :wrap="true">
    <v-flex xs12>      
      <v-card>
        <v-date-picker v-model="picker"></v-date-picker>
      </v-card>
      <v-card color="error" dark>
        <v-card-text class="display-1 text-center" >
          $65.00
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
  components: {
   
  }
}
</script>
