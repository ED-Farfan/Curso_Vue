<template>
  <div>
    <v-toolbar dark dense src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" main>
      <v-app-bar-nav-icon @click="drawe=!drawe"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-battery-alert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawe" temporary dark absolute>
      <v-layout mt-4 aling-center colums wrap>
        <v-flex xs12>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
        </v-flex>
        <v-flex>
            <p class="white--text mt-3 headline">Juan Perez</p>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "Barra",
  data() {
    return {
      drawe: true,
    };
  },
};
</script>
