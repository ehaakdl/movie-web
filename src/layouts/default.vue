<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list color="transparent">
        <v-list-item prepend-icon="mdi-magnify" title="search" @click="onClickMovieSearch">

        </v-list-item>
      </v-list>


    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Movie</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
      <v-snackbar v-model="isVisibleMessageBar" :timeout="2000">
        {{ message }}
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useGlobalSnackbarStore } from '@/stores/useGlobalSnackbarStore';

import { storeToRefs } from 'pinia'

const drawer = ref(true)
const globalSnackbarStore = useGlobalSnackbarStore()
const { isVisibleMessageBar, message } = storeToRefs(globalSnackbarStore)
const router = useRouter()

const onClickMovieSearch = () => {
  router.push("/movie/search")
}

</script>
