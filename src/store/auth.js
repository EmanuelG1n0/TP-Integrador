import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(token) {
      // Guardar el token en el estado
      this.token = token;

      // Establecer el header de autorización para futuras solicitudes
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

      // Obtener la información del usuario usando el token
      const response = await axios.get('http://localhost:8001/app/users/loginToken');
      this.user = response.data.user;
      console.log('User:', this.user); // Verifica que el usuario se esté guardando correctamente
    },
    logout() {
      this.user = null;
      this.token = null;
      delete axios.defaults.headers.common['Authorization'];

      // Eliminar el token del almacenamiento local
      localStorage.removeItem('authToken');
    },
    setUser(updatedUser) {
      this.user = updatedUser;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    userName: (state) => state.user ? state.user.name : '',
    userId: (state) => state.user ? state.user.id : null,
  },
});
