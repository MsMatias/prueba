import firebase from 'firebase'

// Son todas las variables (atributos) del objeto auth
const state = {
    token: null,
    user: null,
    login: false
}

// Todas las funciones que me muestren los datos que contienen los state
const getters = {
    getToken (state) {
        return state.token
    },
    getUser (state) {
        return state.user
    },
    getLogin (state) {
        return state.login
    }
}

// Funciones que me permiten alterar los state
const actions = {
    login ({commit}) {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
          'redirect_uri': '/contacto'
        });
        firebase.auth().signInWithRedirect(provider);
    },
    logout ({commit}) {
        return new Promise((resolve, reject) => {
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                commit('setUser', null)
                commit('setToken', null)
                commit('setLogin', false)
                resolve('Logout completado')
            }).catch(function(error) {
                // An error happened.
                reject('No se pudo deslogear')
            });
        })
    },
    verify ({commit}) {
        return new Promise((resolve, reject) => {
            firebase.auth().getRedirectResult().then(function(result) {
                if (result.credential) {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = result.credential.accessToken;
                  // The signed-in user info.
                  var user = result.user;
                  commit('setUser', user)
                  commit('setToken', token)
                  commit('setLogin', true)                  
                  resolve('Usuario Logeado')
                }                
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                reject('Error al logear, intente nuevamente')
            });
        })        
    }
}

// Son las funciones que permiten modificar los valores de los state
const mutations = {
    setToken (state, payload) {
        state.token = payload
    },
    setLogin (state, payload) {
        state.login = payload
    },
    setUser (state, payload) {
        state.user = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}