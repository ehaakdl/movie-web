import { CommonResponse } from '@/stores/typed';
import axios, { AxiosResponse } from 'axios';

const axiosInst = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

axiosInst.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return error;
  }
);
axiosInst.interceptors.response.use(function (res: AxiosResponse) {
  // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 데이터가 있는 작업 수행
  return res

}, function (error) {
  // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 오류가 있는 작업 수행
  if (error['response'])
    return error['response'];
  else
    return error
});
export default axiosInst
