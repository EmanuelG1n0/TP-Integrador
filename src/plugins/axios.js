// src/plugins/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // Usa el proxy configurado en Vite
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;