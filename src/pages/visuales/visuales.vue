<script setup lang="ts">

import VerticalCarousel from '@/components/portfolio/verticalcarousel.vue'
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'


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
  <main class="min-h-screen bg-black text-white px-7 md:px-12 py-6">
   
    <!-- Menú principal -->
    <PortfolioNav />

     <!-- Contenido de Visuales -->
    <section class="py-10">

<h1 class="text-4xl md:text-6xl font-extralight tracking-widest">
        VISUALES
      </h1>

      <!-- Carrusel de proyectos -->
      <div class="mt-12">
        <VerticalCarousel :projects="projects" />
      </div>

    </section>

  </main>
</template>

<style scoped>

</style>