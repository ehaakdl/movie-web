
import { defineStore } from 'pinia'
import { CommonResponse, SaveNoticiationMethodRequest } from './typed';
import axios from '@axios';

export const useNotificationMethodStore = defineStore('notificationMethod', () => {

  async function save(data: SaveNoticiationMethodRequest): Promise<CommonResponse> {
    return axios.post('/notification/method', data)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      });
  }

  return { save }
})
