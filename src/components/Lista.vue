<template>
  <v-card class="">
    <v-card-title>
      {{ titulo }}
    </v-card-title>
    <v-card-text>
      <div>
      {{ items }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Lista',
  props: {
    titulo: String,
    items: Array
  }
}
</script>
