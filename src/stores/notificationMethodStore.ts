
import { defineStore } from 'pinia'
import { SaveNoticiationMethodRequest } from './typed';
import axiosInst from '@axios';

export const useNotificationMethodStore = defineStore('notificationMethod', () => {
  async function save(payload: SaveNoticiationMethodRequest) {
    return axiosInst.post('/notification/method', payload)
      .then((data) => {
        return data
      })
      .catch((error) => {
        return error
      });
  }

  return { save }
})
