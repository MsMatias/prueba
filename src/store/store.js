import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersist from 'vuex-persist'

import noticias from './modules/noticias.js'
import gastos from './modules/gastos.js'
import ahorros from './modules/ahorros.js'.
import restorant from './modules/restorant.js'
import publicaciones from './modules/publicaciones.js'
import auth from './modules/auth.js'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'tesisApp',
    storage: window.localStorage
})

export const store = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    modules: {
        auth,
        noticias,
        gastos,
        ahorros,
        restorant,
        publicaciones
    }
})
