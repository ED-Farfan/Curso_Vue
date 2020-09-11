Vue.component("hijo", {    
    template: //html
        `
    <div class="p-5 bg-danger text-white">
        <h5>Yo soy hijo</h5>
        <h5>Papá me mando esticamente un numero: {{numero_estatico}}</h5>
        <h5>Papá me mando un numero: {{numero_padre}}</h5>
    </div>
    `,
    props:['numero_estatico','numero_padre']
});