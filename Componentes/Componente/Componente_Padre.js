Vue.component('Padre',{
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h4>{{papa}}</h4>
        <hr>
        <h4>Yo mande un numero {{numero}}</h4>        

        Hijo mando el numero {{num_hi}}
        <br>
        <button @click='numero++'>+</button>

        <hijo numero_estatico='5' :numero_padre=numero @num_hijo="num_hi = $event"></hijo>
        

    </div>
    `,
    data(){
        return{
            papa: "Yo soy el padre",
            num : 0,
            numero : 0,
            num_hi : 0
        }
    }
})