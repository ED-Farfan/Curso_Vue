<template>
    <div>
        <h1>{{cont}}</h1>
        <br>
            <v-btn small text color="sucess" @click="aumentar(1)">+</v-btn>
            <span>{{comprobar}}</span>
        
    </div>
</template>

<script>
export default {
    name: 'Contador',
    data() {
        return {
            cont:0
        }
    },
    methods: {
        aumentar(num){
            this.cont += num
        }
    },
    computed: {
        comprobar(){
            if(this.cont===0){
                return 'Es Cero'
            }
            else{
                return 'Diferente de cero'
            }

        }
    },
}
</script>