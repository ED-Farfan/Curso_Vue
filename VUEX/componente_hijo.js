Vue.component('hijo',{
    template: //html
        `
        <div>
            <button @click="$store.commit('aumentar')">+ {{$store.state.numero}}</button>
            <hr>
            <span>Boton Que funciona con mapMutations:</span>
            <button @click="aumentar">+ {{$store.state.numero}}</button>
            <button @click="disminuir">- {{$store.state.numero}}</button>
            <button @click="disminuir_numero(2)"> {{$store.state.numero}} - 2</button>
            <hr>
            <h2>Cursos</h2>
            <button @click="obtenercursos">Obtener Cursos</button>
            <ul v-for="item of curso">
                <li>{{item.nombre}}</li>
            </ul>
            

        </div>
        `,
    computed:{        
        ...Vuex.mapState(['numero','curso'])
    },
    methods:{
        ...Vuex.mapMutations(['aumentar','disminuir','disminuir_numero']),
        ...Vuex.mapActions(['obtenercursos'])
    }
})