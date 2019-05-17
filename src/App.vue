<template>
  <div id="app">
    <router-view></router-view>
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
  methods: {
    redirectTo (url) {
      this.$router.push(url)
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
