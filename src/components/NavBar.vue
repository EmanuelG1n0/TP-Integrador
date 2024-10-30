<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" class="navbar-custom">
    <b-navbar-brand href="#">E-Commerce</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/catalog">Catalog</b-nav-item>
        <b-nav-item to="/cart">Cart</b-nav-item>
        <b-nav-item v-if="!isAuthenticated" to="/login">Login</b-nav-item>
        <b-nav-item v-if="isAuthenticated" @click="logout">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
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
.navbar-custom {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.b-navbar-brand {
  font-size: 1.5rem; 
  font-weight: bold; 
}

.b-nav-item {
  transition: color 0.3s ease; 
}

.b-nav-item:hover {
  color: #ffc107; 
}

@media (max-width: 768px) {
  .b-navbar-nav {
    text-align: center; 
  }
}
</style>
