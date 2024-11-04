// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:8001/app/products';

export async function getProducts() {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Ajusta según la estructura de tu respuesta
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function getProduct(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Ajusta según la estructura de tu respuesta
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

export async function createProduct(product) {
  try {
    const response = await axios.post(API_URL, product);
    return response.data; // Ajusta según la estructura de tu respuesta
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

export async function updateProduct(id, product) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data; // Ajusta según la estructura de tu respuesta
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

export async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data; // Ajusta según la estructura de tu respuesta
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}