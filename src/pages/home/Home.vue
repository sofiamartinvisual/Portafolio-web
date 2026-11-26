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

<
<template>
<main class="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-16 lg:gap-20 xl:gap-24 py-16">
    <!-- Cabecera -->
    <header class="text-center">
      <h1 class="text-3xl md:text-5xl xl:text-6xl tracking-[0.25em] font-light">
        SOFÍA MARTÍN
      </h1>

      <p class="text-sm md:text-base xl:text-lg tracking-[0.3em] text-white/50 mt-4">
        ARTISTA TRANSDISCIPLINAR
      </p>
    </header>

    <!-- Carrusel de proyectos -->
    <div class="w-full max-w-6xl xl:max-w-7xl px-6 md:px-16 xl:px-20">
      <Carousel
        class="w-full"
        :opts="{ align: 'center', loop: true }"
        @init-api="setApi"
      >
        <CarouselContent class="-ml-4">
          <CarouselItem
            v-for="(category, index) in categories"
            :key="category"
            class="pl-4 basis-[75%] md:basis-1/2 lg:basis-1/3"
          >
            <div
              @click="handleCardClick(index, category)"
              :class="getCardStyle(index)"
              class="aspect-square border border-white/30 flex items-center justify-center cursor-pointer transition-all duration-500 hover:border-white"
            >
              <h2 class="text-lg md:text-xl xl:text-2xl tracking-[0.2em] text-center px-4">
                {{ category.toUpperCase() }}
              </h2>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious class="left-0 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white" />
        <CarouselNext class="right-0 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white" />
      </Carousel>
    </div>

    <!-- Navegación inferior -->
    <nav class="flex items-center gap-12 text-sm md:text-base tracking-[0.25em] mt-4">
      
      <RouterLink
          to="/sobre-mi"
          class="text-white/50 hover:text-white transition-colors"
        >
          SOBRE MÍ
        </RouterLink>

      <RouterLink
        to="/contacto"
        class="text-white/50 hover:text-white transition-colors"
      >
        CONTACTO
      </RouterLink>
    </nav>

  </main>
</template>


<style scoped>
</style>
