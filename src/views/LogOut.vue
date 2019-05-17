<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'LogOut',
  components: {
  },
  mounted () {
    this.$session.destroy()
    this.$router.replace('/login')
  }
}
</script>
