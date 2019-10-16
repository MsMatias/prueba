import Vue from 'vue'
import VueRouter from 'vue-router'

//Importar componentes
import Inicio from '@/components/Inicio'
import Contacto from '@/components/Contacto'

Vue.use(VueRouter)

function checkLogin(to, from, next) {
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

export default new VueRouter({
    routes
})