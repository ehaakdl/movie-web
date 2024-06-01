import { defineStore } from 'pinia'

export const useAppStore = defineStore('notificationMethod', {
  state: () => ({
    //
  }),
  actions: () => ({
    function save(email:string) {
      axios.post("",{
        data객체
      },[,config])
    }
  })
})
