<template>
    <div>
      <h2>Panel de Administración</h2>
      <b-tabs>
        <b-tab title="Productos">
          <!-- Gestión de productos -->
          <ProductManagement />
        </b-tab>
        <b-tab title="Usuarios">
          <!-- Gestión de usuarios -->
          <UserManagement />
        </b-tab>
        <!-- Puedes agregar más pestañas si es necesario -->
      </b-tabs>
    </div>
  </template>
  
  <script setup>
  import ProductManagement from '@/components/admin/ProductManagement.vue';
  import UserManagement from '@/components/admin/UserManagement.vue';
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>
  