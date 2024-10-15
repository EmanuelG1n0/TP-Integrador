<template>
    <div class="about">
      <AboutContent />
    </div>
  </template>
  
  <script>
  import AboutContent from '../components/AboutContent.vue';
  
  export default {
    name: 'About',
    components: {
      AboutContent,
    },
  };
  </script>
  
  <style scoped>
  .about {
    background-color: #f9f9f9;
    padding: 20px;
  }
  </style>
  