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


<script lang="ts" setup>
import { useMessageSnackbarStore } from '../stores/messageSnackbar';

import { storeToRefs } from 'pinia'

const messageSnackbarStore = useMessageSnackbarStore()
const { isVisibleMessageBar, message } = storeToRefs(messageSnackbarStore)
</script>
