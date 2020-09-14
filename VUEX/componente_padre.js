Vue.component('titulo',{
    template: //html
        `
        <div>
            <h1>Numero:</h1>
            <h3>{{$store.state.numero}}</h3>
            <h3> Numero desde Computado: {{numero}}</h3>
            <hijo></hijo>
        </div>
        `,
        computed:{
            numero(){
                return store.state.numero
            }
        }
    
})