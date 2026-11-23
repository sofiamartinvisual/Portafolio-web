

 <script setup lang="ts">
 import {ref} from 'vue'

    // Definimos la estructura de los proyectos.
interface Project {
  title: string
  year: string
  technique: string
  image: string
}

const props = defineProps<{
  projects: Project[]
}>()

// Guardamos el índice del proyecto que se está mostrando.
const currentIndex = ref(0)

// Avanzamos al siguiente proyecto.
function nextProject() {
  if (currentIndex.value < props.projects.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

// Volvemos al proyecto anterior.
function previousProject() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.projects.length - 1
  }
}
</script>

<template>
  <div
    v-if="projects.length > 0"
    class="relative flex flex-col items-center gap-6"
  >
    <!-- Contador -->
    <div class="flex justify-end w-full text-sm text-white/60">
      {{ (currentIndex + 1).toString().padStart(2, '0') }}
      /
      {{ projects.length.toString().padStart(2, '0') }}
    </div>

    <!-- Imagen del proyecto -->
    <div class="w-full max-w-4xl">
      <img
        :src="projects[currentIndex].image"
        :alt="projects[currentIndex].title"
        class="w-full aspect-video object-cover rounded-sm"
      />
    </div>

     <!-- Información del proyecto -->
    <div class="text-center text-white space-y-2">
      <h2 class="text-2xl font-light">
        {{ projects[currentIndex].title }}
      </h2>

        <p class="text-xs tracking-widest text-white/50">
        {{ projects[currentIndex].technique }} ·
        {{ projects[currentIndex].year }}
      </p>
    </div>

     <!-- Controles -->
    <div class="flex flex-col items-center gap-4 text-white/60">
      <button
        class="hover:text-white transition-colors"
        aria-label="Proyecto anterior"
        @click="previousProject"
      >
        ↑
      </button>

      <button
        class="hover:text-white transition-colors"
        aria-label="Proyecto siguiente"
        @click="nextProject"
      >
         ↓
      </button>
    </div>
  </div>
</template>