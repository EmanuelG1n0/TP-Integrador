<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>E-Commerce</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text :to="'/'">Home</v-btn>
    <v-btn text :to="'/catalog'">Catalogo</v-btn>
    <v-btn text v-if="isAuthenticated" :to="'/cart'">Carrito</v-btn>
    <v-btn text v-if="isAuthenticated" :to="'/orders'">Órdenes</v-btn> <!-- Cambiado de 'Carrito' a 'Órdenes' -->
    <v-btn text v-if="!isAuthenticated" :to="'/login'">Ingresar</v-btn>
    <template v-else>
      <v-btn text v-if="isAdmin" :to="'/admin'">Admin</v-btn>
      <v-btn text @click="logout">Logout</v-btn>
      <v-btn text to="'/profile'" >Hola, {{ userName }}</v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const isAuthenticated = computed(() => authStore.isAuthenticated);
const userName = computed(() => authStore.userName);
const isAdmin = computed(() => authStore.userRoleId === 1); // Verificar si el usuario es admin

const logout = () => {
  authStore.logout();
  router.push('/');
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>