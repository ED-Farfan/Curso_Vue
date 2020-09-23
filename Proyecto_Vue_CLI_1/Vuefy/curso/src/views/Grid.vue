<template>
<v-container>
    <h1>Contenedor</h1>
    <v-row >
        <v-col cols="12" sm="6">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem modi cupiditate, quis delectus excepturi aut quo praesentium iste doloremque recusandae alias aspernatur quae et perspiciatis vel tempora. Explicabo, tempore perferendis.</p>
            
        </v-col>
        <v-col cols="12" sm="6">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem modi cupiditate, quis delectus excepturi aut quo praesentium iste doloremque recusandae alias aspernatur quae et perspiciatis vel tempora. Explicabo, tempore perferendis.</p>
        </v-col>
    </v-row>
    <v-layout wrap>
        <v-flex xs12 class="primary">
            <h1>12</h1> </v-flex>
        <v-flex xs6 class="secondary"><h1>6</h1></v-flex>
        <v-flex xs6 class="secondary"><h1>6</h1></v-flex>
    </v-layout>
    <v-layout mt-5 justify-center>
        <v-flex class="info" xs4 >
            <h1>Centrado Horizontal</h1>
        </v-flex>
        <v-flex class="success" xs3 >
            <h1>Centrado</h1>
        </v-flex>
    </v-layout>
    <v-layout mt-2 justify-center align-center class="secondary" style="height:10em">
        <v-flex class="blue" xs6><h1>Centrado Horizontal & Vertical</h1></v-flex>
    </v-layout>
</v-container>
</template>
<script>
export default {
    name:'Grid'
}
</script>