<template>
  <v-btn @click="LoginGoogle">Login con google</v-btn>
  <div>
    {{ gastos }}
  </div>
</template>

<script>

import firebase from 'firebase'
import {
    mapState,
    mapActions
  } from 'vuex';

export default {
  name: 'Inicio',
  components: {
  },
  data() {
    return {
    }
  },
  created () {
    this.$store.dispatch('gastos/listar', usuario)
    this.$store.dispatch('auth/verify').then(result => {
      this.$router.replace('/contacto')
      console.log(result)
    })
  },
  computed: {
    gastos () {
      return this.$store.getters['gastos/verGastos']
    }
  },
  methods: {
    LoginGoogle() {
      this.$store.dispatch('auth/login')
    }
  }
}
</script>
