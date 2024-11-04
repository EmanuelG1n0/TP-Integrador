<template>
    <b-card>
      <b-form @submit.prevent="updateProfile">
        <b-form-group label="Nombre">
          <b-form-input v-model="user.name" required></b-form-input>
        </b-form-group>
        <b-form-group label="Apellido">
          <b-form-input v-model="user.lastname" required></b-form-input>
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input v-model="user.mail" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group label="DNI">
          <b-form-input v-model="user.dni" required></b-form-input>
        </b-form-group>
        <b-form-group label="Fecha de Nacimiento">
          <b-form-input v-model="user.dateOfBirth" type="date" required></b-form-input>
        </b-form-group>
        <b-form-group label="Dirección">
          <b-form-input v-model="user.address" required></b-form-input>
        </b-form-group>
        <b-form-group label="Ciudad">
          <b-form-input v-model="user.city" required></b-form-input>
        </b-form-group>
        <b-form-group label="Estado">
          <b-form-input v-model="user.state" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Actualizar Perfil</b-button>
      </b-form>
    </b-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/store/auth';
  import axios from 'axios';
  
  const props = defineProps({
    user: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits(['update']);
  
  const authStore = useAuthStore();
  
  const updateProfile = async () => {
    try {
      const payload = {
        name: props.user.name,
        lastname: props.user.lastname,
        mail: props.user.mail,
        dni: props.user.dni,
        pass: props.user.pass,
        dateOfBirth: props.user.dateOfBirth,
        address: props.user.address,
        city: props.user.city,
        state: props.user.state,
        RoleId: props.user.RoleId
      };
      const response = await axios.put(`http://localhost:8001/app/users/${props.user.id}`, payload);
      authStore.setUser(response.data);
      alert('Perfil actualizado con éxito.');
      emit('update', response.data);
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      alert('Error al actualizar el perfil.');
    }
  };
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>