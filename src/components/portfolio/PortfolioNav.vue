
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

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
      <span class="text-white border-b border-white pb-2 cursor-default">
        PROYECTOS
      </span>

      <button
        type="button"
        @click="goToSection('sobre-mi')"
        class="text-white/50 hover:text-white transition-colors"
      >
        SOBRE MÍ
      </button>

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
