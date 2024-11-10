<template>
  <v-app>
    <!-- Panel de administración -->
    <div v-if="isAdmin" class="admin-panel">
      <v-navigation-drawer
        app
        v-model="drawer"
        :permanent="isDesktop"
        temporary
        width="240"
        class="app-drawer"
      >
        <v-list>
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
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Panel de Administración</v-toolbar-title>
      </v-app-bar>

      <v-main class="main-content">
        <v-container class="center-content" fluid>
          <component :is="currentViewComponent" />
        </v-container>
      </v-main>
    </div>

    <!-- Gestor -->
    <div v-else class="content-panel">
      <v-main>
        <v-container fluid>
          <h1>Gestor de Productos</h1>
          <!-- Aquí puedes agregar el contenido específico del gestor -->
        </v-container>
      </v-main>
    </div>
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
const currentView = ref('ProductManagement');
const drawer = ref(false);

// Computed property para cargar el componente correspondiente
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

// Estado para verificar si el usuario es administrador
const isAdmin = ref(false);

// Verificación de permisos y autenticación
onMounted(async () => {
  try {
    await authStore.fetchUser();
    if (!authStore.isAdminGetter) {
      alert('No tienes permisos para acceder al panel de administración.');
      router.push('/home');
    } else {
      isAdmin.value = true;
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
