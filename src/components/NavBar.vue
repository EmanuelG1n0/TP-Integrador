<template>
  <!-- Barra de navegación -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- Sección izquierda de la barra de navegación: Logo y ubicación -->
      <div class="navbar-left d-flex align-items-center">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <!-- Logo de la empresa -->
          <img src="/assets/logo.png" alt="Logo" style="height: 70px; margin-right: 10px;">
        </a>
      </div>

      <!-- Buscador centrado en la barra de navegación -->
      <form class="d-flex mx-auto" @submit.prevent="handleSearch">
        <input 
          class="form-control" 
          type="search" 
          placeholder="Buscar productos, Ofertas y más..." 
          aria-label="Buscar" 
          v-model="searchQuery"
        />
        <button class="btn btn-light" type="submit">
          <span class="material-icons">search</span>
        </button>
      </form>

      <!-- Sección derecha de la barra de navegación: Acciones e iconos -->
      <div class="navbar-actions d-flex ml-auto">
        <ul class="navbar-nav d-flex">
          <!-- Enlace a Ofertas -->
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="material-icons">local_offer</i> Ofertas</a>
          </li>
          <!-- Enlace a Crear cuenta -->
          <li class="nav-item">
            <router-link class="nav-link" to="/register">
              <i class="material-icons">person_add</i> Creá tu cuenta
            </router-link>
          </li>
          <!-- Enlace a Ingresar -->
          <li class="nav-item">
            <router-link class="nav-link" to="/login">
              <i class="material-icons">login</i> Ingresá
            </router-link>
          </li>
          <!-- Enlace al Carrito -->
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              <i class="material-icons">shopping_cart</i>
              <!-- Mostrar el número de artículos en el carrito si es mayor a 0 -->
              <span v-if="cartCount > 0" class="badge badge-pill badge-danger">{{ cartCount }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const cartCount = ref(0); // Contador de artículos en el carrito
    const searchQuery = ref(''); // Consulta de búsqueda

    onMounted(() => {
      // Obtener el carrito del localStorage y actualizar el contador
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cartCount.value = cart.length;
    });

    const handleSearch = () => {
      // Manejar la búsqueda (aquí solo se imprime en la consola)
      console.log('Buscando:', searchQuery.value);
    };

    return { cartCount, searchQuery, handleSearch };
  }
};
</script>

<style>
/* Estilo para alinear los elementos de la barra de navegación a la derecha */
.navbar-nav.ml-auto {
  margin-left: auto;
}
</style>