import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import {store} from './store/store.js'

//Importar componentes
import Inicio from '@/components/Inicio'
import Contacto from '@/components/Contacto'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

function checkLogin (to, from, next) {
  if (store.getters['auth/getLogin']) {
    next()
  } else {
    next({
      path: '/'
    })
  }
}

const routes = [
  { path: '/', component: Inicio },
  { path: '/contacto', component: Contacto, beforeEnter: checkLogin }
]

var firebaseConfig = {
  apiKey: "AIzaSyBpAGba-YMkkR5GfU0HZJthcb_cu9m74Ew",
  authDomain: "tesis-2611d.firebaseapp.com",
  databaseURL: "https://tesis-2611d.firebaseio.com",
  projectId: "tesis-2611d",
  storageBucket: "tesis-2611d.appspot.com",
  messagingSenderId: "66985171595",
  appId: "1:66985171595:web:a57852cb942cb226"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  firebase,
  store
}).$mount('#app')
