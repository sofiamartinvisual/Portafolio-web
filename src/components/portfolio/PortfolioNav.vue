
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

// Comprobamos si estamos en una página de proyectos.
const isProjectsPage = computed(() => {
  return !['/sobre-mi', '/contacto'].includes(route.path)
})

// Navegación hacia una sección de la página principal.
function goToSection(sectionId: string) {
  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)
    })
  } else {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <nav class="w-full flex items-center justify-between border-b border-white/20 pb-5 mb-9">

    <!-- Volver al inicio -->
    <RouterLink
      to="/"
      class="text-xs tracking-[0.2em] text-white/50 hover:text-white transition-colors"
    >
      ← INICIO
    </RouterLink>

    <!-- Navegación derecha -->
    <div class="flex items-center gap-4 md:gap-8 text-xs tracking-[0.2em]">

      <RouterLink
        to="/"
        :class="isProjectsPage
          ? 'text-white border-b border-white pb-2'
          : 'text-white/50 hover:text-white transition-colors'"
      >
        PROYECTOS
      </RouterLink>

      <RouterLink
        to="/sobre-mi"
        :class="route.path === '/sobre-mi'
          ? 'text-white border-b border-white pb-2'
          : 'text-white/50 hover:text-white transition-colors'"
      >
        SOBRE MÍ
      </RouterLink>

      <button
        type="button"
        @click="goToSection('contacto')"
        class="text-white/50 hover:text-white transition-colors"
      >
        CONTACTO
      </button>

    </div>
  </nav>
</template>
