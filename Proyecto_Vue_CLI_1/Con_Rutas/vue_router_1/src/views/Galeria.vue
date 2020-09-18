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
    </div>
</template>
<script>
import Fotografia from '@/components/Fotografia.vue'
export default {
    name:'Galeria',
    components:{
        Fotografia
    }
}
</script>