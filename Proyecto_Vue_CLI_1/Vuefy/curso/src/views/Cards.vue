<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card dark > 
            <v-card-title primary-title  class="justify-center">
                Titulo
            </v-card-title>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
            
          <v-card-text>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit velit nisi culpa quo dolorem repudiandae, pariatur soluta autem, commodi natus tenetur rem incidunt recusandae dicta illum vero aliquam, voluptatibus minima!</p>
            <div class="text--primary">
              <p>Nuevo</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color=""> Hola </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card>
            <v-card-title primary-title>
                Titulo
            </v-card-title>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
            
          <v-card-text>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit velit nisi culpa quo dolorem repudiandae, pariatur soluta autem, commodi natus tenetur rem incidunt recusandae dicta illum vero aliquam, voluptatibus minima!</p>
            <div class="text--primary">
              <p>Nuevo</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color=""> Hola </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Cards",
};
</script>