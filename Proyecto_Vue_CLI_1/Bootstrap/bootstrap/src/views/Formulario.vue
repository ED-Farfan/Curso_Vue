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
            <b-col md="4">
                <h2>Seleccion Radio</h2>
                <h3>Selecione un animal</h3>
                <b-form-radio-group v-model="selec" :options="Radioanimales" :state="comprobar3"></b-form-radio-group>
                <small v-if="(selec===null)">Seleccione una casilla</small>
                <p>Usted selecciono: {{selec}}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="8">
                <h2>Seleccion Multiple</h2>
            <br>
            <b-form-checkbox-group v-model="sel" :options="Radioanimales" :state="comprobar4"></b-form-checkbox-group>
            <small v-if="(sel===null)">Seleccione una o varias casillas</small>
            <p v-if="(sel!==null && sel.length !== 0)">Usted Selecciono:</p>
            <ul>
                <li v-for="(s,index) in sel" :key="index.id">
                    {{s}}
                </li>
                
            </ul>
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
            ],
            selec: null,
            Radioanimales:[                
                {value: "Perro", text:"Guau"},
                {value: "Gato", text:"Miau"},
                {value: "Pato", text:"Cuack"}
            ],
            sel:null
        }
    },
    computed:{
        comprobar(){
            return this.texto.length > 4 ? true:false
        },
        comprobar2(){
            return this.selected !== null ? true:false
        },
        comprobar3(){
            return this.selec !== null ? true:false
        },
        comprobar4(){
            return (this.sel === null || this.sel.length === 0) ? false:true
        }
    }
}
</script>