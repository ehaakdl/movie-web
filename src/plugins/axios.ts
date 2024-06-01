import axios from 'axios';

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

axiosInst.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    return error;
  }
)
export default axiosInst
