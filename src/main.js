import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import router from 'router/'
import { store } from './store/store.js'

Vue.config.productionTip = false

Vue.use(Vuetify, {
    theme: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base // #3F51B5
    }
})

var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
    render: h => h(App),
    router,
    firebase,
    store
}).$mount('#app')