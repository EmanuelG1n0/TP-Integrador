import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    roleId: null, // Añadir roleId al estado
  }),
  actions: {
    async login(token) {
      try {
        // Guardar el token en el estado
        this.token = token;

        // Establecer el header de autorización para futuras solicitudes
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

        // Obtener la información del usuario usando el token
        const response = await axios.get('http://localhost:8001/app/users/loginToken');
        this.user = response.data.user;
        this.roleId = response.data.user.RoleId; // Guardar el RoleId en el estado
        console.log('User:', this.user); // Verifica que el usuario se esté guardando correctamente
        console.log('RoleId:', this.roleId); // Verifica que el RoleId se esté guardando correctamente
      } catch (error) {
        console.error('Error during login:', error);
        throw new Error('Error during login');
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.roleId = null; // Limpiar roleId al cerrar sesión
      delete axios.defaults.headers.common['Authorization'];

      // Eliminar el token del almacenamiento local
      localStorage.removeItem('authToken');
    },
    setUser(updatedUser) {
      this.user = updatedUser;
      this.roleId = updatedUser.RoleId; // Actualizar roleId cuando se actualiza el usuario
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    userName: (state) => (state.user ? state.user.name : ''),
    userId: (state) => (state.user ? state.user.id : null),
    userRoleId: (state) => state.roleId, // Añadir getter para roleId
  },
});