
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMessageSnackbarStore = defineStore('messageSnackbarStore', () => {
  const isVisibleMessageBar = ref(false)
  const message = ref('')

  const showUnkownError = () => {
    message.value = '알 수 없는 에러 발생'
    isVisibleMessageBar.value = true
  }
  const show = (contents: string) => {
    message.value = contents
    isVisibleMessageBar.value = true
  }

  return { isVisibleMessageBar, message , show, showUnkownError}
})
