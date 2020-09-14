Vue.component('hijo',{
    template: //html
        `
        <div>
            <button @click="$store.commit('aumentar')">+ {{$store.state.numero}}</button>
            <hr>
            <span>Boton Que funciona con mapMutations:</span>
            <button @click="aumentar">+ {{$store.state.numero}}</button>
            <button @click="disminuir">- {{$store.state.numero}}</button>
            

        </div>
        `,
    methods:{
        ...Vuex.mapMutations(['aumentar','disminuir'])
    }
})