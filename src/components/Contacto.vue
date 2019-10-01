<template>
  <v-card>
    <v-card-title>
      Contacto
    </v-card-title>
    <v-card-text>
      <v-avatar>
      <img :src="user.photoURL" alt="avatar">
    </v-avatar>
      Bienvenido {{ user.displayName }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Contacto',
  // Crear una variable a partir de la lectura de otra u otras variable/s
  computed: {
    user () {
      console.log(this.$store.getters['auth/getUser'])
      return this.$store.getters['auth/getUser']
    }
  }
}
</script>
