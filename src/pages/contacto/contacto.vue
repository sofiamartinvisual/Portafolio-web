
<script setup lang="ts">
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'
</script>

<template>
  <main class="min-h-screen bg-black text-white px-7 md:px-12 py-6">

    <PortfolioNav />

    <section class="py-16 md:py-24">

      <p class="text-xs tracking-[0.3em] text-white/40 mb-8">
        PORTFOLIO / CONTACTO
      </p>

      <h1 class="text-5xl md:text-7xl font-extralight tracking-widest">
        HABLEMOS.
      </h1>

      <p class="text-sm md:text-base text-white/50 mt-8 max-w-xl leading-relaxed">
        Abierta a oportunidades profesionales, colaboraciones y nuevos
        proyectos creativos. Si tienes una propuesta o te interesa mi
        trabajo, estaré encantada de escucharte.
      </p>

    </section>

    <div class="border-t border-white/20"></div>

    <!-- YOUTUBE -->
    <section class="py-12 md:py-16">

      <p class="text-xs tracking-[0.3em] text-white/40 mb-6">
        TRABAJO AUDIOVISUAL
      </p>

      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h2 class="text-2xl md:text-4xl font-light tracking-wider">
            YOUTUBE
          </h2>

          <p class="text-sm text-white/50 mt-3">
            Una selección de mis proyectos y trabajos audiovisuales.
          </p>
        </div>

        <a
          href="https://youtube.com/playlist?list=PLR7oEVwOJBVWAlZAWPAbDCMBBIF8SLHR7"
          target="_blank"
          rel="noopener noreferrer"
          class="border border-white/40 px-7 py-4 text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-colors text-center"
        >
          VER PROYECTOS ↗
        </a>

      </div>

    </section>

    <div class="border-t border-white/20"></div>

    <!-- OTROS ENLACES -->
<section class="py-12 md:py-16">

  <p class="text-xs tracking-[0.3em] text-white/40 mb-8">
    ENCUÉNTRAME EN
  </p>

  <div class="flex flex-col">

    <!-- YOUTUBE -->
    <a
      href="https://youtube.com/playlist?list=PLR7oEVwOJBVWAlZAWPAbDCMBBIF8SLHR7"
      target="_blank"
      rel="noopener noreferrer"
      class="flex justify-between items-center py-6 border-b border-white/20 group"
    >
      <span class="text-sm tracking-widest group-hover:text-white/60 transition-colors">
        YOUTUBE
      </span>
      <span class="text-xs text-white/40 group-hover:text-white transition-colors">
        VER PROYECTOS ↗
      </span>
    </a>

    <!-- LINKEDIN -->
    <a
      href="https://www.linkedin.com/in/sofia-martin-050503354/"
      target="_blank"
      rel="noopener noreferrer"
      class="flex justify-between items-center py-6 border-b border-white/20 group"
    >
      <span class="text-sm tracking-widest group-hover:text-white/60 transition-colors">
        LINKEDIN
      </span>
      <span class="text-xs text-white/40 group-hover:text-white transition-colors">
        PERFIL PROFESIONAL ↗
      </span>
    </a>

    <!-- INSTAGRAM -->
    <a
      href="https://www.instagram.com/remanescencias.raw/"
      target="_blank"
      rel="noopener noreferrer"
      class="flex justify-between items-center py-6 border-b border-white/20 group"
    >
      <span class="text-sm tracking-widest group-hover:text-white/60 transition-colors">
        INSTAGRAM
      </span>
      <span class="text-xs text-white/40 group-hover:text-white transition-colors">
        @REMANESCENCIAS.RAW ↗
      </span>
    </a>

  </div>

</section>

    <footer class="pt-8 pb-4 text-xs tracking-widest text-white/30">
      SOFÍA MARTÍN · PORTFOLIO
    </footer>

  </main>
</template>
