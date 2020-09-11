Vue.component('Padre',{
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h4>{{papa}}</h4>
        <hijo></hijo>
    </div>
    `,
    data(){
        return{
            papa: "Yo soy el padre"
        }
    }
})