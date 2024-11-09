import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    roleId: null,
    isAdmin: false, // Añadir isAdmin al estado
  }),
  actions: {
    async login(token) {
      try {
        // Guardar el token en el estado
        this.token = token;

        // Establecer el header de autorización para futuras solicitudes
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

        // Guardar el token en el almacenamiento local
        localStorage.setItem('authToken', token);

        // Obtener la información del usuario usando el token
        const response = await axios.get('http://localhost:8001/app/users/loginToken');
        const userData = response.data.user; // Asegúrate de acceder a la propiedad correcta en la respuesta
        this.user = { id: userData.id, name: userData.name }; // Guardar el id y el nombre del usuario en el estado
        this.roleId = userData.RoleId; // Guardar el RoleId en el estado

        // Verificar si el usuario es administrador
        const adminCheckResponse = await axios.post('http://localhost:8001/app/users/check-admin', {
          RoleId: this.roleId
        });
        this.isAdmin = adminCheckResponse.data.isAdmin; // Guardar isAdmin en el estado
      } catch (error) {
        console.error('Error during login:', error);
        throw new Error('Error during login');
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.roleId = null;
      this.isAdmin = false; // Limpiar isAdmin al cerrar sesión
      delete axios.defaults.headers.common['Authorization'];

      // Eliminar el token del almacenamiento local
      localStorage.removeItem('authToken');
    },
    setUser(updatedUser) {
      this.user = { id: updatedUser.id, name: updatedUser.name };
      this.roleId = updatedUser.RoleId; // Actualizar roleId cuando se actualiza el usuario
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    userName: (state) => (state.user ? state.user.name : ''),
    userId: (state) => (state.user ? state.user.id : null),
    userRoleId: (state) => state.roleId,
    isAdminGetter: (state) => state.isAdmin, // Renombrar getter para isAdmin
  },
});