<template>
  <v-container>
    <v-card class="mx-auto" max-width="800">
      <v-card-title class="text-center">Acerca de Nuestra Aplicación de E-Commerce</v-card-title>
      <v-card-text>
        <p>
          Bienvenido a nuestra aplicación de E-Commerce, una plataforma completa y fácil de usar para todas tus necesidades de compras en línea. Nuestra aplicación está diseñada para ofrecer una experiencia de usuario excepcional, con una interfaz intuitiva y funcionalidades avanzadas.
        </p>
        <h3>Bondades de Usar Nuestra Aplicación</h3>
        <ul>
          <li><strong>Interfaz Intuitiva:</strong> Nuestra aplicación está diseñada con una interfaz de usuario limpia y fácil de navegar, lo que facilita la búsqueda y compra de productos.</li>
          <li><strong>Gestión de Productos:</strong> Los administradores pueden agregar, editar y eliminar productos fácilmente, manteniendo el catálogo siempre actualizado.</li>
          <li><strong>Gestión de Usuarios:</strong> Los administradores pueden gestionar usuarios, asignar roles y mantener la seguridad y organización de la plataforma.</li>
          <li><strong>Carrito de Compras:</strong> Los usuarios pueden agregar productos a su carrito, revisar sus selecciones y realizar pedidos de manera sencilla.</li>
          <li><strong>Historial de Órdenes:</strong> Los usuarios pueden ver el historial de sus órdenes, facilitando el seguimiento de sus compras.</li>
          <li><strong>Seguridad:</strong> Implementamos medidas de seguridad para proteger la información de los usuarios y garantizar transacciones seguras.</li>
          <li><strong>Rendimiento:</strong> Nuestra aplicación está optimizada para ofrecer un rendimiento rápido y eficiente, incluso con grandes volúmenes de datos.</li>
        </ul>
        <h3>Tecnologías Utilizadas</h3>
        <ul>
          <li><strong>Vue 3:</strong> Un framework progresivo de JavaScript para construir interfaces de usuario.</li>
          <li><strong>Vuetify:</strong> Un framework de componentes de Material Design para Vue.js.</li>
          <li><strong>Vite:</strong> Un build tool rápido y moderno para proyectos de Vue.js.</li>
          <li><strong>Pinia:</strong> Un store de estado para Vue.js, útil en aplicaciones donde diferentes componentes necesitan compartir datos y sincronizarse.</li>
          <li><strong>Axios:</strong> Una librería para hacer solicitudes HTTP, que te permite interactuar con APIs externas.</li>
        </ul>
        <h3>Contribuciones</h3>
        <p>
          Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:
        </p>
        <ol>
          <li>Haz un fork del proyecto.</li>
          <li>Crea una nueva rama (<code>git checkout -b feature/nueva-funcionalidad</code>).</li>
          <li>Realiza tus cambios y haz commit (<code>git commit -am 'Agrega nueva funcionalidad'</code>).</li>
          <li>Haz push a la rama (<code>git push origin feature/nueva-funcionalidad</code>).</li>
          <li>Abre un Pull Request.</li>
        </ol>
        <h3>Licencia</h3>
        <p>
          Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo <code>LICENSE</code> para obtener más información.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>

<style scoped>
 
</style>