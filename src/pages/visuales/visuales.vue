
<script setup lang="ts">

import VerticalCarousel from '@/components/portfolio/verticalcarousel.vue'

// Proyectos de la categoría Visuales.
const projects = [
  {
    title: 'Proyecto de prueba',
    year: '2025',
    technique: 'Técnica mixta',
    image: '/images/proyecto-prueba.jpg'
  }
]

</script>

<template>

          <!-- Contenedor principal -->
  <main class="min-h-screen bg-black text-white">

      <!-- Barra de navegación -->
    <nav class="flex items-center justify-between px-8 py-6">

         <!-- Volver al inicio -->
      <a href="#/" class="text-sm hover:opacity-60 transition-opacity">
        ← Inicio
      </a>
    
            <!-- Nombre del portfolio -->
      <span class="text-sm tracking-widest">
        SOFÍA MARTÍN
      </span>

         <!-- Menú -->
      <button class="text-sm hover:opacity-60 transition-opacity">
        MENU
      </button>

       </nav>

    <!-- Contenido de Visuales -->
    <section class="px-8 py-10">

      <h1 class="text-2xl font-light tracking-widest">
        VISUALES
        <VerticalCarousel :projects="projects" />
      </h1>

        </section>

  </main>
</template>


<style scoped>

</style>