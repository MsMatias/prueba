<template>
  <v-card class="">
    <v-card-title>
      Bienvenidos
    </v-card-title>
    <v-card-text>
      Bienvenidos a mi pagina
    </v-card-text>
    <lista
    v-for="lista in listas"
    :key="lista.titulo"
    :titulo="lista.titulo"
    :items="lista.items"
    ></lista>
  </v-card>
</template>

<script>
import Lista from '@/components/Lista'
export default {
  name: 'Inicio',
  components: {
    Lista
  },
  data() {
    return {
      listas: [
       {
         titulo: 'lista 1',
         items: [1,2,3]
      },
      {
        titulo: 'lista 2',
        items: [4,5,6]
     },
     {
       titulo: 'lista 3',
       items: [7,8,9]
    }
      ]
    }
  },
  mounted: function () {
    //console.log('estado de session ' + this.$session.exists())
  }
}
</script>
