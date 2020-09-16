<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(item,index) in ordena"
        :key="item.id"
        class="list-group-item d-flex justify-content-between align-items-center"
        @click="aumentar(index)"
      >
        {{index}}-{{ item.nombre }}
        <span class="badge badge-primary badge-pill">{{ item.cantidad }}</span>
      </li>
    </ul>
    <button @click="resetear" class="btn btn-danger btn-block">Resetear</button>
  </div>
</template>

<script>
import {  mapState,mapMutations } from "vuex";
export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"]),
    ordena(){
        let frutas = this.frutas
        frutas.sort((a,b)=> b.cantidad - a.cantidad)
        return frutas
    }
    
  },
  methods:{
      ...mapMutations(['aumentar','resetear'])
  }
};
</script>
