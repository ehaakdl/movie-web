
import { defineStore } from 'pinia'

export const useMessageSnackbarStore = defineStore('messageSnackbarStore', () => {
  const isVisibleMessageBar = ref(false)
  const message = ref('')

  const show = (contents: string) => {
    message.value = contents
    isVisibleMessageBar.value = true
  }

  return { isVisibleMessageBar, message , show}
})
