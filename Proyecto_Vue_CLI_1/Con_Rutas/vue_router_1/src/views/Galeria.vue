<template>
    <div>
        <h1>Galeria</h1>
        <Fotografia></Fotografia>
        <span>Modificar la ruta despues de Galeria/</span>
        <br>
        <span>Ejemplo:</span>
        <br>
        <span>Galeria/{{$route.params.id}}</span>
        <hr>
        <br>
        <h4>Boton estatico para acceder a foto 2</h4>
        <router-link to="Foto-2">
            <button>Foto-2</button>
        </router-link>
        <br>
        <h4> Botones dinamicos </h4>
        <router-link :to="{name:'Galeria', params:{id:'Foto-'+item}}" 
        v-for="(item,index) of numeroFoto" :key="index">
            <button v-if="($route.params.id != 'Foto-'+item)">Foto-{{item}}</button>
        </router-link>
        <br><br>
        <hr>
        <br>
        <button @click='home'>Home</button>
    </div>
</template>
<script>
import Fotografia from '@/components/Fotografia.vue'
export default {
    name:'Galeria',
    components:{
        Fotografia
    },
    data(){
        return{
            numeroFoto:[1,2,3,4,5,6,7,8,9,10]
        }
    },
    methods: {
        home(){
            this.$router.push('/')
        }
    },
}
</script>