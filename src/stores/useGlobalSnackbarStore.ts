
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalSnackbarStore = defineStore('useGlobalSnackbarStore', () => {
  const isVisibleMessageBar = ref(false)
  const message = ref('')

  const showUnknown = () => {
    message.value = '알 수 없는 에러 발생'
    isVisibleMessageBar.value = true
  }
  const show = (contents: string) => {
    message.value = contents
    isVisibleMessageBar.value = true
  }

  return { isVisibleMessageBar, message , show, showUnknown}
})
