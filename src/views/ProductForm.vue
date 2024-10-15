<template>
    <div class="form-container">
      <h1>Agregar Producto</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input v-model="product.title" id="nombre" placeholder="Nombre" required />
        </div>
  
        <div class="form-group">
          <label for="precio">Precio</label>
          <input v-model="product.price" id="precio" type="number" placeholder="Precio" required />
        </div>
  
        <div class="form-group">
          <label for="categoria">Categoría</label>
          <input v-model="product.category" id="categoria" placeholder="Categoría" required />
        </div>
  
        <div class="form-group">
          <label for="descripcion">Descripción</label>
          <textarea v-model="product.description" id="descripcion" placeholder="Descripción" required></textarea>
        </div>
  
        <button type="submit" class="btn">Agregar Producto</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        product: {
          title: '',
          price: '',
          category: '',
          description: ''
        }
      };
    },
    methods: {
      async submitForm() {
        await axios.post('https://fakestoreapi.com/products', this.product);
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, textarea {
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
  }
  
  .btn:hover {
    background-color: #45a049;
  }
  
  </style>
  