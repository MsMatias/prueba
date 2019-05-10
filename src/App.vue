<template>
  <div id="app">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href="#/" flat>Inicio</v-btn>
        <v-btn href="#/contacto" flat>Contacto</v-btn>
      </v-toolbar-items>
    </v-toolbar>
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
