import firebase from 'firebase'

const state = {
  ahorro: {
    id_usuario: null,
    monto: null,
    id_categoria: null,
    fecha: null
  },
  ahorros: []
}

const getters = {
  verAhorros (state) {
    return state.ahorros
  }
}

const actions = {
  listar ({commit}, id) {
    let ahorros = []
    firebase.database().ref('/ahorros').orderByChild('id_usuario').equalTo(id).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        ahorros.push(childSnapshot.val())
      })
      commit('guardarAhorros', ahorros)
    })
  }
}

const mutations = {
  guardarAhorros (state, ahorros) {
    state.ahorros = ahorros
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
