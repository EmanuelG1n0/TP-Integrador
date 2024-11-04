<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>E-Commerce</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text :to="'/'">Home</v-btn>
    <v-btn text :to="'/catalog'">Catalogo</v-btn>
    <v-btn text :to="'/cart'">Carrito</v-btn>
    <template v-if="!isAuthenticated">
      <v-btn text :to="'/login'">Ingresar</v-btn>
    </template>
    <template v-else>
      <v-btn text @click="logout">Logout</v-btn>
      <v-btn text disabled>Hola, {{ userName }}</v-btn>
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

const logout = () => {
  authStore.logout();
  router.push('/');
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>