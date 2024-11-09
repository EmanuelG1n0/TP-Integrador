<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>E-Commerce</v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- Botón de Menú solo en dispositivos móviles -->
    <v-btn v-if="isMobile" icon @click="toggleDrawer">
      <v-icon >mdi-menu</v-icon>
    </v-btn>

    <!-- Botones de navegación para pantallas grandes -->
    <v-btn v-if="!isMobile" text :to="'/'" class="mx-3">Home</v-btn>
    <v-btn v-if="!isMobile" text :to="'/catalog'" class="mx-3">Catálogo</v-btn>
    <v-btn v-if="isAuthenticated && !isMobile" text :to="'/cart'" class="mx-3">Carrito</v-btn>
    <v-btn v-if="isAuthenticated && !isMobile" text :to="'/orders'" class="mx-3">Órdenes</v-btn>
    <v-btn v-if="!isAuthenticated && !isMobile" text :to="'/login'" class="mx-3">Ingresar</v-btn>

    <!-- Enlace a "Sobre Nosotros" -->
    <v-btn v-if="!isMobile" text :to="'/about'" class="mx-3">Sobre Nosotros</v-btn>

    <template v-if="isAuthenticated && !isMobile">
      <v-btn text v-if="isAdmin" :to="'/admin'" class="mx-3">Admin</v-btn>
      <v-btn text @click="logout" class="mx-3">Logout</v-btn>
      <v-btn text :to="'/profile'" class="mx-3">Hola, {{ userName }}</v-btn>
    </template>
  </v-app-bar>

  <!-- Menú lateral (Drawer) solo en dispositivos móviles, desde la derecha -->
  <v-navigation-drawer v-model="drawer" temporary right app>
    <v-list>
      <v-list-item :to="'/'">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item :to="'/catalog'">
        <v-list-item-title>Catálogo</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isAuthenticated" :to="'/cart'">
        <v-list-item-title>Carrito</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isAuthenticated" :to="'/orders'">
        <v-list-item-title>Órdenes</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="!isAuthenticated" :to="'/login'">
        <v-list-item-title>Ingresar</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isAdmin" :to="'/admin'">
        <v-list-item-title>Admin</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isAuthenticated" @click="logout">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isAuthenticated" :to="'/profile'">
        <v-list-item-title>Hola, {{ userName }}</v-list-item-title>
      </v-list-item>
      <!-- Agregar "Sobre Nosotros" en el menú lateral -->
      <v-list-item :to="'/about'">
        <v-list-item-title>Sobre Nosotros</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';

const authStore = useAuthStore();
const router = useRouter();
const isAuthenticated = computed(() => authStore.isAuthenticated);
const userName = computed(() => authStore.userName);
const isAdmin = computed(() => authStore.isAdminGetter);
const display = useDisplay();

const isMobile = computed(() => display.smAndDown); // Detectar si la pantalla es pequeña (móvil)

const drawer = ref(false); // Estado del menú lateral

const toggleDrawer = () => {
  drawer.value = !drawer.value; // Alternar el estado del drawer
};

onMounted(() => {
  if (authStore.isAuthenticated) {
    // No es necesario llamar a checkAdmin aquí porque ya se maneja en el store
  }
});

const logout = () => {
  authStore.logout();
  router.push('/');
};
</script>

<style scoped>
.mx-3 {
  padding: 20px;
  margin-left: 16px;
  margin-right: 16px;
}

/* Opcional: Ajustar el espaciado entre los botones en pantallas más grandes */
@media (max-width: 600px) {
  .mx-3 {
    margin-left: 8px;
    margin-right: 8px;
  }
}
</style>
