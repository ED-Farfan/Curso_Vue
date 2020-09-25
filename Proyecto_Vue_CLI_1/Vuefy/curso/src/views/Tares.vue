<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card v-for="(tarea, index) in lista" :key="index" class="mb-4">
          <v-card-title primary-title class="justify-center blue darken-1 white--text" dark>
               <v-icon color="white" left>mdi-notebook-outline</v-icon>
              {{tarea.titulo}}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="text--primary">
              <p>{{tarea.texto}}</p>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-layout row wrap justify-center>
              <v-flex xs6 justify-center align-center>
                <v-btn color="warning" block>
                  <v-icon left>mdi-calendar-edit</v-icon>
                  Editar
                </v-btn>
              </v-flex>
              <v-flex xs6 justify-center align-center>
                <v-btn color="error" block>
                  <v-icon left>mdi-close-box</v-icon>
                  Borrar
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-title primary-title class="justify-center cyan lighten-1 white--text">
            Nueva Tarea
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
                <v-text-field  
                label="Titulo Tarea" append-icon="mdi-calendar-edit"  v-model="tarea" outlined :color="Titulos"></v-text-field>
                    <v-divider                      
                    ></v-divider>
                  <v-textarea
                          outlined
                          :color="Text"
                          placeholder="Descripcion"
                          error-count="Ver"                          
                          label="Descripción tarea:"
                          v-model="texto"
                          
                        ></v-textarea> 
            </v-form>            
          </v-card-text>
          <v-card-actions v-if="!Termino">
            <v-btn color="success" block :disabled="Termino" @click="Agregar()">
              <v-icon right >mdi-calendar-multiple-check</v-icon>
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
          lista:[{              
              titulo:"Tarea 1",
              texto: "sdsdsddfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf"
          },
          {              
              titulo:"Tarea 3",
              texto: "sdsdsddfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf"
          },
          {              
              titulo:"Tarea 4",
              texto: "sdsdsddfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf"
          }
          ],
          tarea: "",
          texto: ""
      }
  },
  computed: {
      Titulos(){
          return this.tarea.length == 0 ? "error":"success"
      },
      Text(){
          return this.texto.length == 0 ? "error":"success"
      },
      Termino(){
          return (this.texto.length !== 0 && this.tarea.length !== 0) ?  false  : true
      }
  },
  methods: {
      Agregar(){
          this.lista.push({
              titulo:this.tarea,
              texto: this.texto
          })
          this.tarea=""
          this.texto=""
      }
  },
};
</script>
