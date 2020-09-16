<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Cabecera></Cabecera>    
    <Lista></Lista>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'
export default {
  name: 'App',
  components: {
    Cabecera,
    Lista
  }
}
</script>

