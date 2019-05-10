import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

//Importar componentes
import Inicio from '@/components/Inicio'
import Contacto from '@/components/Contacto'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [
  { path: '/', component: Inicio },
  { path: '/contacto', component: Contacto }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
