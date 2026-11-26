<script setup lang="ts">
import HorizontalCarousel from '@/components/portfolio/horizontalcarousel.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('escultura')

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-30% 0px -60% 0px'
    }
  )

  document.querySelectorAll('#escultura, #escenografia').forEach((section) => {
    observer?.observe(section)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

const sculptureProjects = [
  {
    title: 'Busto figurativo I',
    technique: 'Modelado en barro · Estructura de madera',
    description:
      'Ejercicio de mímesis a partir de un modelo de escayola. El trabajo comenzó con la construcción de una estructura interna de madera, reforzada con alambre galvanizado y malla metálica, sobre la que se desarrolló el modelado en barro.',
    images: [
      '/imagines/escultura/busto-figurativo-01.jpg',
      '/imagines/escultura/busto-figurativo-02.jpg',
      '/imagines/escultura/busto-figurativo-03.jpg',
      '/imagines/escultura/busto-figurativo-04.jpg'
      ]
  },
 {
    title: 'Busto de Góngora',
    technique: 'Modelado en barro · Figura parcial',
    description:
      'Interpretación escultórica de Góngora a partir de un modelo de escayola, trabajando únicamente una mitad del rostro.',
    images: [
      '/imagines/escultura/gongora-01.jpg',
      '/imagines/escultura/gongora-02.jpg',
      '/imagines/escultura/gongora-03.jpg'
    ]
  },
  {
     title: 'Construcción modular',
    technique: 'Escayola · Silicona · Moldeado y ensamblaje',
    description:
      'Investigación sobre las posibilidades de un módulo geométrico mediante su reproducción, transformación y combinación. El proceso incluyó la elaboración de un molde de silicona y distintas propuestas finales: arquitectónica, escultórica e instalativa.',
    images: [
      '/imagines/escultura/modular-01.jpg',
      '/imagines/escultura/modular-02.jpg',
      '/imagines/escultura/modular-03.jpg'
    ]
  },
  {
  title: 'Primera propuesta metálica',
    technique: 'Acero galvanizado · Corte y ensamblaje',
    description:
      'Construcción de una pieza a partir de volúmenes rectangulares que se intersectan y escalan entre sí. El proceso partió de una maqueta de cartón y continuó con el trazado, corte, doblado y ensamblaje de planchas metálicas.',
    images: [
      '/imagines/escultura/metal-01.jpg',
      '/imagines/escultura/metal-02.jpg',
      '/imagines/escultura/metal-03.jpg'
    ]
  },
  {
    title: 'Segunda propuesta metálica',
    technique: 'Metal · Corte, transformación y ensamblaje',
    description:
      'Segunda exploración de las posibilidades constructivas del metal mediante la transformación y unión de planchas para desarrollar una propuesta tridimensional.',
    images: [
      '/imagines/escultura/metal-segunda-01.jpg',
      '/imagines/escultura/metal-segunda-02.jpg',
      '/imagines/escultura/metal-segunda-03.jpg'
    ]
  },
  {
    title: 'Tecnología y adicción',
    technique: 'Resinas · Pigmentos · Componentes electrónicos',
    description:
      'Serie experimental que explora la relación entre tecnología, dependencia y desgaste. La incorporación de componentes electrónicos y elementos relacionados con el consumo tecnológico en las piezas de resina permite trabajar con la transparencia, el color y la plasticidad del material.',
    images: [
      '/imagines/escultura/resinas-01.jpg',
      '/imagines/escultura/resinas-02.jpg',
      '/imagines/escultura/resinas-03.jpg'
    ]
  }
]

const scenographyProjects = [
  {
    title: 'Donde todo se cierra',
    year: '2025',
    technique: 'Diseño escenográfico y modelado 3D en Blender',
    format: 'Render digital / maqueta virtual',
    description:
      'Propuesta escenográfica para Yerma, de Federico García Lorca, que explora la presión social, el condicionamiento del entorno y los conflictos internos de la protagonista. Las sillas articulan el espacio como representación del juicio colectivo, mientras que la repetición de formas circulares y las distintas escalas acompañan la evolución emocional de Yerma hasta el colapso final.',
    images: [
      '/imagines/escultura/escenografia/yerma-01.jpg',
      '/imagines/escultura/escenografia/yerma-02.jpg',
      '/imagines/escultura/escenografia/yerma-03.jpg'
    ]
  }
]
</script>


<template>
 <main class="min-h-screen bg-black text-white px-8 md:px-12 py-12">

    <!-- Cabecera -->
    <header class="mb-12">
      <p class="text-[10px] tracking-[0.3em] text-white/40 mb-4">
        PORTFOLIO / 02
      </p>

      <h1 class="text-3xl md:text-5xl font-light tracking-wide">
        ESCULTURA
      </h1>

  <p class="max-w-2xl text-sm leading-7 text-white/60 mt-6">
        Una exploración de la construcción tridimensional a través de
        distintos materiales, técnicas y procesos. Desde la experimentación
        con la materia hasta el diseño y la construcción digital del espacio.
      </p>
    </header>

       <!-- Menú de navegación -->
    <nav class="sticky top-0 z-20 bg-black/90 backdrop-blur-md
                border-y border-white/20 py-5 mb-16">

      <div class="flex items-center gap-8 text-xs tracking-[0.2em]">

        <button
        type="button"
        @click="scrollToSection('escultura')"
        :class="activeSection === 'escultura'
            ? 'text-white border-b border-white pb-2'
            : 'text-white/40 hover:text-white transition-colors'"
>
            ESCULTURA
            </button>

            <button
            type="button"
            @click="scrollToSection('escenografia')"
            :class="activeSection === 'escenografia'
                ? 'text-white border-b border-white pb-2'
                : 'text-white/40 hover:text-white transition-colors'"
            >
            ESCENOGRAFÍA
            </button>

      </div>
    </nav>

      <!-- Apartado de escultura -->
    <section id="escultura" class="scroll-mt-24 mb-24">

      <h2 class="text-sm tracking-[0.25em] mb-4">
        01 / ESCULTURA Y EXPERIMENTACIÓN
      </h2>

      <p class="text-sm leading-7 text-white/50 max-w-2xl">
        Obras tridimensionales y procesos de experimentación material.
      </p>
    

        <!-- Aquí añadiremos los proyectos -->
<div class="mt-12 space-y-20">

  <article
    v-for="(project, index) in sculptureProjects"
    :key="project.title"
    class="space-y-6"
  >
    <!-- Información del proyecto -->
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-3">

      <div>
        <p class="text-[10px] tracking-[0.2em] text-white/40 mb-3">
          PROYECTO {{ (index + 1).toString().padStart(2, '0') }}
        </p>

        <h3 class="text-xl md:text-2xl font-light">
          {{ project.title }}
        </h3>
      </div>

      <p class="text-xs tracking-wider text-white/50">
        {{ project.technique }}
      </p>

    </div>

    <!-- Carrusel horizontal -->
    <HorizontalCarousel
      :images="project.images"
      :title="project.title"
    />

    <!-- Descripción -->
    <p class="max-w-3xl text-sm leading-7 text-white/60">
      {{ project.description }}
    </p>

    <div class="border-t border-white/20"></div>

  </article>

</div>
  </section>
     <!-- Apartado de escenografía -->
    <section id="escenografia" class="scroll-mt-24 py-16">

      <h2 class="text-sm tracking-[0.25em] mb-4">
        02 / MODELADO 3D Y ESCENOGRAFÍA
      </h2>

      <p class="text-sm leading-7 text-white/50 max-w-2xl">
        Exploración del espacio y la construcción de entornos digitales
        mediante herramientas de modelado 3D.
      </p>
 <!-- Aquí añadiremos los proyectos -->
<div class="mt-12 space-y-6">

  <div
    v-for="project in scenographyProjects"
    :key="project.title"
    class="space-y-6"
  >
    <div>
      <p class="text-[10px] tracking-[0.2em] text-white/40 mb-3">
        PROYECTO 01
      </p>

      <h3 class="text-xl md:text-2xl font-light">
        {{ project.title }}
      </h3>

      <p class="text-xs tracking-wider text-white/50 mt-3">
        {{ project.technique }} · {{ project.year }}
      </p>
    </div>

    <HorizontalCarousel
      :images="project.images"
      :title="project.title"
    />

    <p class="max-w-3xl text-sm leading-7 text-white/60">
      {{ project.description }}
    </p>

    <p class="text-xs text-white/40">
      {{ project.format }} · Dimensiones variables
    </p>
  </div>

</div>
    </section>

  </main>
</template>



<style scoped>

</style>