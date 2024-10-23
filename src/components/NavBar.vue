<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">E-Commerce</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/catalog">Catalog</b-nav-item>
      <b-nav-item to="/cart">Cart</b-nav-item>
      <b-nav-item v-if="!isAuthenticated" to="/login">Login</b-nav-item>
      <b-nav-item v-if="isAuthenticated" @click="logout">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const isAuthenticated = computed(() => authStore.isAuthenticated);

const logout = () => {
  authStore.logout();
  router.push('/');
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
