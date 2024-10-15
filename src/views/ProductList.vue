<template>
    <div>
      <h1>Catalogo</h1>
      <div :class="['product-grid', { 'justify-center': isLastPage && paginatedProducts.length < productsPerPage }]">
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ProductCard from '../components/ProductCard.vue';
  
  export default {
    components: { ProductCard },
    data() {
      return {
        products: [],
        currentPage: 1,
        productsPerPage: 7
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.products.length / this.productsPerPage);
      },
      paginatedProducts() {
        const start = (this.currentPage - 1) * this.productsPerPage;
        const end = start + this.productsPerPage;
        return this.products.slice(start, end);
      },
      isLastPage() {
        return this.currentPage === this.totalPages;
      }
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          this.products = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
    },
    mounted() {
      this.fetchProducts();
    }
  };
  </script>
  
  <style scoped>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Ajuste automático */
    gap: 20px;
  }
  
  .product-grid.justify-center {
    justify-content: center;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .pagination button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    margin: 0 10px;
  }
  
  .pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .pagination span {
    font-size: 1em;
  }
  </style>
    