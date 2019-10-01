<template>
  <v-btn @click="LoginGoogle">Login con google</v-btn>
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
    this.$store.dispatch('auth/verify').then(result => {
      this.$router.replace('/contacto')
      console.log(result)
    })
  },
  methods: {
    LoginGoogle() {
      this.$store.dispatch('auth/login')
    }
  }
}
</script>
