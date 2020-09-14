Vue.component('hijo',{
    template: //html
        `
        <div>
            <button @click="$store.commit('aumentar')">+ {{$store.state.numero}}</button>
        </div>
        `
})