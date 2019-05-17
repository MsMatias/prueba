<template>
  <div>
<v-toolbar fidex app>
  <v-toolbar-side-icon v-on:click="showNav = !showNav"></v-toolbar-side-icon>
  <v-toolbar-title>Title</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn @click="redirectTo('/')" icon><v-icon>home</v-icon></v-btn>
    <v-btn @click="redirectTo('/contacto')" icon><v-icon>contact_support</v-icon></v-btn>
  </v-toolbar-items>
</v-toolbar>
<v-navigation-drawer v-if="showNav" fidex app>
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

<v-list dense class="pt-0">
  <v-list-tile
    v-for="item in items"
    :key="item.title"
    @click="ir(item.href)"
    >
    <v-list-tile-action>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-tile-action>

    <v-list-tile-content>
      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</v-list>
</v-navigation-drawer>
<v-container>
  <v-layout row wrap align-center justify-center>
    <router-view></router-view>
  </v-layout>
</v-container>
<v-footer class="pa-3" app>
<v-spacer></v-spacer>
<div>Echo por alguien &copy; {{ new Date().getFullYear() }}</div>
</v-footer>
</div>
</template>

<script>
export default {
  name: 'LayOut',
  components: {
  }
}
</script>
