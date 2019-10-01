<template>
  <div id="app">
    <v-toolbar>
      <v-toolbar-side-icon v-on:click="showNav = !showNav"></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href="#/" icon><v-icon>home</v-icon></v-btn>
        <v-btn href="#/contacto" icon><v-icon>contact_support</v-icon></v-btn>
        <v-btn v-if="login" @click="logoutGoogle" icon><v-icon>logout</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-if="showNav">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    
  </v-navigation-drawer>
    <v-container>
      <v-layout row wrap>
        <router-view></router-view>
      </v-layout>
    </v-container>
    <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>Echo por alguien &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      showNav: false,
      items: [
        {
          icon: 'home',
          title: 'Inicio',
          href: '/'
        },
        {
          icon: 'logout',
          title: 'Salir',
          href: 'contacto'
        }
      ]
    }
  },
  computed: {
    login () {
      return this.$store.getters['auth/getLogin']
    }
  },
  methods: {
    ir (href) {
      this.$router.replace(href)
    },
    logoutGoogle () {
      this.$store.dispatch('auth/logout').then(result => {
        this.$router.replace('/')
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
