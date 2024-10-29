<template>
    <div>
      <!-- Aquí puedes mostrar los datos obtenidos de la API -->
      <p v-if="data">{{ data.message }}</p>
      <p v-else>Cargando datos...</p>
    </div>
  </template>
  
  <script>
  import { getData } from '../services/api';
  
  export default {
    name: 'MiComponente',
    data() {
      return {
        data: null,
      };
    },
    async created() {
        console.log('Datos obtenidos:', this.data);// Llama a la API cuando el componente se haya creado
      this.data = await getData();
    },
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos del componente */
  </style>
  