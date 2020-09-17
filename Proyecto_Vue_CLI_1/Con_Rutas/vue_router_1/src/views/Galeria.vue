<template>
    <div>
        <h1>Galeria</h1>
        <Fotografia></Fotografia>
        <span>Modificar la ruta despues de Galeria/</span>
        <br>
        <span>Ejemplo:</span>
        <br>
        <span>Galeria/{{$route.params.id}}</span>
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