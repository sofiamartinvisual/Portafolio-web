
<script setup lang="ts">
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'
</script>

<template>
  <main class="min-h-screen bg-black text-white px-7 md:px-12 py-6">

    <PortfolioNav />

    <!-- PRESENTACIÓN -->
    <section class="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

      <div>
        <p class="text-xs tracking-[0.3em] text-white/40 mb-6">
          PORTFOLIO / SOBRE MÍ
        </p>

        <h1 class="text-4xl md:text-6xl font-extralight tracking-widest leading-tight">
          SOFÍA<br />MARTÍN
        </h1>

        <p class="text-sm md:text-base tracking-[0.2em] text-white/50 mt-6">
          ARTISTA TRANSDISCIPLINAR
        </p>
      </div>

      <div class="flex flex-col justify-center gap-6 text-white/70 leading-relaxed text-sm md:text-base">
        <p>
          Soy estudiante de Bellas Artes en la Universitat Politècnica
          de València (UPV) y desarrollo un perfil creativo multidisciplinar
          entre la creación audiovisual y las artes visuales.
        </p>

        <p>
          Me interesa especialmente la producción audiovisual, la edición
          y el montaje, así como la dirección de arte, la escenografía y
          el desarrollo de propuestas visuales. Mi formación artística
          me permite abordar los proyectos desde una perspectiva
          transversal, combinando la investigación conceptual con la
          experimentación técnica y material.
        </p>

        <p>
          Busco seguir desarrollándome profesionalmente en entornos
          creativos, participar en proyectos colaborativos y ampliar
          mi experiencia en diferentes fases de los procesos de
          producción y creación.
        </p>
      </div>

    </section>

    <div class="border-t border-white/20"></div>

    <!-- ÁREAS DE INTERÉS -->
    <section class="py-16 md:py-20">

      <p class="text-xs tracking-[0.3em] text-white/40 mb-10">
        ÁREAS DE INTERÉS
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">

        <div>
          <h2 class="text-lg tracking-widest mb-3">
            AUDIOVISUAL
          </h2>
          <p class="text-sm text-white/50 leading-relaxed">
            Producción audiovisual, edición, montaje y postproducción.
          </p>
        </div>

        <div>
          <h2 class="text-lg tracking-widest mb-3">
            DIRECCIÓN DE ARTE
          </h2>
          <p class="text-sm text-white/50 leading-relaxed">
            Conceptualización visual, diseño de ambientes y escenografía.
          </p>
        </div>

        <div>
          <h2 class="text-lg tracking-widest mb-3">
            CREACIÓN VISUAL
          </h2>
          <p class="text-sm text-white/50 leading-relaxed">
            Fotografía, composición y desarrollo de propuestas visuales.
          </p>
        </div>

        <div>
          <h2 class="text-lg tracking-widest mb-3">
            ARTES PLÁSTICAS
          </h2>
          <p class="text-sm text-white/50 leading-relaxed">
            Escultura, modelado y experimentación material.
          </p>
        </div>

      </div>

    </section>

    <div class="border-t border-white/20"></div>

    <!-- PRÁCTICA ARTÍSTICA -->
    <section class="py-16 md:py-20 max-w-3xl">

      <p class="text-xs tracking-[0.3em] text-white/40 mb-10">
        PRÁCTICA ARTÍSTICA
      </p>

      <p class="text-lg md:text-2xl font-extralight leading-relaxed text-white/80 mb-8">
        Mi práctica artística explora cómo ciertas condiciones contemporáneas
        producen formas parciales, mediadas o erosionadas de experiencia,
        conexión y presencia.
      </p>

      <p class="text-sm md:text-base text-white/50 leading-relaxed mb-6">
        Pienso mi trabajo desde una tensión entre evanescencia y remanencia:
        entre aquello que se desvanece —la apertura, la conexión y ciertas
        formas de presencia plena— y aquello que persiste como eco, resto o
        presencia residual.
      </p>

      <p class="text-sm md:text-base text-white/50 leading-relaxed">
        Trabajo desde medios híbridos, con especial interés por lo audiovisual
        y, progresivamente, lo espacial y lo instalativo. A través de la
        repetición, la fragmentación, la construcción simbólica y los procesos
        materiales, exploro tensiones entre vulnerabilidad y control,
        conexión y retirada, permanencia y desvanecimiento.
      </p>

    </section>

  </main>
</template>
