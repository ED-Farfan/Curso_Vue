<template>
    <v-container>
        <v-layout wrap>
            <v-flex xs12>
                <h1>Botones</h1>
            </v-flex>
            <v-flex xs12>
                <v-btn>Basico</v-btn>
                <v-btn color="primary">color</v-btn>
                <v-btn color="blue" dark>color</v-btn>
                <v-btn color="info" text >Sin fondo</v-btn>
                <v-btn color="info" large >Largo</v-btn>
                <v-btn color="warning" small>Pequeño</v-btn>
                <v-btn color="warning" :disabled="true">Desabilitado</v-btn>
                <hr>
                <h2>Iconos</h2>
                <br>
                <v-btn color="info" >                    
                    <v-icon>mdi-star</v-icon>
                </v-btn>
                <v-btn color="warning" text>                    
                    <v-icon>mdi-star</v-icon>
                </v-btn>
                <v-btn color="warning" fab>                    
                    <v-icon>mdi-star</v-icon>
                </v-btn>
                <v-btn color="warning"  text>                    
                    Hola
                    <v-icon>mdi-star</v-icon>
                </v-btn>
                <v-btn color="warning"  text>                    
                    Hola
                    <v-icon right>mdi-star</v-icon>
                </v-btn>
                <v-btn color="error"   outlined>                    
                    Hola
                    <v-icon right>mdi-star</v-icon>
                </v-btn>

                <br>
                <v-btn color="error"   outlined block>                    
                    Hola
                    <v-icon right>mdi-star</v-icon>
                </v-btn>
                 
                <v-btn color="error"   outlined block rounded>                    
                    Hola
                    <v-icon right>mdi-star</v-icon>
                </v-btn>

            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name:"Botones"
}
</script>