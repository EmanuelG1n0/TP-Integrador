<template>
  <v-container fluid class="about-container">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="about-card">
          <v-card-title class="text-center title">Acerca de Nuestra Aplicación de E-Commerce</v-card-title>
          <v-card-text>
            <p class="intro-text">
              Bienvenido a nuestra aplicación de E-Commerce, una plataforma completa y fácil de usar para todas tus necesidades de compras en línea. Nuestra aplicación está diseñada para ofrecer una experiencia de usuario excepcional, con una interfaz intuitiva y funcionalidades avanzadas.
            </p>

            <v-divider class="my-4"></v-divider>

            <h3 class="section-title">Bondades de Usar Nuestra Aplicación</h3>
            <v-container>
              <v-row>
                <v-col
                  v-for="(item, index) in bondades"
                  :key="index"
                  cols="12"
                  md="6"
                  lg="4"
                  class="feature-item"
                >
                  <v-card class="feature-card" outlined>
                    <v-card-text>
                      <strong>{{ item.title }}</strong>
                      <p>{{ item.description }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <v-divider class="my-4"></v-divider>

            <h3 class="section-title">Tecnologías Utilizadas</h3>
            <v-container class="technologies-container">
              <v-row>
                <v-col cols="12">
                  <ul>
                    <li><strong>Vue 3:</strong> Un framework progresivo de JavaScript para construir interfaces de usuario.</li>
                    <li><strong>Vuetify:</strong> Un framework de componentes de Material Design para Vue.js.</li>
                    <li><strong>Vite:</strong> Un build tool rápido y moderno para proyectos de Vue.js.</li>
                    <li><strong>Pinia:</strong> Un store de estado para Vue.js.</li>
                    <li><strong>Axios:</strong> Una librería para hacer solicitudes HTTP.</li>
                  </ul>
                </v-col>
              </v-row>
            </v-container>

            <v-divider class="my-4"></v-divider>

            <h3 class="section-title">Contribuciones</h3>
            <p>
              Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:
            </p>
            <v-container class="contributions-container">
              <v-row>
                <v-col cols="12">
                  <ol>
                    <li>Haz un fork del proyecto.</li>
                    <li>Crea una nueva rama (<code>git checkout -b feature/nueva-funcionalidad</code>).</li>
                    <li>Realiza tus cambios y haz commit (<code>git commit -am 'Agrega nueva funcionalidad'</code>).</li>
                    <li>Haz push a la rama (<code>git push origin feature/nueva-funcionalidad</code>).</li>
                    <li>Abre un Pull Request.</li>
                  </ol>
                </v-col>
              </v-row>
            </v-container>

            <v-divider class="my-4"></v-divider>

            <h3 class="section-title">Licencia</h3>
            <p>
              Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo <code>LICENSE</code> para obtener más información.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      bondades: [
        { title: 'Interfaz Intuitiva', description: 'Nuestra aplicación está diseñada con una interfaz de usuario limpia y fácil de navegar, lo que facilita la búsqueda y compra de productos.' },
        { title: 'Gestión de Productos', description: 'Los administradores pueden agregar, editar y eliminar productos fácilmente, manteniendo el catálogo siempre actualizado.' },
        { title: 'Gestión de Usuarios', description: 'Los administradores pueden gestionar usuarios, asignar roles y mantener la seguridad y organización de la plataforma.' },
        { title: 'Carrito de Compras', description: 'Los usuarios pueden agregar productos a su carrito, revisar sus selecciones y realizar pedidos de manera sencilla.' },
        { title: 'Historial de Órdenes', description: 'Los usuarios pueden ver el historial de sus órdenes, facilitando el seguimiento de sus compras.' },
        { title: 'Seguridad', description: 'Implementamos medidas de seguridad para proteger la información de los usuarios y garantizar transacciones seguras.' },
        { title: 'Rendimiento', description: 'Nuestra aplicación está optimizada para ofrecer un rendimiento rápido y eficiente, incluso con grandes volúmenes de datos.' }
      ]
    };
  }
};
</script>

<style scoped>
.about-container {
  background-color: #f5f5f5;
  padding: 20px;
}

.about-card {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.intro-text {
  font-size: 1rem;
  line-height: 1.6;
}

.section-title {
  font-size: 1.4rem;
  color: #1976d2;
  margin-top: 1.5rem;
}

.feature-item {
  margin-bottom: 1.5rem;
}

.feature-card {
  padding: 15px;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-card strong {
  font-size: 1.1rem;
  color: #333;
}

.feature-card p {
  font-size: 1rem;
  color: #555;
}

@media (max-width: 600px) {
  .title {
    font-size: 1.4rem;
  }

  .intro-text {
    font-size: 0.9rem;
  }

  .feature-card {
    padding: 12px;
  }

  .section-title {
    font-size: 1.2rem;
  }
}
</style>
