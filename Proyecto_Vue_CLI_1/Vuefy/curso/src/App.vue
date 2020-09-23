<template>
  <v-app>    
    
    <v-main>
      <barra></barra>

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import barra from './components/Barra';

export default {
  name: 'App',

  components: {
    barra,
  },

  data: () => ({
    //
  }),
};
</script>
