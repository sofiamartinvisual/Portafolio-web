
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

// Importamos los componentes del carrusel de Shadcn Vue.
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

// Importamos el tipo de la API del carrusel.
import type { CarouselApi } from '@/components/ui/carousel'

// Creamos el array con las categorías del portafolio.
const categories = [
  'Visuales',
  'Audiovisual',
  'Escultura',
  'Pintura y dibujo'
]

// Obtenemos el router para navegar entre las páginas.
const router = useRouter()

// Guardamos la API del carrusel.
const carouselApi = ref<CarouselApi>()

// Guardamos el índice de la tarjeta seleccionada.
const currentIndex = ref(0)

// Recibimos y guardamos la API cuando se inicializa el carrusel.
function setApi(api: CarouselApi) {
  carouselApi.value = api
}

// Observamos los cambios de la API del carrusel.
watch(carouselApi, (api) => {
  if (!api) return

  // Obtenemos el índice inicial de la tarjeta seleccionada.
  currentIndex.value = api.selectedScrollSnap()

  // Escuchamos cuándo cambia la tarjeta seleccionada.
  api.on('select', () => {
    currentIndex.value = api.selectedScrollSnap()
  })
})

// Calculamos el aspecto visual de cada tarjeta según su posición.
function getCardStyle(index: number) {
  const total = categories.length

  // Calculamos la distancia respecto a la tarjeta central.
  let difference = index - currentIndex.value

  // Ajustamos la distancia para tener en cuenta el loop infinito.
  if (difference > total / 2) {
    difference -= total
  }

  if (difference < -total / 2) {
    difference += total
  }

  // La tarjeta central aparece más grande y totalmente visible.
  if (difference === 0) {
    return 'scale-100 opacity-100'
  }

  // Las tarjetas laterales aparecen algo más pequeñas.
  return 'scale-[0.85] opacity-70'
}

// Navegamos a la página correspondiente al pulsar una categoría.
function goToCategory(category: string) {
  const path = category
    .toLowerCase()
    .replace(' y ', '-')
    .replaceAll(' ', '-')

  router.push(`/${path}`)
}
</script>

<template>
  <!-- Contenedor principal de la página. -->
  <main class="min-h-screen bg-black text-white flex items-center justify-center">

    <!-- Contenedor del carrusel, centrado y con espacio para las flechas. -->
    <div class="relative w-full max-w-6xl px-16">

      <!-- Carrusel con alineación central y desplazamiento infinito. -->
      <Carousel
        :opts="{
          align: 'center',
          loop: true,
          skipSnaps: false
        }"
        class="w-full"
        @init-api="setApi"
      >

        <!-- Contenedor de las tarjetas. -->
        <CarouselContent class="-ml-4">

          <!-- Generamos una tarjeta por cada categoría. -->
          <CarouselItem
            v-for="(category, index) in categories"
            :key="category"
            class="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
          >

            <!-- Tarjeta individual con efecto de profundidad y navegación. -->
            <div
              class="aspect-square w-full border border-white/25 rounded-2xl
              flex items-center justify-center text-center
              backdrop-blur-sm bg-white/2
              transition-all duration-500 ease-in-out
              select-none cursor-pointer"
              :class="getCardStyle(index)"
              @click="goToCategory(category)"
            >

              <!-- Nombre de la categoría. -->
              <h2 class="text-xl md:text-2xl font-light tracking-wide select-none">
                {{ category }}
              </h2>

            </div>
          </CarouselItem>

        </CarouselContent>

        <!-- Flecha para retroceder. -->
        <CarouselPrevious />

        <!-- Flecha para avanzar. -->
        <CarouselNext />

      </Carousel>
    </div>
  </main>
</template>

<!-- Estilos CSS específicos de este componente. -->
<style scoped>

</style>
