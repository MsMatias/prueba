import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

//Importar componentes @ => ./src/
import Inicio from '@/components/Inicio'
import Contacto from '@/components/Contacto'
import Login from '@/views/Login'
import LogOut from '@/views/LogOut'

//Importar LayOut
import LayOut from '@/layout/LayOut'

Vue.config.productionTip = false

Vue.use(VueSession)
Vue.use(VueRouter)
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

const routes = [
  {
    path: '/',
    redirect:'/inicio',
    component: LayOut,
    children: [
      {
        path: 'inicio',
        name: 'Inicio',
        meta: {
          login: true
        },
        component: Inicio
      }
    ]
  },
  {
    path: '/',
    redirect: '/contacto',
    component: LayOut,
    children: [
      {
        path: 'contacto',
        name: 'Contacto',
        meta: {
          login: true
        },
        component: Contacto
      }
    ]
  },
  {
    path: '/login',
    meta: {
      login: false
    },
    component: Login
  },
  {
    path: '/logout',
    meta: {
      login: true
    },
    component: LogOut
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.login)) {
    let login = Array.from(to.meta.login) // Guardamos dato de meta.login
    if(login && !Vue.prototype.$session.exists()) { // Si login es true
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }

  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
