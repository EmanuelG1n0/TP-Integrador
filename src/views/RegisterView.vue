<template>
  <div>
    <h2>Registro de Usuario</h2>
    <b-form @submit.prevent="submitRegister">
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
      <b-form-group label="Contraseña">
        <b-form-input v-model="user.pass" type="password" required></b-form-input>
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
      <b-button type="submit" variant="primary">Registrar</b-button>
    </b-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();


const user = ref({
  name: '',
  lastname: '',
  mail: '',
  dni: '',
  pass: '',
  dateOfBirth: '',
  address: '',
  city: '',
  state: '',
  RoleId: 2
});

const submitRegister = async () => {
  try {
    const response = await axios.post('http://localhost:8001/app/users/', user.value);
    alert('Registro exitoso');
    console.log(response.data);
    router.push('/login'); 
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    alert('Error al registrar el usuario.');
  }
};
</script>

<style scoped>


</style>