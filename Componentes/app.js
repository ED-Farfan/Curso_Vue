Vue.component('Saludo',{
    template: '<h4>{{saludo}}</h4>',
    data(){
        return{
            saludo: "Hola desde Vue"
        }
    }
})
const app = new Vue({
    el: '#app'
})