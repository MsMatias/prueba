<template>
  <div>
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
  <v-card>
    <v-card-title>
      Contacto
    </v-card-title>
    <v-card-text>
      <v-text-field label="Asunto" v-model="noticia.asunto"></v-text-field>
      <v-text-field label="mensaje" v-model="noticia.mensaje"></v-text-field>
      <v-btn @click="guardarNoticia">Enviar</v-btn>
    </v-card-text>
  </v-card>

  <v-card>
    <v-card-title>
      Contacto
    </v-card-title>
    <v-card-text>
      <ul v-if="noticias">
        <li v-for="noticia in noticias" :key="noticia.mensaje">
          <p>Asunto: {{ noticia.asunto }}</p>
          <p>Mensaje: {{ noticia.mensaje }}</p>
          <p>Fecha: {{ noticia.fecha }}</p>
        </li>
      </ul>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
  // Crear una variable a partir de la lectura de otra u otras variable/s
  data () {
    return {
      noticia: {
        asunto: null,
        mensaje: null,
        id_usuario: null,
        fecha: null
      }
    }
  },
  mounted () {
    this.$store.dispatch('noticias/listar')
  },
  computed: {
    user () {
      return this.$store.getters['auth/getUser']
    },
    noticias () {
      return this.$store.getters['noticias/getNoticias']
    }
  },
  methods: {
    guardarNoticia () {
      let usuario = this.$store.getters['auth/getUser']
      this.noticia.id_usuario = usuario.uid
      this.noticia.fecha = new Date().toGMTString()
      this.$store.dispatch('noticias/crear', this.noticia).then(result => {
        this.$store.dispatch('noticias/listar')
      })
    }
  }
}
</script>
