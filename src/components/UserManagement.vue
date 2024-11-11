<template>
    <div>
      <h3>Gestión de Usuarios</h3>
      <v-btn color="primary" @click="openAddUserDialog">Agregar usuario</v-btn>
      <v-data-table
        :headers="headers"
        :items="users"
        class="elevation-1"
      >
        <template #item.actions="{ item }">
          <v-btn small @click="editUser(item)">Editar</v-btn>
          <v-btn small color="red" @click="deleteUserHandler(item.id)">Eliminar</v-btn>
        </template>
      </v-data-table>
  
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ isEditing ? 'Editar Usuario' : 'Agregar Usuario' }}</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field v-model="editedUser.name" label="Nombre" required></v-text-field>
              <v-text-field v-model="editedUser.lastname" label="Apellido" required></v-text-field>
              <v-text-field v-model="editedUser.mail" label="Correo Electrónico" required></v-text-field>
              <v-text-field v-model="editedUser.dni" label="DNI" required></v-text-field>
              <v-text-field v-model="editedUser.pass" label="Contraseña" type="password" required></v-text-field>
              <v-text-field v-model="editedUser.dateOfBirth" label="Fecha de Nacimiento" type="date" required></v-text-field>
              <v-text-field v-model="editedUser.address" label="Dirección" required></v-text-field>
              <v-text-field v-model="editedUser.city" label="Ciudad" required></v-text-field>
              <v-text-field v-model="editedUser.state" label="Estado" required></v-text-field>
              <v-select v-model="editedUser.RoleId" :items="roles" label="Rol" required></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text class="boton" @click="closeDialog">Cancelar</v-btn>
            <v-btn color="blue darken-1" text class="boton" @click="saveUser">{{ isEditing ? 'Guardar' : 'Agregar' }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const users = ref([]);
  const dialog = ref(false);
  const isEditing = ref(false);
  const editedUser = ref({
    name: '',
    lastname: '',
    mail: '',
    dni: '',
    pass: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    RoleId: null,
  });
  const roles = [
    { text: 'Admin', value: 1 },
    { text: 'User', value: 2 },
  ];
  const headers = [
    { text: 'ID', value: 'id' },
    { text: 'Nombre', value: 'name' },
    { text: 'Apellido', value: 'lastname' },
    { text: 'Correo Electrónico', value: 'mail' },
    { text: 'DNI', value: 'dni' },
    { text: 'Fecha de Nacimiento', value: 'dateOfBirth' },
    { text: 'Dirección', value: 'address' },
    { text: 'Ciudad', value: 'city' },
    { text: 'Estado', value: 'state' },
    { text: 'Acciones', value: 'actions', sortable: false },
  ];
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8001/app/users/');
      users.value = response.data.message;
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error al obtener los usuarios.');
    }
  };
  
  const openAddUserDialog = () => {
    isEditing.value = false;
    editedUser.value = {
      name: '',
      lastname: '',
      mail: '',
      dni: '',
      pass: '',
      dateOfBirth: '',
      address: '',
      city: '',
      state: '',
      RoleId: null,
    };
    dialog.value = true;
  };
  
  const closeDialog = () => {
    dialog.value = false;
  };
  
  const saveUser = async () => {
    try {
      if (isEditing.value) {
        await axios.put(`http://localhost:8001/app/users/${editedUser.value.id}`, editedUser.value);
        const index = users.value.findIndex(user => user.id === editedUser.value.id);
        if (index !== -1) {
          users.value[index] = { ...editedUser.value };
        }
      } else {
        const response = await axios.post('http://localhost:8001/app/users', editedUser.value);
        users.value.push(response.data.message);
      }
      closeDialog();
      alert(isEditing.value ? 'Usuario actualizado con éxito.' : 'Usuario agregado con éxito.');
    } catch (error) {
      console.error('Error saving user:', error);
      alert('Error al guardar el usuario.');
    }
  };
  
  const editUser = (user) => {
    isEditing.value = true;
    editedUser.value = { ...user };
    dialog.value = true;
  };
  
  const deleteUserHandler = async (userId) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      try {
        await axios.delete(`http://localhost:8001/app/users/${userId}`);
        users.value = users.value.filter(user => user.id !== userId);
        alert('Usuario eliminado con éxito.');
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Error al eliminar el usuario.');
      }
    }
  };
  
  onMounted(fetchUsers);
  </script>
  
  <style scoped>
.boton{
  color: white !important; 
  font-weight: bold; 
}  
</style>
