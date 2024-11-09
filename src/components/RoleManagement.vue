<template>
  <div>
    <h3>Gestión de Roles</h3>
    <v-btn color="primary" @click="openAddRoleDialog">Agregar Rol</v-btn>

    <!-- Tabla de roles -->
    <v-data-table
      :headers="headers"
      :items="roles"
      class="elevation-1"
      item-value="id"
      :items-per-page="5"
      :mobile-breakpoint="600"
    >
      <template #item.createdAt="{ item }">
        {{ new Date(item.createdAt).toLocaleString() }}
      </template>
      <template #item.updatedAt="{ item }">
        {{ new Date(item.updatedAt).toLocaleString() }}
      </template>
      <template #item.actions="{ item }">
        <!-- Botón de Editar -->
        <v-btn small color="primary" @click="openEditRoleDialog(item)">Editar</v-btn>

        <!-- Botón de Eliminar -->
        <v-btn small color="red" @click="deleteRoleHandler(item.id)">Eliminar</v-btn>
      </template>
    </v-data-table>

    <!-- Diálogo de agregar/editar rol -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ isEditing ? 'Editar Rol' : 'Agregar Rol' }}</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field v-model="editedRole.id" label="ID del Rol" :disabled="isEditing" required></v-text-field>
            <v-text-field v-model="editedRole.name" label="Nombre del Rol" required></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="saveRole">{{ isEditing ? 'Guardar' : 'Agregar' }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const roles = ref([]);
const dialog = ref(false);
const isEditing = ref(false);
const editedRole = ref({ id: '', name: '' });
const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Nombre', value: 'name' },
  { text: 'Creado', value: 'createdAt' },
  { text: 'Actualizado', value: 'updatedAt' },
  { text: 'Acciones', value: 'actions', sortable: false },
];

const fetchRoles = async () => {
  try {
    const response = await axios.get('http://localhost:8001/app/roles');
    roles.value = response.data.message;
  } catch (error) {
    console.error('Error al obtener los roles:', error);
    alert('Error al obtener los roles.');
  }
};

const openAddRoleDialog = () => {
  isEditing.value = false;
  editedRole.value = { id: '', name: '' };
  dialog.value = true;
};

const openEditRoleDialog = (role) => {
  isEditing.value = true;
  editedRole.value = { ...role };
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};

const saveRole = async () => {
  try {
    if (isEditing.value) {
      await axios.put(`http://localhost:8001/app/roles/${editedRole.value.id}`, editedRole.value);
      const index = roles.value.findIndex(role => role.id === editedRole.value.id);
      if (index !== -1) {
        roles.value[index] = { ...editedRole.value };
      }
    } else {
      const response = await axios.post('http://localhost:8001/app/roles', editedRole.value);
      roles.value.push(response.data.message);
    }
    closeDialog();
    alert(isEditing.value ? 'Rol actualizado con éxito.' : 'Rol agregado con éxito.');
  } catch (error) {
    console.error('Error al guardar el rol:', error);
    alert('Error al guardar el rol.');
  }
};

const deleteRoleHandler = async (roleId) => {
  if (confirm('¿Estás seguro de eliminar este rol?')) {
    try {
      await axios.delete(`http://localhost:8001/app/roles/${roleId}`);
      roles.value = roles.value.filter(role => role.id !== roleId);
      alert('Rol eliminado con éxito.');
    } catch (error) {
      console.error('Error al eliminar el rol:', error);
      alert('Error al eliminar el rol.');
    }
  }
};

onMounted(fetchRoles);
</script>

<style scoped>
/* Ajustes para hacer la tabla responsiva */
.v-data-table {
  overflow-x: auto;
}

@media (max-width: 600px) {
  .v-data-table {
    font-size: 0.9rem;
  }

  .v-btn {
    font-size: 0.8rem;
    padding: 8px 12px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
}

@media (max-width: 400px) {
  /* Reducir aún más en pantallas muy pequeñas */
  h3 {
    font-size: 1.2rem;
  }

  .v-btn {
    font-size: 0.75rem;
  }

  .v-text-field, .v-textarea {
    font-size: 0.85rem;
  }
}
</style>
