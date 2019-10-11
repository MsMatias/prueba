import firebase from 'firebase'

const state = {
  gasto: {
    id_usuario: null,
    monto: null,
    id_categoria: null,
    observacion: null
    fecha: null
  },
  gastos: []
}

const actions = {
  listar ({commit}, id) {
    let gastos = []
    firebase.database().ref('/gastos').orderByChild('id_usuario').equalTo(id).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        gastos.push(childSnapshot.val())
      })
      commit('guardarGastos', gastos)
    })
  }
}

const mutations = {
  guardarGastos (state, gastos) {
    state.gastos = gastos
  }
}

const getters = {
  verGastos (state) {
    return state.gastos
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
