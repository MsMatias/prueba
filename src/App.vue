<template>
  <div id="app">
    <!-- Enrutador -->
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
    }
  },
  methods: {
    redirectTo (url) {
      this.$router.push(url)
    }
  },
  beforeCreate: function () {
    if(!this.$session.exists()) {
      this.$router.replace('/login')
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
