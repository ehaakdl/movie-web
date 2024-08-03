
import { defineStore } from 'pinia'
import { UserRegisterRequest } from './typed';
import axiosInst from '@axios';

export const useUserStore = defineStore('User', () => {
  async function register(payload: UserRegisterRequest) {
    return axiosInst.post('/user/register', payload)
      .then((data) => {
        return data
      })
      .catch((error) => {
        return error
      });
  }

  return { register }
})
