<template>
<div>
    <h1>Formulario</h1>
    <form action="">
        <b-row>
            <b-col md="6">
                <b-form-input v-model="texto" placeholder="Ingresa tú nombre" :state="comprobar"></b-form-input>
                <small>Ingrese al menos 4 carácteres</small>
                <h6>Texto"{{texto}}"</h6>

            </b-col>
            
        </b-row>
    </form>
</div>    
</template>
<script>
export default {
    name:'Formulario',
    data(){
        return{
            texto:''
        }
    },
    computed:{
        comprobar(){
            return this.texto.length > 4 ? true:false
        }
    }
}
</script>