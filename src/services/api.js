import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_MY_IP}:3333`,
});

export default api;
