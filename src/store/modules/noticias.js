import firebase from 'firebase'

// Son todas las variables (atributos) del objeto auth
const state = {
    noticias: null
}

// Todas las funciones que me muestren los datos que contienen los state
const getters = {
    getNoticias(state) {
        return state.noticias
    }
}

// Funciones que me permiten alterar los state
const actions = {
    listar({ commit }) {
        let noticias = []
        firebase.database().ref('/Noticias').once('value').then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                console.log(childSnapshot.val())
                noticias.push(childSnapshot.val())
            })
            commit('guardarNoticias', noticias)
        })
    },
    crear({ commit }, noticia) {
        return new Promise((resolve, reject) => {
            firebase.database().ref('/Noticias').push(noticia)
            resolve('Enviado')
        })
    }
}

// Son las funciones que permiten modificar los valores de los state
const mutations = {
    guardarNoticias(state, payload) {
        state.noticias = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}