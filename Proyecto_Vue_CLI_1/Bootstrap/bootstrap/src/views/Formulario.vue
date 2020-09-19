<template>
<div>
    <h1>Formulario</h1>
    <hr>
    <form action="">
        <b-row>
            
            <b-col md="4">
                <h2>Caja</h2>
                <b-form-input v-model="texto" placeholder="Ingresa tú nombre" :state="comprobar"></b-form-input>
                <small>Ingrese al menos 4 carácteres</small>
                <h6>Texto"{{texto}}"</h6>

            </b-col>
            <b-col md="4">
                <h2>Seleccion</h2>
                <b-form-select v-model="selected" :options="animales" :state="comprobar2"></b-form-select>
                <p>Usted selecciono: {{selected}} <span v-if="(selected === null)">NADA</span> </p>
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
            texto:'',
            selected: null,
            animales:[
                {value: null, text:"Seleccione un animal"},
                {value: "Perro", text:"Guau"},
                {value: "Gato", text:"Miau"},
                {value: "Pato", text:"Cuack"}
            ]
        }
    },
    computed:{
        comprobar(){
            return this.texto.length > 4 ? true:false
        },
        comprobar2(){
            return this.selected !== null ? true:false
        }
    }
}
</script>