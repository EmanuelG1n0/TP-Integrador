<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" permanent>
      <v-list>
        <v-list-item-group>
          <v-list-item @click="currentView = 'ProductManagement'">
            <v-list-item-icon>
              <v-icon>mdi-plus-box</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Agregar Producto</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="currentView = 'RoleManagement'">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ver Roles</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="currentView = 'UserManagement'">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ver Usuarios</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Panel de Administración</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <component :is="currentViewComponent" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import ProductManagement from '@/components/ProductManagement.vue';
import UserManagement from '@/components/UserManagement.vue';
import RoleManagement from '@/components/RoleManagement.vue';

const router = useRouter();
const authStore = useAuthStore();
const drawer = ref(true);
const currentView = ref('ProductManagement');

const currentViewComponent = computed(() => {
  switch (currentView.value) {
    case 'ProductManagement':
      return ProductManagement;
    case 'UserManagement':
      return UserManagement;
    case 'RoleManagement':
      return RoleManagement;
    default:
      return ProductManagement;
  }
});

// Verificación de permisos y autenticación
onMounted(async () => {
  try {
    await authStore.fetchUser(); // Asegúrate de que esta función exista y cargue la información del usuario
    if (!authStore.isAdminGetter) {
      alert('No tienes permisos para acceder al panel de administración.');
      router.push('/home');
    }
  } catch (error) {
    console.error('Error al verificar permisos de administrador:', error);
    router.push('/home');
  }
});

// Computed para verificar si es una pantalla de escritorio
const isDesktop = computed(() => window.innerWidth >= 1024);
</script>

<style scoped>
/* Ajuste de margen para la barra lateral en escritorio */




/* Ajustes responsivos para pantallas pequeñas */
@media (max-width: 1024px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
