Vue.component('Saludo',{
    template: //html
    `
    <div>
        <h4>{{saludo}}</h4>
        Hola saludo
    </div>
    `,
    data(){
        return{
            saludo: "Hola desde Vue"
        }
    }
})
const app = new Vue({
    el: '#app'
})