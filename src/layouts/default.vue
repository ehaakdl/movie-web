<template>
  <v-app id="inspire">
    <v-navigation-drawer
    v-model="drawer"

      >
        <v-list color="transparent">
          <v-list-item prepend-icon="mdi-filter-outline" title="Filter"></v-list-item>
        </v-list>


      </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Movie</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
const drawer = ref(null)
</script>
