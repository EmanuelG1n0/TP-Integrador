import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(credentials) {
      const response = await axios.post('http://localhost:8001/api/login', credentials);
      this.token = response.data.token;
      this.user = response.data.user;
      console.log('User:', this.user); // Verifica que el usuario se esté guardando correctamente
      // Establecer el header de autorización para futuras solicitudes
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    },
    logout() {
      this.user = null;
      this.token = null;
      delete axios.defaults.headers.common['Authorization'];
    },
    setUser(updatedUser) {
      this.user = updatedUser;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    userName: (state) => state.user ? state.user.name : '',
  },
});
