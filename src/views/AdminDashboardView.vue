<template>
  <v-app>
    <!-- Panel de administración -->
    <div v-if="isAdmin" class="admin-panel">
      <v-navigation-drawer
        app
        v-model="drawer"
        :permanent="isDesktop"
        :temporary="!isDesktop"
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
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Panel de Administración</v-toolbar-title>
      </v-app-bar>

      <v-main :style="{ marginLeft: isDesktop ? '240px' : '0', marginTop: '64px' }">
        <v-container fluid>
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
const drawer = ref(false);
const currentView = ref('ProductManagement');

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

// Verifica si es una pantalla de escritorio o móvil
const isDesktop = computed(() => window.innerWidth >= 1024);

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
</script>

<style scoped>
/* Estilos para el panel de administración */
.admin-panel {
  display: flex;
  flex-direction: column;
}

.app-drawer {
  z-index: 100;
}

/* Estilos para el contenido del gestor */
.content-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 1023px) {
  .v-navigation-drawer {
    width: 100%;
    max-width: 300px;
  }

  .v-app-bar {
    background-color: #6200ea;
  }

  .v-app-bar-nav-icon {
    color: white;
  }

  .v-main {
    padding: 0 16px;
  }

  .v-container {
    padding: 16px;
  }
}

/* Ajustes para pantallas grandes */
@media (min-width: 1024px) {
  .v-navigation-drawer {
    position: fixed;
    width: 240px;
  }

  .v-app-bar {
    background-color: #6200ea;
  }

  .v-main {
    margin-left: 240px;
    transition: margin-left 0.3s ease;
  }
}
</style>
