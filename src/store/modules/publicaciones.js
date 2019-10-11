import firebase from 'firebase'

const state = {
  publicacion: {
    id: null,
    titulo: null,
    imagen: null,
    texto: null,
    fecha: null,
    id_categoria: null,
    id_usuario: null
  },
  publicaciones: []
}

const getters = {
  verPublicaciones (state) {
    return state.publicaciones
  },
  verPublicacion (state) {
    return state.publicacion
  }
}

const actions = {
  listar ({commit}) {
    let publicaciones = []
    firebase.database().ref('/publicaciones').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        publicaciones.push(childSnapshot.val())
      })
      commit('guardarPublicaciones', publicaciones)
    })
  },
  ver ({commit}, id) {
    firebase.database().ref('/publicaciones/' + id).once('value').then(function(snapshot) {
      commit('guardarPublicacion', snapshot.val())
    })
  },
  eliminar ({commit, dispatch}, id) {
    firebase.database().ref('/publicaciones/' + id).remove()
    dispatch('listar')
  },
  actualizar ({commit, dispatch}, publicacion) {
    /**
    publicacion: {
      id: null,
      titulo: null,
      imagen: null,
      texto: null,
      fecha: null,
      id_categoria: null,
      id_usuario: null
    }
    */
    firebase.database().ref('/publicaciones/' + publicacion.id + '/titulo').set({
      titulo: publicacion.titulo,
      imagen: publicacion.imagen,
      texto: publicacion.texto,
      fecha: publicacion.fecha,
      id_categoria: publicacion.id_categoria,
      id_usuario: publicacion.id_usuario
    })
    dispatch('listar')
  }
}

const mutations = {
  guardarPublicaciones (state, publicaciones) {
    state.publicaciones = publicaciones
  },
  guardarPublicacion (state, publicacion) {
    state.publicacion = publicacion
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
