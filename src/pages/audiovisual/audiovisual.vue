<script setup lang="ts">
import verticalCarousel from '@/components/portfolio/verticalcarousel.vue'

// Proyectos audiovisuales
const projects = [
  {
    title: 'Yo, según ellos',
    year: '—',
    technique: 'Stop motion',
    image: '/imagines/audiovisual/yo-segun-ellos.jpg'
  }
]

// Experiencia audiovisual
const experience = [
  {
    place: 'Fotoeventi Lanzarote',
    role: 'Fotografía turística',
    date: 'Junio 2026 — Septiembre 2026',
    description: 'Sesiones fotográficas, gestión de equipo y atención al cliente.'
  },
 {
    place: 'Poliwood UPV',
    role: 'Producción audiovisual y apoyo técnico',
    date: 'Octubre 2025 — Actualidad',
    description: 'Cobertura de eventos, captación de audio y coordinación de producción audiovisual.'
  },
  {
    place: 'Proyectos académicos',
    role: 'Universitat Politècnica de València',
    date: 'Abril — Mayo 2026',
    description: 'Grabación, montaje técnico, iluminación y postproducción de audio.'
  }
]

</script>

<template>
   <main class="min-h-screen bg-black text-white">

      <!-- Navegación superior -->
    <nav class="flex items-center justify-between px-8 py-6 border-b border-white/15">
      <a href="#/" class="text-xs tracking-widest hover:opacity-60 transition-opacity">
        SOFÍA MARTÍN
      </a>

         <div class="flex items-center gap-8 text-xs tracking-widest">
        <a href="#/" class="hover:opacity-60 transition-opacity">INICIO</a>
        <span class="border-b border-white pb-1">PROYECTOS</span>
        <span class="hover:opacity-60 transition-opacity cursor-pointer">SOBRE MÍ</span>
      </div>
    </nav>

       <!-- Presentación -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 md:px-12 py-16">

      <div class="flex flex-col justify-center">
        <h1 class="text-4xl md:text-6xl font-extralight tracking-widest">
          AUDIOVISUAL
        </h1>

        <p class="mt-5 text-xs tracking-[0.25em] text-white/50">
          FOTOGRAFÍA · VÍDEO · PRODUCCIÓN · SONIDO
        </p>
      </div>

      <div class="border-l border-white/30 pl-8 flex flex-col justify-center">
        <h2 class="text-sm tracking-widest mb-5">
          EXPERIENCIA Y PRÁCTICA AUDIOVISUAL
        </h2>
        <p class="text-sm leading-7 text-white/65">
          Mi experiencia en el ámbito audiovisual combina la fotografía,
          la grabación y el apoyo técnico en producciones y eventos.
          He trabajado en sesiones fotográficas en entornos turísticos
          y participado en proyectos de producción audiovisual,
          desarrollando competencias en captación de imagen y sonido,
          montaje técnico, iluminación y postproducción de audio.
        </p>
      </div>
    </section>
  <div class="mx-8 md:mx-12 border-t border-white/20"></div>

  <!-- Experiencia y proyectos -->
    <section class="grid grid-cols-1 lg:grid-cols-[0.8fr_2fr] gap-12 px-8 md:px-12 py-12">

      <!-- Experiencia -->
      <div>
        <h2 class="text-xs tracking-[0.3em] mb-10">
          EXPERIENCIA
        </h2>

          <div
          v-for="(item, index) in experience"
          :key="item.place"
          class="pb-7 mb-7 border-b border-white/20"
        >
          <h3 class="text-lg font-light">
            {{ item.place }}
          </h3>

          <p class="text-[10px] tracking-widest text-white/50 mt-2">
            {{ item.role }}
          </p>

          <p class="text-[10px] tracking-widest text-white/40 mt-2">
            {{ item.date }}
          </p>

          <p class="text-sm leading-6 text-white/65 mt-4">
            {{ item.description }}
          </p>
        </div>
      </div>

 <!-- Carrusel de proyectos -->
      <div>
        <h2 class="text-xs tracking-[0.3em] mb-8">
          PROYECTOS SELECCIONADOS
        </h2>

        <VerticalCarousel :projects="projects" />
      </div>

    </section>
   </main>
</template>
