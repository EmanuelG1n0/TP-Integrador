<template>
  <b-footer class="text-center">
    <div>
      <p>&copy; {{ new Date().getFullYear() }} E-Commerce App. Todos los derechos reservados.</p>
      <router-link to="/about" class="about-link">About</router-link>
    </div>
  </b-footer>
</template>

<script setup>
</script>

<style scoped>
b-footer {
  background-color: #f8f9fa;
  padding: 1rem;
}

.about-link {
  margin-top: 10px;         
  text-decoration: none;     
  color: #070707;         
  font-weight: bold;        
}

.about-link:hover {
  text-decoration: underline; 
}
</style>
