<template>
  <div class="container mt-5">
      <h2>Soporte y Atención al Cliente</h2>
      <form @submit.prevent="submitForm">
          <div class="mb-3">
              <label for="consulta" class="form-label">Ingresa tu consulta o problema:</label>
              <textarea id="consulta" class="form-control" v-model="consulta" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" :disabled="isLoading">
              <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Enviar Consulta
          </button>
      </form>
      <p v-if="confirmationMessage" class="mt-3">{{ confirmationMessage }}</p>
      <button @click="startLiveChat" class="btn btn-success mt-3">Iniciar Chat en Vivo</button>
  </div>
</template>


<script>import axios from 'axios';

export default {
  data() {
    return {
        consulta: '', // Para almacenar la consulta del usuario
        confirmationMessage: '', // Para mostrar el mensaje de confirmación
        isLoading: false // Para manejar el estado de carga
    };
},
methods: {
    submitForm() {
        // Verificar que la consulta no esté vacía
        if (!this.consulta.trim()) {
            alert('Por favor, ingrese una consulta o problema.');
            return;
        }

        // Iniciar la carga
        this.isLoading = true;
        this.confirmationMessage = ''; // Limpiar el mensaje anterior

        // Enviar la consulta al servidor
        axios.post('/api/support', { consulta: this.consulta })
            .then(response => {
                // Aquí puedes manejar la respuesta del servidor
                if (response.status === 200) {
                    this.confirmationMessage = 'Su consulta ha sido recibida.';
                    this.consulta = ''; // Limpiar el formulario
                } else {
                    this.confirmationMessage = 'Ocurrió un error al enviar su consulta. Inténtelo de nuevo más tarde.';
                }
            })
            .catch(error => {
                // Manejar errores de la solicitud
                console.error('Error al enviar la consulta:', error);
                this.confirmationMessage = 'Ocurrió un error al enviar su consulta. Inténtelo de nuevo más tarde.';
            })
            .finally(() => {
                // Detener la carga independientemente del resultado
                this.isLoading = false;
            });
    },
    startLiveChat() {
      const phoneNumber = '+5401151805133';
      const message = encodeURIComponent('Hola, tengo un problema!!');
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      console.log('WhatsApp URL:', whatsappUrl); // Verificar la URL en la consola.

      // Abrir la URL en una nueva pestaña
      window.open(whatsappUrl, '_blank');
    }

  }
};

</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>