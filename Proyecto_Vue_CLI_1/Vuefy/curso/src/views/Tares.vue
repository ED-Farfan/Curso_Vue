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
                <v-btn color="warning" block @click="Modificar(index)">
                  <v-icon left>mdi-calendar-edit</v-icon>
                  Editar
                </v-btn>
              </v-flex>
              <v-flex xs6 justify-center align-center>
                <v-btn color="error" block @click="Eliminar(index)">
                  <v-icon left>mdi-close-box</v-icon>
                  Borrar
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card v-if="!Editar">
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
                          error-count="Ver"                          
                          label="Descripción tarea:"
                          v-model="texto"
                          no-resize
                            rows="4"
                        ></v-textarea> 
            </v-form>            
          </v-card-text>
          <v-card-actions v-if="!Termino">
            <v-btn color="success" block :disabled="Termino" text @click="Agregar()">
                Agregar
              <v-icon right >mdi-calendar-multiple-check</v-icon>              
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-if="Editar">
          <v-card-title primary-title class="justify-center warning white--text">
            EDITAR TAREA
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
                          error-count="Ver"                          
                          label="Descripción tarea:"
                          v-model="texto"
                          no-resize
                            rows="4"
                        ></v-textarea> 
            </v-form>            
          </v-card-text>
          <v-card-actions v-if="!Termino">
              
            <v-btn color="yellow accent-2"  :disabled="Termino" @click="Agregar_M()">
              <v-icon right >mdi-calendar-multiple-check</v-icon>
              ¡Modificar!
            </v-btn>
            
            <v-btn color="info"   @click="Editar=false; tarea=''; texto=''">
              <v-icon right >mdi-keyboard-return</v-icon>
              ¡Agregar nueva tarea!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar rounded="pill"
        v-model="snack" color="light-blue darken-3"
    >
        Se agrego correctamte la tarea: {{cpy}} 
            
        <v-btn right color="red" text @click.native="snack = false; cpy=''" rounded> <v-icon color="">mdi-close-circle-outline</v-icon>
        </v-btn>
    </v-snackbar>
    <v-snackbar rounded="pill"
        v-model="snack2" color="red"
    >
        Se elimino correctamte la tarea: {{cpy}} 
            
        <v-btn right color="red" text @click.native="snack2 = false; cpy=''" rounded> <v-icon color="white">mdi-close-circle-outline</v-icon>
        </v-btn>
    </v-snackbar>
    <v-snackbar rounded="pill"
        v-model="snack3" color="warning"
    >
        Se modifico correctamte la tarea: {{cpy}} 
            
        <v-btn right color="warning" text @click.native="snack3 = false; cpy=''" rounded> <v-icon color="white">mdi-close-circle-outline</v-icon>
        </v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  name: "tareas-crud",
  data() {
      return {
          lista:[{              
              titulo:"Tarea 1",
              texto: "Nose"
          }
          ],
          tarea: "",
          texto: "",
          snack: false,
          snack2:false,
          cpy:"",
          Editar:false,
          dir:0,
          snack3: false
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
          this.cpy=this.tarea
          this.snack=true
          this.lista.push({
              titulo:this.tarea,
              texto: this.texto
          })
          this.tarea=""
          this.texto=""
      },
      Eliminar(id){          
          this.cpy=this.lista[id].tarea
          this.snack2=true
          let list2= []
          let a = 0
          for(let i in this.lista){              
              i != id ? list2.push(this.lista[i]): a=0              
          }
          this.lista=list2    
      },
      Modificar(id){
          this.tarea=this.lista[id].titulo
          this.texto=this.lista[id].texto
          this.Editar=true
          this.dir=id
      },
      Agregar_M(){
          this.lista[this.dir].titulo=this.tarea
          this.snack3 = true
          this.cpy = this.tarea
          this.lista[this.dir].texto=this.texto
          this.Editar=false
          this.dir=0
          this.tarea=""
          this.texto=""
          this.Editar=false

      }
  },
};
</script>
