<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card>
          <v-card-title primary-title class="justify-center blue darken-1 white--text" dark>
               <v-icon color="white" left>mdi-notebook-outline</v-icon>
              
            Titulo de tarea
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="text--primary">
              <p>Hola</p>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-layout row wrap justify-center>
              <v-flex xs6 justify-center align-center>
                <v-btn color="info" block>
                  <v-icon left>mdi-calendar-edit</v-icon>
                  Editar
                </v-btn>
              </v-flex>
              <v-flex xs6 justify-center align-center>
                <v-btn color="error" block>
                  <v-icon left>mdi-calendar-edit</v-icon>
                  Editar
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-title primary-title class="justify-center">
            Titulo de tarea
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="text--primary">
              <p>Hola</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" block>
              <v-icon right>mdi-calendar-multiple-check</v-icon>
              Agregar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "tareas-crud",
  data() {
      return {
          lista:[],
          tarea: "",
          texto: ""
      }
  },
};
</script>
