Vue.component('Padre',{
    template: //html
    `
    <div>
        <h4>{{papa}}</h4>
        Hola saludo
    </div>
    `,
    data(){
        return{
            papa: "Hola desde Vue"
        }
    }
})
new Vue({
    el:'#app'
})