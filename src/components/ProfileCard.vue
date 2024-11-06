<template>
  <v-card>
    <v-card-title>Actualizar Perfil</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="updateProfile">
        <v-text-field
          label="Nombre"
          v-model="user.name"
          required
        ></v-text-field>
        <v-text-field
          label="Apellido"
          v-model="user.lastname"
          required
        ></v-text-field>
        <v-text-field
          label="Email"
          v-model="user.mail"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          label="DNI"
          v-model="user.dni"
          required
        ></v-text-field>
        <v-text-field
          label="Fecha de Nacimiento"
          v-model="user.dateOfBirth"
          type="date"
          required
        ></v-text-field>
        <v-text-field
          label="Dirección"
          v-model="user.address"
          required
        ></v-text-field>
        <v-text-field
          label="Ciudad"
          v-model="user.city"
          required
        ></v-text-field>
        <v-text-field
          label="Estado"
          v-model="user.state"
          required
        ></v-text-field>
        <v-btn color="primary" type="submit">Actualizar Perfil</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
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