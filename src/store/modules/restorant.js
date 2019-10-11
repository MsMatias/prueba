import firebase from 'firebase'

const state = {
  restorant: {
    nombre: null,
    direccion: null,
    categorias: [],
    descripcion: null
  },
  restorants: []
}

const getters = {
  verRestorants (state) {
    return state.restorants
  },
  verRestorant (state) {
    return state.restorant
  }
}

const actions = {
  listar ({commit}) {
    let restorants = []
    firebase.database().ref('/restorants').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        restorants.push(childSnapshot.val())
      })
      commit('guardarRestorants', restorants)
    })
  },
  crear ({commit, dispatch}, restorant) {
    firebase.database().ref('/restorants').push(restorant)
    dispatch('listar')
  },
  ver ({commit}, id) {
    firebase.database().ref('/restorants/' + id).once('value').then(function(snapshot) {
      commit('guardarRestorant', snapshot.val())
    })
  },
  eliminar({commit, dispatch}, id) {
    firebase.database().ref('/restorants/' + id).remove()
    dispatch('listar')
  }
}

const mutations = {
  guardarRestorants (state, restorants) {
    state.restorants = restorants
  },
  guardarRestorant (state, restorant) {
    state.restorant = restorant
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
