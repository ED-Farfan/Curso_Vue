import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import VueTextareaAutosize from 'vue-textarea-autosize'

import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWWGPvLus-mcyddqifccdh-cbjAJyKllE",
  authDomain: "vue-calendario-2020.firebaseapp.com",
  databaseURL: "https://vue-calendario-2020.firebaseio.com",
  projectId: "vue-calendario-2020",
  storageBucket: "vue-calendario-2020.appspot.com",
  messagingSenderId: "458599853772",
  appId: "1:458599853772:web:2c2651e6454b5c27201c69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
