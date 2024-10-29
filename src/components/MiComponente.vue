<template>
    <div>
      <!-- Aquí puedes mostrar los datos obtenidos de la API -->
      <p v-if="data">{{ data.message }}</p>
      <p v-else>Cargando datos...</p>
    </div>
  </template>
  
  <script>
  import { getProducts } from '../services/ProductService'; // Importa la función que obtiene los datos de la API
  
  export default {
    name: 'MiComponente',
    data() {
      return {
        data: null,
      };
    },
    async created() {
        console.log('Productos Obtenidos:', this.data);// Llama a la API cuando el componente se haya creado
      this.data = await getData();
    },
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos del componente */
  </style>
  