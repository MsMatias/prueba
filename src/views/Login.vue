<template>
  <v-card class="">
    <v-card-title>
      Bienvenidos Inicio de sesion
    </v-card-title>
    <v-card-text>
      <v-layout wrap>
      <v-flex xs12>
          <v-text-field
            label="Usuario"
            type="text"
            v-model="usuario"
          ></v-text-field>
      </v-flex>
      <v-flex xs12>
          <v-text-field
            label="Clave"
            type="password"
            v-model="clave"
          ></v-text-field>
      </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="login()" color="green">Entrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      usuario: '',
      clave: ''
    }
  },
  methods: {
    login () {
      if(this.usuario === 'admin' && this.clave === 'admin2019') {
        //onsole.log('Login correcto')
        this.$session.start()
        this.$router.replace('/')
      } else {
        //console.log('Usuario o contraseña incorrectos')
      }
    }
  }
}
</script>
