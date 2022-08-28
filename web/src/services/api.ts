import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${cookies.get('refreshToken')}`,
  }
});
