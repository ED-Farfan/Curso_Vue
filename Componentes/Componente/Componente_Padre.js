Vue.component('Padre',{
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h4>{{papa}}</h4>
        <hr>
        <h4>Yo mande un numero {{numero}}</h4>
        <button @click='numero++'>+</button>
        <hijo numero_estatico='5' :numero_padre=numero ></hijo>
    </div>
    `,
    data(){
        return{
            papa: "Yo soy el padre",
            num : 0,
            numero : 0
        }
    }
})