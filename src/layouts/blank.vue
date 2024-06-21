<script lang="ts" setup>
import { useGlobalSnackbarStore } from '@/stores/useGlobalSnackbar';

import { storeToRefs } from 'pinia'

const globalSnackbarStore = useGlobalSnackbarStore()
const { isVisibleMessageBar, message } = storeToRefs(globalSnackbarStore)
</script>


<template>
  <v-app id="inspire">
    <v-main class="bg-primary">

      <router-view />
      <v-snackbar v-model="isVisibleMessageBar" :timeout="2000">
        {{ message }}
      </v-snackbar>
    </v-main>
  </v-app>
</template>


