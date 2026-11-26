
<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

// Componentes del carrusel de Shadcn Vue.
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import type { CarouselApi } from '@/components/ui/carousel'

// Categorías del portfolio.
const categories = [
  'Visuales',
  'Audiovisual',
  'Escultura',
  'Pintura y dibujo'
]

const router = useRouter()
const carouselApi = ref<CarouselApi>()
const currentIndex = ref(0)

// Giro automático del carrusel.
let autoplayInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  autoplayInterval = setInterval(() => {
    carouselApi.value?.scrollNext()
  }, 6000)
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})

// Guardamos y recuperamos la última tarjeta seleccionada.
function setApi(api: CarouselApi) {
  carouselApi.value = api
}

watch(carouselApi, (api) => {
  if (!api) return

  const savedIndex = Number(
    sessionStorage.getItem('homeCarouselIndex') ?? 0
  )

  api.scrollTo(savedIndex, true)
  currentIndex.value = api.selectedScrollSnap()

  api.on('select', () => {
    currentIndex.value = api.selectedScrollSnap()
    sessionStorage.setItem(
      'homeCarouselIndex',
      String(currentIndex.value)
    )
  })
})

// Estilo de las tarjetas según su posición.
function getCardStyle(index: number) {
  const total = categories.length
  let difference = index - currentIndex.value

  if (difference > total / 2) {
    difference -= total
  }

  if (difference < -total / 2) {
    difference += total
  }

  if (difference === 0) {
    return 'scale-100 opacity-100'
  }

  return 'scale-[0.85] opacity-70'
}

// Navegación a las páginas de categorías.
function goToCategory(category: string) {
  const path = category
    .toLowerCase()
    .replace(' y ', '-')
    .replaceAll(' ', '-')

  router.push(`/${path}`)
}

// Al pulsar una tarjeta lateral, la llevamos al centro.
function handleCardClick(index: number, category: string) {
  if (index !== currentIndex.value) {
    carouselApi.value?.scrollTo(index)
  } else {
    goToCategory(category)
  }
}

// Desplazamiento hacia las secciones de Sobre mí y Contacto.
function goToHomeSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
</script>

<template>
  <!-- Contenedor principal -->
  <main class="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-16">

    <!-- Encabezado -->
    <header class="text-center">
      <h1 class="text-3xl md:text-5xl font-extralight tracking-[0.2em] mb-4">
        SOFÍA MARTÍN
      </h1>

      <p class="text-sm md:text-base tracking-[0.35em] text-white/50">
        ARTISTA TRANSDISCIPLINAR
      </p>
    </header>

    <!-- Carrusel de categorías -->
    <div class="relative w-full max-w-7xl px-12">

      <Carousel
        :opts="{
          align: 'center',
          loop: true,
          skipSnaps: false,
          duration: 65
        }"
        class="w-full"
        @init-api="setApi"
      >

        <CarouselContent class="-ml-4">

          <CarouselItem
            v-for="(category, index) in categories"
            :key="category"
            class="pl-4 basis-full sm:basis-1/2 lg:basis-38%"
          >

            <!-- Tarjeta individual -->
            <div
              class="aspect-square w-full border border-white/25 rounded-2xl
              flex items-center justify-center text-center
              backdrop-blur-sm bg-white/2
              transition-all duration-500 ease-in-out
              select-none cursor-pointer"
              :class="getCardStyle(index)"
              @click="handleCardClick(index, category)"
            >

              <h2 class="text-xl md:text-2xl font-light tracking-wide select-none">
                {{ category }}
              </h2>

            </div>
          </CarouselItem>

        </CarouselContent>

        <!-- Flechas -->
        <CarouselPrevious
          class="border-white/20 bg-transparent text-white/60 hover:bg-white/10 hover:text-white hover:border-white/50 rounded-full"
        />

        <CarouselNext
          class="border-white/20 bg-transparent text-white/60 hover:bg-white/10 hover:text-white hover:border-white/50 rounded-full"
        />

      </Carousel>
    </div>

    <!-- Enlaces de navegación debajo del carrusel -->
    <nav class="flex items-center gap-12 text-sm md:text-base tracking-[0.25em] mt-4">

      <button
        type="button"
        @click="goToHomeSection('sobre-mi')"
        class="text-white/50 hover:text-white transition-colors"
      >
        SOBRE MÍ
      </button>

      <button
        type="button"
        @click="goToHomeSection('contacto')"
        class="text-white/50 hover:text-white transition-colors"
      >
        CONTACTO
      </button>

    </nav>

  </main>
</template>

<style scoped>
</style>
